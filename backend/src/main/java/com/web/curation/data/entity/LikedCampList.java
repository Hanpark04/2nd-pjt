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

//    @Builder
//    public LikedCampList(int saveId, User userId, TotalCampList campId, Date startDate, Date endDate){
//        this.saveId = saveId;
//        this.user = userId;
//        this.totalCampList = campId;
//        this.startDate = startDate;
//        this.endDate = endDate;
//    }

}
