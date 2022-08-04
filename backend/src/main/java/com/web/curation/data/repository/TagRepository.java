package com.web.curation.data.repository;

import com.web.curation.data.dto.CampDto;
import com.web.curation.data.dto.TagDto;
import com.web.curation.data.entity.CampTag;
import com.web.curation.data.entity.TotalCampList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TagRepository  extends JpaRepository<CampTag, Integer> {
    @Query("select distinct t " +
            "from CampTag t " +
            "where (t.hashtag in (:taglist))" //+
//            "or (t.tagGroup = 2 and t.hashtag in :taglist)" +
//            "or (t.tagGroup = 3 and t.hashtag in :taglist)" +
//            "or (t.tagGroup = 4 and t.hashtag in :taglist)" +
//            "or (t.tagGroup = 5 and t.hashtag in :taglist)" +
//            "or (t.tagGroup = 6 and t.hashtag in :taglist)" +
//            "or (t.tagGroup = 7 and t.hashtag in :taglist)"
            )
    List<TagDto.SearchedTag> findByHashtag(List<String> taglist);

}
