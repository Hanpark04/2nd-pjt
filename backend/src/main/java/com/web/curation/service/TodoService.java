package com.web.curation.service;

import com.web.curation.data.dto.TodoDto;
import com.web.curation.data.entity.LikedCampList;
import com.web.curation.data.entity.TodoList;
import com.web.curation.data.repository.LikedCampRepository;
import com.web.curation.data.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class TodoService {
    private final TodoRepository todoRepository;
    private final LikedCampRepository likedCampRepository;

    /* CREATE */
    @Transactional
    public int save(int saveId, TodoDto.Request dto) {
        LikedCampList likedCampList = likedCampRepository.findById(saveId).orElseThrow(() ->
                new IllegalArgumentException("todo 추가 실패: 해당 찜이 존재하지 않습니다. " + saveId));

        dto.setSaveId(likedCampList);
        dto.setDone(false);

        TodoList todoList = dto.toEntity();
        todoRepository.save(todoList);

        return todoList.getTodoId();
    }


}
