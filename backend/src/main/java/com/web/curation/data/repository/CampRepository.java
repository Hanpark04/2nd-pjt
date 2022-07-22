package com.web.curation.data.repository;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.entity.TotalCampList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CampRepository extends JpaRepository<TotalCampList, Integer> {
}
