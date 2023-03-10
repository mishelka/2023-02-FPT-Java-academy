package sk.fpt.academy.persons.services;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;
import sk.fpt.academy.persons.entities.Car;

import java.util.List;

@Transactional
public class CarServiceJPA implements CarService {
        @PersistenceContext
        private EntityManager entityManager;

        final String SELECT_CARS =  "SELECT c FROM Car c ORDER BY c.brand ASC";

        @Override
        public void addCar(Car car) {
            System.out.println("ADDING: " + car);
            entityManager.persist(car);
        }

        @Override
        public List<Car> getCars() {
            return entityManager.createQuery(SELECT_CARS).getResultList();
        }

        @Override
        public void reset() {
            final String STATEMENT_RESET = "DELETE FROM car";
            entityManager.createNativeQuery(STATEMENT_RESET).executeUpdate();
        }
}
