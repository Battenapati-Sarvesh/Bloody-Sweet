package com.example.blood.Service;

import com.example.blood.DatabaseObjects.Person;
import com.example.blood.DatabaseObjects.Register;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.transaction.Transactional;



public class RegisterService {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    private static final EntityManager em = emf.createEntityManager();
    public static void main(String[] args){

    }
    @Transactional
    public static void SaveRegister(Register r){

        em.getTransaction().begin();
        em.persist(r);
        System.out.println("Saved the data");
        em.getTransaction().commit();

    }

    @Transactional
    public static void SavePerson(Person r){

        em.getTransaction().begin();
        em.persist(r);
        System.out.println("Saved the data");
        em.getTransaction().commit();

    }



}
