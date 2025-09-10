package com.cruise.backend.security;

import com.cruise.backend.constants.UsageStatus;
import com.cruise.backend.helper.ResponseBuilder;
import com.cruise.backend.repositories.UserRepo;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtHelper jwtHelper;
    private final UserDetailsService userDetailsService;
    private final HandlerExceptionResolver handlerExceptionResolver;
    private final ResponseBuilder responseBuilder;
    private final UserRepo userRepo;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String requestPath = request.getRequestURI();
        if (requestPath.startsWith("/v1/api/auth")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            final String jwt = authHeader.substring(7);
            if (jwt.isEmpty()) {
                responseBuilder.writeErrorResponse(
                        response,
                        HttpStatus.BAD_REQUEST,
                        "Missing JWT token",
                        Map.of("token", "Authorization header is empty")
                );
                return;
            }
            final String userName = jwtHelper.extractUsername(jwt);

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (userName != null && authentication == null) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);

                if (jwtHelper.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities()
                    );

                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }

            filterChain.doFilter(request, response);

        } catch (ExpiredJwtException e) {
            userRepo.findByEmail(e.getClaims().getSubject())
                    .ifPresent(user -> {
                        user.setUsageStatus(UsageStatus.INACTIVE);
                        userRepo.save(user);
                    });
            responseBuilder.writeErrorResponse(response, HttpStatus.UNAUTHORIZED, "Token has expired", Map.of("token", e.getMessage()));

        } catch (MalformedJwtException e) {
            responseBuilder.writeErrorResponse(response, HttpStatus.BAD_REQUEST, "Malformed JWT token", Map.of("token", e.getMessage()));

        } catch (SignatureException e) {
            responseBuilder.writeErrorResponse(response, HttpStatus.UNAUTHORIZED, "Invalid JWT signature", Map.of("token", e.getMessage()));

        } catch (IllegalArgumentException e) {
            responseBuilder.writeErrorResponse(response, HttpStatus.BAD_REQUEST, "Invalid token", Map.of("token", e.getMessage()));
        }
    }
}
