package sk.fpt.academy;

import sk.fpt.academy.personss.*;

import java.util.*;

class HelloWorld {
	public static final int KONSTANTA = 123;

	public static void main(String[] args) {
//		for (int i = 0; i < 3; i++) {
//			System.out.println("Hello World!");
//		}
//
		Person jan = new Person("Janko Hrasko", 20);
		Person jan2 = new Person("Janko Hrasko", 30);

//		jan.setAge(200);
//		System.out.println(jan.getAge() + " " + jan.getName());

		List<Double> listCisel = new ArrayList<>();

		List<Person> pers = new ArrayList<>();
		Collections.sort(pers);
		Person[] persons = { jan2, jan };
		Arrays.sort(persons);
		System.out.println(Arrays.asList(persons));
		//tretia a lepsia moznost je Comparator - kto chce, pozrite si
		//Comparator je null proof, Comparable + Collections.sort/Arrays.sort nie su

		//anonymna trieda - implementacia bez toho, aby sme spravili novy public class PersonComparator extends Comparator<Person> {}
		Arrays.sort(persons, new Comparator<Person>() {
			@Override
			public int compare(Person o1, Person o2) {
				if(o1 == o2) return 0;
				if(o2 == null) return 1;
				if(o1 == null) return -1;
				return o1.getName().compareTo(o2.getName());
			}
		});

		//to iste cez lambda zapis
		Arrays.sort(persons, (o1, o2) -> o1.getName().compareTo(o2.getName()));
		Arrays.sort(persons, Comparator.comparing(Person::getName));

		Collections.sort(pers, (o1, o2) -> {
				if(o1 == o2) return 0;
				if(o2 == null) return 1;
				if(o1 == null) return -1;
				return o1.getName().compareTo(o2.getName());
			});

//		Car bmw = new Car("BMW");
//		bmw.setOwner(jan);
//		System.out.println(bmw);
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
