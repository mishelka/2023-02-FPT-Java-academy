package sk.fpt.academy.persons.entities;

import jakarta.persistence.*;

@Entity
public class Car {
    @Id
    @GeneratedValue
    private int id;
    private String brand;
    private boolean started = false;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable=false)
    private Person owner;

    public Car() {}

    public Car(String brand) {
        this.brand = brand;
    }

    public Person getOwner() {
        return owner;
    }
    public void setOwner(Person owner) {
        this.owner = owner;
    }

//    private Person owner;

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

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", started=" + started +
                ", owner=" + owner.getName() + " " + owner.getSurname() +
                '}';
    }
}
