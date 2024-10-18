package com.example.blood.Controller;

import com.example.blood.Models.GetDonors;
import com.example.blood.Models.Register;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Get")
public class ProfileController {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    private static final EntityManager em = emf.createEntityManager();
    @GetMapping("/Profile")
    public static Register getProfile(@RequestParam String email){

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Register> cq = cb.createQuery(Register.class);
        Root<Register> root = cq.from(Register.class);
        Predicate pr = cb.equal(root.get("email"),email);

        cq.select(root).where(pr);
        Register l = (em.createQuery(cq).getSingleResult());
        return l;
    }
}
