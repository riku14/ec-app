package com.example.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.Data;

@Entity
@Data
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String username;
	private String email;
	private String password;
	private String role;
	
    @Column(name = "reg_date")
    private LocalDateTime reg_date;

    // エンティティが保存される前に呼ばれる
    @PrePersist
    public void prePersist() {
        this.reg_date = LocalDateTime.now();  // 現在の日時を設定
    }
	
}
