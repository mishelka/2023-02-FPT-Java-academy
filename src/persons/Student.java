package persons;

import persons.Person;

public class Student extends Person {
    private int studyYear = 1;

    public Student(String name, int age) {
        super(name, age);
    }

    public int getStudyYear() {
        return studyYear;
    }

    public void setStudyYear(int studyYear) {
        this.studyYear = studyYear;
    }
}
