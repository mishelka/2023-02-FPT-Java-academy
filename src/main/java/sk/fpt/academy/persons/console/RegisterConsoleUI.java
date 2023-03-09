package sk.fpt.academy.persons.console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.fpt.academy.persons.entities.Person;
import sk.fpt.academy.persons.services.PersonService;

import java.util.List;

@Component
public class RegisterConsoleUI {
    List<Person> persons;

    @Autowired
    PersonService personService;

    public void start() {
        this.persons = personService.getPersons();
        persons.stream().forEach(System.out::println);
    }

    public void addPerson(Person person) {
        personService.addPerson(person);
        this.persons = personService.getPersons();
    }
}
