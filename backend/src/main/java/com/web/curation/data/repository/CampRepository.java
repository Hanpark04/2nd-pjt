package com.web.curation.data.repository;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.dto.TagDto;
import com.web.curation.data.entity.TotalCampList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CampRepository extends JpaRepository<TotalCampList, Integer> {
    TotalCampList getById(int campId);
    List<TotalCampList> findByFacltNmNotContains(String keyword);
    List<TotalCampList> findByDoNmAndSigunguNmStartsWith(String doNm, String sigunguNm);
    TotalCampList getByCampId(int campId);
    List<CampDto.CampList> findAllByOrderByFacltNm();

}
