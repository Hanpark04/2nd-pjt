package com.web.curation.data.repository;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.dto.TagDto;
import com.web.curation.data.entity.CampTag;
import com.web.curation.data.entity.TotalCampList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TagRepository  extends JpaRepository<CampTag, Integer> {
    List<TagDto.SearchedTag> findByHashtag(String hashtag);

}
