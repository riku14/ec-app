package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Users;
import com.example.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	//ユーザー登録
	public Users signupUser(Users users) {
		if (users.getRole() == null || users.getRole().isEmpty()) {
			users.setRole("customer");
		}
		return userRepository.save(users);
		
	}

}
