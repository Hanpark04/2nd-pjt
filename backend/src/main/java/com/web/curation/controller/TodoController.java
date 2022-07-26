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

    /* UPDATE */
    @PutMapping({"/{todoId}"})
    public ResponseEntity update(@PathVariable int todoId, @RequestBody TodoDto.Request dto) {
        todoService.update(todoId, dto);
        return ResponseEntity.ok(todoId);
    }

    /* DELETE */
    @DeleteMapping("/{todoId}")
    public ResponseEntity delete(@PathVariable int todoId) {
        todoService.delete(todoId);
        return ResponseEntity.ok(todoId);
    }
}
