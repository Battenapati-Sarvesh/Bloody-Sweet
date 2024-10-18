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

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Find")
public class GetDonorsController {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    private static final EntityManager em = emf.createEntityManager();
    @GetMapping("/Donors")
    public static List<GetDonors> getDonators(@RequestParam(required = false) String bloodGroup,
                                              @RequestParam(required = false) String state,
                                              @RequestParam(required = false) String city,
                                              @RequestParam(required = false) Long zip){


        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<GetDonors> cq = cb.createQuery(GetDonors.class);
        Root<GetDonors> root = cq.from(GetDonors.class);
        Predicate pr = cb.and(cb.equal(root.get("bloodGroup"),bloodGroup),
                                cb.equal(root.get("state"),state),
                                cb.equal(root.get("city"),city),
                                cb.equal(root.get("zip"),zip));
        cq.select(root).where(pr);
        List<GetDonors> l = (em.createQuery(cq).getResultList());
        return l;

    }


    @GetMapping("/AllDonors")
    public static List<GetDonors> getAllDonators() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<GetDonors> cq = cb.createQuery(GetDonors.class);
        Root<GetDonors> root = cq.from(GetDonors.class);
        cq.select(root);
        return em.createQuery(cq).getResultList();

    }


}
