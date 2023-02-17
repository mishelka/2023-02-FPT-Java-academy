package sk.fpt.academy.persons;

import java.util.Objects;

public class Person implements Comparable {
    private String name;
    private int age;

//    private Car[] cars;
//
//    public void addCar(Car car) {
//        cars...
//        car.setOwner(this);
//    }


    public Person(String name) {
        this.name = name;
    }

    public Person(String name, int age) throws AgeOutBoundsException {
        this(name);
        setAge(age);
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

    public int getAge() {
        return age;
    }

    public void setAge(int ageNew) throws AgeOutBoundsException {
        validateAge(ageNew);
        this.age = ageNew;
    }

    private void validateAge(int ageNew) throws AgeOutBoundsException {
        if(ageNew < 0) throw new AgeOutBoundsException("Age can't be negative.");
        if(ageNew > 150) throw new AgeOutBoundsException("Age can't be more than 150.");
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public int compareTo(Object o) {
        if(o == null) return 1;
        if(!(o instanceof Person)) return 1;
        Person p = (Person) o;

        if(p.getName() == null) return 1;
        if(name == null) return -1;

        int res = name.compareTo(p.getName());
        if(res == 0) {
            res = age - p.getAge();
        }
        return res;
    }
}