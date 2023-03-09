package sk.fpt.academy.persons;

import sk.fpt.academy.persons.entities.Person;

import java.util.Comparator;

public class PersonComparator implements Comparator<Person> {
    @Override
    public int compare(Person o1, Person o2) {
        if(o1 == o2) return 0;
        if(o2 == null) return 1;
        if(o1 == null) return -1;
        return o1.getName().compareTo(o2.getName());
    }

    @Override
    public boolean equals(Object obj) {
        return false;
    }
}
