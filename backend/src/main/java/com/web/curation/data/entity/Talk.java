package com.web.curation.data.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Talk {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int boardId;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    private LocalDateTime uploadDate;
    private String title;
    private String content;
    private String hashtag;

    @OneToOne(mappedBy = "")
    private ThumbnailFile thumbnailFile;

    @OneToMany(mappedBy = "talk", cascade = CascadeType.ALL)
    private List<TalkContent> talkContents;

}
