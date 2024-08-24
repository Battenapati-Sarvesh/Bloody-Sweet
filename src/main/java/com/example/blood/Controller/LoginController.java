package com.example.blood.Controller;

import com.example.blood.Models.Login;
import com.example.blood.Models.Register;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/login")
public class LoginController {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    private static final EntityManager em = emf.createEntityManager();
    @PostMapping("/User")
    public String LoginUser(@RequestBody Login r){
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Register> cq = cb.createQuery(Register.class);
        Root<Register> root = cq.from(Register.class);
        Predicate pr = cb.equal(root.get("email"),r.getEmail());
        cq.select(root).where(pr);
        Register s = em.createQuery(cq).getSingleResult();
        if(s==null){
            return "User not registered";
        }
        if(s.getPassword().equals(r.getPassword())){
            System.out.println("success");
            return "Logged in successfully";

        }else{
            System.out.println("Failed");
            return "Invalid Credentials";

        }



    }

}
