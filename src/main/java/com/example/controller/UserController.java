package com.example.controller;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Users;
import com.example.service.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	//user登録
	@PostMapping("/signup")
	public Users signupUser(@RequestBody Users user) {
		System.out.println("リクエストデーター：" + user);
		return userService.signupUser(user);
	}
	
	
	 @PostMapping("/login")
	 public ResponseEntity<?> loginUser(@RequestBody Users user) {
	    Users loginUser = userService.authenticateUser(user.getEmail(), user.getPassword());
		return ResponseEntity.ok(loginUser);
	}

}
