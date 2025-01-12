package com.example.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.LoginRequest;
import com.example.entity.Users;
import com.example.entity.UsersDTO;
import com.example.service.UserService;

@RestController
@RequestMapping("api/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	//user登録
	@PostMapping("/signup")
	public ResponseEntity<?> signupUser(@RequestBody Users user) {
		System.out.println("リクエストデーター：" + user);
		try {
			Users users = userService.signupUser(user);
			return ResponseEntity.ok(users);
		} catch (DataIntegrityViolationException e) {
			//メールアドレスが既にしようされている場合
			return ResponseEntity.status(HttpStatus.CONFLICT).body("このメールアドレスは既に使用されています。");
		} catch (Exception e) {
			// 想定外のエラー
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("予期しないエラーが発生しました");
		}
		
	}
	
	
	 @PostMapping("/signin")
	 public ResponseEntity<?> signinUser(@RequestBody LoginRequest loginRequest) {    
		 try {
	        UsersDTO loginUser = userService.signinUsers(loginRequest.getEmail(), loginRequest.getPassword());
	        return ResponseEntity.ok(loginUser);  // サインイン成功時
	    } catch (UsernameNotFoundException | IllegalArgumentException e) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());  // エラー発生時
	    }
	 }
}
