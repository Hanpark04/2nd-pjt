package com.web.curation.controller;


import com.web.curation.data.dto.CampDto;
import com.web.curation.data.dto.ScheduleDto;
import com.web.curation.data.dto.UserDto;
import com.web.curation.data.entity.LikedCampList;
import com.web.curation.data.entity.TotalCampList;
import com.web.curation.exception.CampNotFoundException;
import com.web.curation.service.CampService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/camp")
public class CampController {


    @Autowired
    CampService campService;

    @Autowired
    public CampController(CampService campService) {
        this.campService = campService;
    }

    @GetMapping("/")
    public List<TotalCampList> getAllCamps(){
        return campService.getAllCamps();
    }

    @GetMapping("/{campId}")
    public TotalCampList getCampById(@PathVariable("campId") int campId){
        TotalCampList camp = campService.findById(campId)
                .orElseThrow(()->new CampNotFoundException("Student with "+campId+" is Not Found!"));
        return camp;
    }


    /* CREATE */
    @PostMapping("/")
//    public ResponseEntity save(@RequestBody ScheduleDto.Request dto, @LoginUser UserDto.Response user ) {
//        return ResponseEntity.ok(postsService.save(dto, user.getNickname()));
//    }
    public ResponseEntity save(@RequestBody ScheduleDto.Request dto) {
        System.out.println("controller");
        System.out.println(dto.getSaveId());
        System.out.println(dto.getEndDate());
        System.out.println(dto.getStartDate());
        return ResponseEntity.ok(campService.save(dto,1,1));
    }


}
