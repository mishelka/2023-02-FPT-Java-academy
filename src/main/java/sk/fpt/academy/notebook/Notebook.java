package sk.fpt.academy.notebook;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import sk.fpt.academy.notebook.graphicCard.GraphicCard;
import sk.fpt.academy.notebook.graphicCard.Intel;
import sk.fpt.academy.notebook.graphicCard.Nvidia;
import sk.fpt.academy.notebook.processor.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Notebook {

    //loose coupling
    Processor processor;
    //graphic card
    //hdd

    public static void main(String[] args) {
        //close/tight coupling, no abstraction
//        IntelProcessor processor = new IntelProcessor();

        //abstraction, still close coupling
//        Processor processor = new IntelProcessor(); //we are hardcoding Intel here
//        processor.compute();

        //loose coupling
//        using spring.xml and, optionally @Component:
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
        Processor p = (Processor) context.getBean("intelProcessor");
        p.compute();

        //app based configuration - using @Configuration and @Bean
        ApplicationContext context2 = new AnnotationConfigApplicationContext(AppConfig.class);
        GraphicCard g = context2.getBean(Intel.class);
        g.render();
    }
}
