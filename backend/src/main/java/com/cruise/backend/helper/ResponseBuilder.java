package com.cruise.backend.helper;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Component
public class ResponseBuilder {

    public ResponseEntity<Object> buildResponse(String message, Map<String, Object> data, HttpStatus status) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("status", status.value());
        body.put("error", status.getReasonPhrase());
        body.put("message", message);
        if (data != null && !data.isEmpty()) {
            body.put("data", data);
        }
        return new ResponseEntity<>(body, status);
    }

    public ResponseEntity<Object> buildResponseError(String message, Map<String, String> errors, HttpStatus status) {
        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("status", status.value());
        body.put("error", status.getReasonPhrase());
        body.put("message", message);
        if (errors != null && !errors.isEmpty()) {
            body.put("errors", errors);
        }
        return new ResponseEntity<>(body, status);

    }

    public void writeErrorResponse(HttpServletResponse response, HttpStatus status, String message, Map<String, String> errors) throws IOException {
        response.setContentType("application/json");
        response.setStatus(status.value());

        Map<String, Object> body = new HashMap<>();
        body.put("timestamp", LocalDateTime.now());
        body.put("status", status.value());
        body.put("error", status.getReasonPhrase());
        body.put("message", message);
        if (errors != null && !errors.isEmpty()) {
            body.put("errors", errors);
        }

        new ObjectMapper().writeValue(response.getWriter(), body);
    }

}
