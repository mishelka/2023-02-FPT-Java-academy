package sk.fpt.academy.persons.services;

import sk.fpt.academy.persons.entities.Car;

import java.util.List;

public interface CarService {
    void addCar(Car car);

    List<Car> getCars();

    void reset();
}
