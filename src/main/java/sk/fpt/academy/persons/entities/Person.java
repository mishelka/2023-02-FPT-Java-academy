package sk.fpt.academy.persons.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import sk.fpt.academy.persons.AgeOutBoundsException;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Person {

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

    @OneToMany(fetch = FetchType.EAGER, mappedBy="owner",
               cascade = CascadeType.ALL)
    private List<Car> cars = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "department_employee",
            joinColumns = { @JoinColumn(name = "employee_id") },
            inverseJoinColumns = { @JoinColumn(name = "department_id") }
    )
    private List<Department> departments = new ArrayList<>();

    public Person() {}

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

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    public void addCar(Car c) {
        this.cars.add(c);
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

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }

    public void addEmployment(Department d) {
        this.departments.add(d);
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", age=" + age +
                ", temp=" + temp +
                ", cars=" + cars +

                '}';
    }
}