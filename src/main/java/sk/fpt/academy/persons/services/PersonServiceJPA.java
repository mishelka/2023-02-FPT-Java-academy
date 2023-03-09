package sk.fpt.academy.persons.services;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.fpt.academy.persons.entities.Person;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Transactional
public class PersonServiceJPA implements PersonService {
        @PersistenceContext
        private EntityManager entityManager;

        final String SELECT_PERSONS =  "SELECT p FROM Person p ORDER BY p.name ASC";

        @Override
        public void addPerson(Person person) {
            System.out.println("ADDING: " + person);
            entityManager.persist(person);
        }

        @Override
        public List<Person> getPersons() {
            return entityManager.createQuery(SELECT_PERSONS).getResultList();
        }

        @Override
        public void reset() {
            final String STATEMENT_RESET = "DELETE FROM person";
            entityManager.createNativeQuery(STATEMENT_RESET).executeUpdate();
        }
}
