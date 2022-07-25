package com.web.curation.data.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class LikedCampList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int saveId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "campId")
    private TotalCampList totalCampList;

    private String startDate;
    private String endDate;

    private String savedTitle;


    /* 게시글 수정 */
    public void update(String startDate, String endDate, String savedTitle) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.savedTitle = savedTitle;
    }

}
