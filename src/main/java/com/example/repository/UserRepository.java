package com.example.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.example.entity.Users;

public interface UserRepository extends JpaRepository<Users, Long>{
	// メールアドレスでユーザーを検索
    Optional<Users> findByEmail(@Param("email") String email);

}
