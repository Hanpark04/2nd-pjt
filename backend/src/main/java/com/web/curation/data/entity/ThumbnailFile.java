package com.web.curation.data.entity;

import javax.persistence.*;

public class ThumbnailFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int fileId;

    @OneToOne
    @JoinColumn(name = "talkId")
    private Community community;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String filePath;

    private String fileType;

    private String fileSize;

    private String saveName;
}
