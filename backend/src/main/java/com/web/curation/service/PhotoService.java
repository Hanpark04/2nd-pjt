package com.web.curation.service;

import com.web.curation.data.dto.PhotoDto;
import com.web.curation.data.entity.Community;

import java.util.List;

public interface PhotoService {
    List<PhotoDto> listPhoto();
    List<PhotoDto> bestPhoto();

    boolean writePhoto(PhotoDto photoDto);
    boolean updatePhoto(PhotoDto photoDto);
    boolean deletePhoto(int boardId);

}
