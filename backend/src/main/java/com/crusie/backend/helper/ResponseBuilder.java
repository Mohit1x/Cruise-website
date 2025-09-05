package com.crusie.backend.helper;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

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
}
