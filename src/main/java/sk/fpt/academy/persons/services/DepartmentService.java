package sk.fpt.academy.persons.services;

import sk.fpt.academy.persons.entities.*;

import java.util.List;

public interface DepartmentService {
    void addDepartment(Department d);
    List<Department> getDepartments();
    void reset();
}
