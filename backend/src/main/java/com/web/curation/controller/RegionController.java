package com.web.curation.controller;

import com.web.curation.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;

public class RegionController {
    private final RegionService regionService;

    @Autowired
    public RegionController(RegionService regionService){
        this.regionService = regionService;
    }




}
