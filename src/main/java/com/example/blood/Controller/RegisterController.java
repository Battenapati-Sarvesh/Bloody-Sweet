package com.example.blood.Controller;
import com.example.blood.Models.GetDonors;
import com.example.blood.Models.Register;
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

        GetDonors obj = new GetDonors();

        obj.setName(r.getName());
        obj.setBloodGroup(r.getBloodGroup());
        obj.setCity(r.getCity());
        obj.setZip(r.getZip());
        obj.setState(r.getState());

        em.getTransaction().begin();
        em.persist(r);
        em.persist(obj);
        em.getTransaction().commit();

        return "Saved the data";


    }

}
