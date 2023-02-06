package persons;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        setAge(age);
        //boolean vysledok = setAge(age);
        //if(!vysledok) System.out.println("Nespravny vek");
    }

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
}