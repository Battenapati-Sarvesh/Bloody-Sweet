package com.example.blood.Models;


import jakarta.persistence.*;

@Entity
@Table(name = "BloodDonors")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Long phoneNumber;
    private String bloodGroup;
    private String location;

    public Person(int id, String name, Long phoneNumber, String bloodGroup, String location) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.bloodGroup = bloodGroup;
        this.location = location;
    }
    public Person(){}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
