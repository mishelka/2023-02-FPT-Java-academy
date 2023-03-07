package sk.fpt.academy.notebook;

import sk.fpt.academy.notebook.processor.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Notebook {

    //loose coupling
    @Autowired
    Processor processor;
    //graphic card
    //hdd

    public static void main(String[] args) {
        //close/tight coupling, no abstraction
//        IntelProcessor processor = new IntelProcessor();

        //abstraction, still close coupling
//        Processor processor = new IntelProcessor(); //we are hardcoding Intel here
//        processor.compute();

        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        Processor p = (Processor) context.getBean("amd");
        //loose coupling
        p.compute();
    }
}
