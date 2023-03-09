package sk.fpt.academy.persons.entities;

import jakarta.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue
    private int id;
    private String brand;
    private boolean started = false;

    public Car() {}
//    private Person owner;

    public Car(String brand) {
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public boolean isStarted() {
        return started;
    }

    public void setStarted(boolean started) {
        this.started = started;
    }

//    public Person getOwner() {
//        return owner;
//    }

//    public void setOwner(Person owner) {
//        this.owner = owner;
//    }

    @Override
    public String toString() {
        return "Car {" +
                "brand='" + brand + '\'' +
                ", started=" + started +
//                ", owner=" + owner +
                '}';
    }
}
