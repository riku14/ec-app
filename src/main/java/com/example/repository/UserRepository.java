package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	// メールアドレスでユーザーを検索
    Optional<Users> findByEmail(String email);

}
