package com.example.blood.Controller;
import com.example.blood.DatabaseObjects.Register;
import com.example.blood.Service.RegisterService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/register")
public class RegisterController {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPersistenceUnit");
    private static final EntityManager em = emf.createEntityManager();
    @PostMapping("/DonorDetails")
    public String Save(@RequestBody Register r){
        em.getTransaction().begin();
        em.persist(r);
        em.getTransaction().commit();
        return "Saved the data";


    }


}
