package com.web.curation.data.repository;

import com.web.curation.data.dto.ScheduleDto;
import com.web.curation.data.entity.LikedCampList;
import com.web.curation.data.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface LikedCampRepository  extends JpaRepository<LikedCampList, Integer> {
    LikedCampList getById(int saveId);
    List<LikedCampList> findAllByUserAndAndStartDateAfter(User user, LocalDate now);
}
