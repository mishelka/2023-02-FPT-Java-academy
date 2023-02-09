package sk.fpt.academy.persons;

public class Student extends Person {
    private int studyYear = 1;
    private String studentId;

    public Student(String name, int age, int studyYear, String studentId) {
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
}
