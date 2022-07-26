package com.web.curation.controller;

import com.web.curation.data.dto.TodoDto;
import com.web.curation.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/todo")
@RestController
public class TodoController {

    private final TodoService todoService;
    /* CREATE */
    @PostMapping()
    public ResponseEntity save(@RequestBody TodoDto.Request dto) {
        return ResponseEntity.ok(todoService.save(5, dto));
    }
}
