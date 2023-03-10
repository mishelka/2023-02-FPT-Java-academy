package sk.fpt.academy.persons.entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    //departments je privatna premenna
    // ktora v sebe drzi zoznam departmentov v Person
    @ManyToMany(mappedBy = "departments", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Person> employees = new ArrayList<>();

    public Department() {}

    public Department(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Person> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Person> employees) {
        this.employees = employees;
    }

    public void addEmployee(Person e) {
        this.employees.add(e);
    }

    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", name='" + name + '\'' +
//                do not use cyclic toStrings
//                ", employees='" + employees +
                '}';
    }
}
