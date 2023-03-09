package sk.fpt.academy.persons;

import sk.fpt.academy.persons.entities.Person;

import java.util.Objects;

public class Student extends Person {
    private int studyYear = 1;
    private String studentId;

    public Student(String name, int age, int studyYear, String studentId) throws AgeOutBoundsException{
        super(name, age);
        this.studyYear = studyYear;
        this.studentId = studentId;
    }

    public String getStudentId() {
        return studentId;
    }
//
//    public void setStudentId(String studentId) {
//        this.studentId = studentId;
//    }

    public int getStudyYear() {
        return studyYear;
    }

    public void setStudyYear(int studyYear) {
        this.studyYear = studyYear;
    }

    @Override
    public String toString() {
        return "Student {" +
                "studyYear =" + studyYear +
                ", studentId ='" + studentId + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Student student = (Student) o;
        return Objects.equals(studentId, student.studentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), studentId);
    }
}
