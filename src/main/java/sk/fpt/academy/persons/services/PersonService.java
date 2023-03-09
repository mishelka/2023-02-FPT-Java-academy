package sk.fpt.academy.persons.services;

import sk.fpt.academy.persons.entities.Person;

import java.util.List;

public interface PersonService {
    void addPerson(Person person);
    List<Person> getPersons();
    void reset();
}
