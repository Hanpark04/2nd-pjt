package com.web.curation.service;

import com.web.curation.data.dto.PhotoDto;
import com.web.curation.data.entity.Community;
import com.web.curation.data.entity.User;
import com.web.curation.data.repository.CommunityRepository;
import com.web.curation.data.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PhotoServiceimpl implements PhotoService {

    private final Logger LOGGER = LoggerFactory.getLogger(PhotoServiceimpl.class);

    private final CommunityRepository communityRepository;
    private final UserRepository userRepository;

    @Autowired
    public PhotoServiceimpl(CommunityRepository communityRepository, UserRepository userRepository) {
        this.communityRepository = communityRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<PhotoDto> listPhoto() {
        List<Community> listCommunity = communityRepository.findAll();

        return getPhotoDtos(listCommunity);
    }

    @Override
    public List<PhotoDto> bestPhoto() {
        List<Community> listCommunity = communityRepository.findTop8ByOrderByClickDesc();
        return getPhotoDtos(listCommunity);
    }

    private List<PhotoDto> getPhotoDtos(List<Community> listCommunity) {
        List<PhotoDto> listPhoto = new ArrayList<>();

        for(Community community : listCommunity){

            PhotoDto photoDto = new PhotoDto();
            photoDto.setBoardId(community.getBoardId());
            photoDto.setTitle(community.getTitle());
            photoDto.setNickname(community.getUser().getNickname());
            photoDto.setContent(community.getContent());
            photoDto.setUploadDate(community.getUploadDate());
            photoDto.setDType(community.getDType());
            photoDto.setClick(community.getClick());

            listPhoto.add(photoDto);
        }

        return listPhoto;
    }

    @Override
    public boolean writePhoto(PhotoDto photoDto) {
        LOGGER.info("[photo 게시글 등록] 게시글 제목 : {}", photoDto.getTitle());
        Community community = new Community();
        community.setTitle(photoDto.getTitle());
        community.setContent(photoDto.getContent());
        User user = userRepository.getByNickname(photoDto.getNickname());
        community.setUser(user);
        community.setUploadDate(LocalDateTime.now());
        community.setClick(0);
        community.setDType(2);

        Community savedCommunity = communityRepository.save(community);

        LOGGER.info("[getSignUpResult] userEntity 값이 들어왔는지 확인 후 결과값 주입");
        if (savedCommunity != null) {
            LOGGER.info("photo 게시글 저장 완료");
            return true;
        } else {
            LOGGER.info("photo 게시글 저장 실패");
            return false;
        }
    }

    @Override
    public boolean updatePhoto(PhotoDto photoDto) {

        Community community = communityRepository.findByBoardId(photoDto.getBoardId());

        community.setTitle(photoDto.getTitle());
        community.setContent(photoDto.getContent());

        communityRepository.save(community);

        if(community.getTitle() == photoDto.getTitle() && community.getContent() == photoDto.getContent()){
            return true;
        }
        return false;
    }

    @Override
    public boolean deletePhoto(int boardId) {

        Community community = communityRepository.findByBoardId(boardId);

        communityRepository.delete(community);

        Community verify = communityRepository.findByBoardId(boardId);

        if(verify == null) return true;
        return false;
    }

}
