package persons;

public class Person {
    private String name;
    private int age;
//    private Car[] cars;
//
//    public void addCar(Car car) {
//        cars...
//        car.setOwner(this);
//    }

    /**
     * ...
     * @param name meno osoby
     * @param age vek osoby, moze byt od do
     */
    public Person(String name, int age) {
        this.name = name;
        setAge(age);
        //boolean vysledok = setAge(age);
        //if(!vysledok) System.out.println("Nespravny vek");
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

    public boolean setAge(int ageNew) {
        boolean test = isValidAge(ageNew);
        if(test) {
            this.age = ageNew;
        }
        return test;
    }

    private boolean isValidAge(int ageNew) {
        return ageNew >= 0 && ageNew <= 150;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}