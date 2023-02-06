import persons.Person;
import persons.Student;

class HelloWorld {
	public static void main(String[] args) {
		for (int i = 0; i < 3; i++) {
			System.out.println("Hello World!");
		}

		Person p = new Person("Janko Hrasko", 20);
		System.out.println(p.getAge());
		p.setName("Jano Hrach");
		p.setAge(50);
		System.out.println(p.getAge());

		p.setAge(200);
		System.out.println(p.getAge() + " " + p.getName());

		Student s = new Student("Matko", 20);
		s.setStudyYear(3);
		System.out.println(s.getName() + " " + s.getAge() + " " + s.getStudyYear());
	}
}