package sk.fpt.academy;

import sk.fpt.academy.persons.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class HelloWorld {
	public static final int KONSTANTA = 123;

	public static void main(String[] args) {
//		for (int i = 0; i < 3; i++) {
//			System.out.println("Hello World!");
//		}
//
		Person jan = new Person("Janko Hrasko", 20);
		Person jan2 = new Person("Janko Hrasko", 30);
//		System.out.println(jan.getAge());
//		jan.setName("Jano Hrach");
//		jan.setAge(50);
//		System.out.println(jan.getAge());
//
//		jan.setAge(200);
//		System.out.println(jan.getAge() + " " + jan.getName());

		Student s = new Student("Matko", 20, 3, "13456");
		s.setStudyYear(3);
//		System.out.println(s.getName() + " " + s.getAge() + " " + s.getStudyYear());
		System.out.println(s);
//		String str = "Ahoj " + s;
//		System.out.println(str);
		Student copy = s;

		System.out.println(s.equals(jan)); //false
		System.out.println(s.equals(copy)); //true

		List<Person> pers = new ArrayList<>();
		Collections.sort(pers);
		Person[] persons = { jan2, s, jan, copy };
		Arrays.sort(persons);
		System.out.println(Arrays.asList(persons));
		//tretia a lepsia moznost je Comparator - kto chce, pozrite si
		//Comparator je null proof, Comparable a Collections.sort a Arrays.sort nie su


//		Car bmw = new Car("BMW");
//		bmw.setOwner(jan);
//		System.out.println(bmw);
//
//		Car audi = new Car("Audi");
//		audi.setOwner(s);
//		System.out.println(audi);
//		((Student) audi.getOwner()).setStudyYear(3);
//
//		//vytvorit nove auto, zamestnanca a nastavit ownera zamestnanca na to auto
//		//nastavit ine meno ownerovi auta bmw
//		bmw.getOwner().setName("Michal");
//		System.out.println(jan);
////		System.out.println(bmw);
//
//		long l = 1234567876543L;
//		int a = 4; //5
//		int b = 5; //6
////		swap(a, b); //primitivne typy sa podavaju HODNOTOU, nie referenciou
////		System.out.println(a);
////		System.out.println(b);
//
//		int c = a++ + b++; // 4 + 5
//		System.out.println(c);
//
//		long l1 = a; //automaticke pretypovanie, lebo idem z 32 na 64 bitov
//		int i1 = (int) l;	//z 64 na 32
	}
}