package com.web.curation.data.repository;

import com.web.curation.data.entity.Sidocode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegionRepository extends JpaRepository<Sidocode, Integer> {

}
