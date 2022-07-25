package com.web.curation.data.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class PhotoDto {

    private int boardId;
    // 프로필 이미지
    private String nickname;
    private String title;
    private String content;
    private LocalDateTime uploadDate;
    private int click;
    private int like;
    private int dType;
    private List<String> tag;

}
