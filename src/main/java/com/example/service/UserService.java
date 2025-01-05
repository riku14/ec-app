package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Users;
import com.example.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	//ユーザー登録
	public Users signupUser(Users users) {
		if (users.getRole() == null || users.getRole().isEmpty()) {
			users.setRole("customer");
		}
		
		// パスワードをハッシュ化する
        String encodedPassword = passwordEncoder.encode(users.getPassword());

        // ハッシュ化したパスワードをセット
        users.setPassword(encodedPassword);
		return userRepository.save(users);
		
	}
	
	/**
     * ユーザーの認証を行うメソッド
     * 
     * @param email    ユーザーのメールアドレス
     * @param password ユーザーのパスワード
     * @return 認証されたユーザー情報
     */
	public Users authenticateUser(String email, String password) {
		Users user = userRepository.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("ユーザーが見つかりません"));
		
		// パスワードを照合
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new IllegalArgumentException("パスワードが一致しません");
        }
        
        return user;
	}
	
	

}
