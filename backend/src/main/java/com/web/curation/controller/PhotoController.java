package com.web.curation.controller;

import com.web.curation.data.dto.PhotoDto;
import com.web.curation.data.entity.Community;
import com.web.curation.service.PhotoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/photo")
public class PhotoController {
    private final Logger LOGGER = LoggerFactory.getLogger(PhotoController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    private final PhotoService photoService;

    @Autowired
    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping
    public ResponseEntity<List<PhotoDto>> listPhoto() {
        LOGGER.info("listPhoto - 호출");
        return new ResponseEntity<List<PhotoDto>>(photoService.listPhoto(), HttpStatus.OK);
    }

    @GetMapping("/best")
    public ResponseEntity<List<PhotoDto>> bestPhoto() {
        LOGGER.info("bestPhoto - 호출");
        return new ResponseEntity<List<PhotoDto>>(photoService.bestPhoto(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> writePhoto(@RequestBody PhotoDto photoDto) {
        LOGGER.info("writePhoto - 호출");
        if (photoService.writePhoto(photoDto)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<String> updatePhoto(@RequestBody PhotoDto photoDto) {
        LOGGER.info("updatePhoto - 호출");
        if (photoService.updatePhoto(photoDto)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("{boardId}")
    public ResponseEntity<String> deletePhoto(@PathVariable int boardId) {
        LOGGER.info("deletePhoto - 호출");
        if (photoService.deletePhoto(boardId)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }
}
