package com.web.curation.service;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.entity.TotalCampList;

import java.util.List;
import java.util.Optional;

public interface ICampService {

    List<TotalCampList> getAllCamps();
    Optional<TotalCampList> findById(int campId);

}
