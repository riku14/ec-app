package com.example.entity;

import lombok.Data;

@Data
public class UsersDTO {
    private String username;
    private String email;
    private String role;

    public UsersDTO(Users user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.role = user.getRole();
    }
}

