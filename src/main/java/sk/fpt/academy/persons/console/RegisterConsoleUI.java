package sk.fpt.academy.persons.console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.fpt.academy.persons.entities.*;
import sk.fpt.academy.persons.services.*;

import java.util.List;

@Component
public class RegisterConsoleUI {
    @Autowired
    PersonService personService;

    @Autowired
    CarService carService;

    @Autowired
    DepartmentService departmentService;

    public void start() {
        Person jano = new Person("janko", "hrasko", 36);
        Car toyota = new Car("toyota");

        personService.addPerson(jano);

        jano = personService.getPersons().get(0);
//        we don't need to add the car to jano's car list
        toyota.setOwner(jano);
        carService.addCar(toyota);

//        we don't need to set the department to jano

//        print all three tables
        personService.getPersons().stream().forEach(System.out::println);
        carService.getCars().stream().forEach(System.out::println);
    }

    public void addPerson(Person person) {
        personService.addPerson(person);
    }

    public void addCar(Car car) {
        carService.addCar(car);
    }
}
