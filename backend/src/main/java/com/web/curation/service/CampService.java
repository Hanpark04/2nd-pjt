package com.web.curation.service;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.entity.TotalCampList;
import com.web.curation.data.repository.CampRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampService implements ICampService{
    CampRepository campRepository;

    @Autowired
    public CampService(CampRepository campRepository) {
        this.campRepository = campRepository;
    }

    @Override
    public List<TotalCampList> getAllCamps() {
        return campRepository.findAll();
    }

    @Override
    public Optional<TotalCampList> findById(int camp_id){
        return campRepository.findById(camp_id);
    }
}
