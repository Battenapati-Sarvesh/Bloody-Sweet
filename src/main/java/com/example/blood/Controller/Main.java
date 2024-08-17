package com.example.blood.Controller;

import com.example.blood.DatabaseObjects.Person;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/*
@RestController
@RequestMapping("/Bloody-Sweet")*/
public class Main {
    public static EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    public static EntityManager em = emf.createEntityManager();
    public static void main(String[] args){

        Person p = new Person(1,"Sarvesh",9573102853L,"O Positive","Vijayawada");


        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
    }

}
