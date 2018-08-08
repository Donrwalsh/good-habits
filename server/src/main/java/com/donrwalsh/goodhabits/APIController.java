package com.donrwalsh.goodhabits;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class APIController {

    @RequestMapping(value = "/hello-world", produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    ResponseEntity<?> helloWorld() {
        return ResponseEntity.ok().body(new hello("Hello World"));
    }
}
