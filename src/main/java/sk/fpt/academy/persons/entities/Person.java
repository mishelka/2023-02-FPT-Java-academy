package sk.fpt.academy.persons.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import sk.fpt.academy.persons.AgeOutBoundsException;

@Entity
public class Person { //implements Comparable { // netreba lebo mi to zosortuje databaza <3 :) <3

    @Id
    @GeneratedValue
    private int id;

    @Column(length = 32, nullable = false)
    private String name;

    @Column(length = 64, nullable = false)
    private String surname;

//    @Column(columnDefinition = "INT CHECK(age BETWEEN 0 AND 150)")
    @Min(0)
    @Max(150)
    private int age;

    @Transient
    private boolean temp;

    public Person() {}

//    private Car[] cars;
//
//    public void addCar(Car car) {
//        cars...
//        car.setOwner(this);
//    }


    public Person(String name) {
        this.name = name;
    }

    public Person(String name, int age) {
        this(name);
        this.age = age;
//        setAge(age);
    }

    public Person(String name, String surname, int age) {
        this(name, age);
        this.surname = surname;
//        setAge(age);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return meno osoby
     */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) throws AgeOutBoundsException {
        this.age = age;
    }

//    private void validateAge(int ageNew) throws AgeOutBoundsException {
//        if(ageNew < 0) throw new AgeOutBoundsException("Age can't be negative.");
//        if(ageNew > 150) throw new AgeOutBoundsException("Age can't be more than 150.");
//    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Person person = (Person) o;
//        return age == person.age && Objects.equals(name, person.name);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(name, age);
//    }
//
//    @Override
//    public int compareTo(Object o) {
//        if(o == null) return 1;
//        if(!(o instanceof Person)) return 1;
//        Person p = (Person) o;
//
//        if(p.getName() == null) return 1;
//        if(name == null) return -1;
//
//        int res = name.compareTo(p.getName());
//        if(res == 0) {
//            res = age - p.getAge();
//        }
//        return res;
//    }
}