package com.web.curation.service;

import com.web.curation.data.dto.UserDto;
import com.web.curation.data.entity.User;

public interface MemberService {

    boolean register(UserDto registerDto);
    UserDto login(UserDto loginUser) throws RuntimeException;

}
