package com.web.curation.controller;


import com.web.curation.data.dto.CampDto;
import com.web.curation.data.entity.TotalCampList;
import com.web.curation.exception.CampNotFoundException;
import com.web.curation.service.CampService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/camp")
public class CampController {
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

}
