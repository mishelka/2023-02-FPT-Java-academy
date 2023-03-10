package sk.fpt.academy.persons.services;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import sk.fpt.academy.persons.entities.Department;

import java.util.List;

@Transactional
public class DepartmentServiceJPA implements DepartmentService {
    @PersistenceContext
    private EntityManager entityManager;
    final String SELECT_DEPARTMENTS =  "SELECT d FROM Department d ORDER BY d.name ASC";

    @Override
    public void addDepartment(Department d) {
        System.out.println("ADDING: " + d);
        entityManager.persist(d);
    }

    @Override
    public List<Department> getDepartments() {
        return entityManager.createQuery(SELECT_DEPARTMENTS).getResultList();
    }

    @Override
    public void reset() {
        entityManager.createNativeQuery("DELETE FROM person").executeUpdate();
    }
}
