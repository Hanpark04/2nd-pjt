package com.web.curation.controller;

import com.web.curation.config.security.JwtTokenProvider;
import com.web.curation.data.dto.ScheduleDto;
import com.web.curation.service.MemberService;
import com.web.curation.service.ScheduleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {
    private final Logger LOGGER = LoggerFactory.getLogger(ScheduleController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";
    private final ScheduleService scheduleService;
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public ScheduleController(ScheduleService scheduleService, JwtTokenProvider jwtTokenProvider){
        this.scheduleService = scheduleService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    /* UPDATE */
    @PutMapping("/{saveId}")
    public ResponseEntity update(@PathVariable int saveId, @RequestBody ScheduleDto.Request dto) {
        scheduleService.update(saveId, dto);
        return ResponseEntity.ok(saveId);
    }

    /* DELETE */
    @DeleteMapping("/{saveId}")
    public ResponseEntity delete(@PathVariable int saveId) {
        scheduleService.delete(saveId);
        return ResponseEntity.ok(saveId);
    }
}
