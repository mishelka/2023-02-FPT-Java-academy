package sk.fpt.academy.persons;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import sk.fpt.academy.persons.console.RegisterConsoleUI;
import sk.fpt.academy.persons.entities.Person;
import sk.fpt.academy.persons.services.PersonService;
import sk.fpt.academy.persons.services.PersonServiceJPA;

@SpringBootApplication
public class Register {
    public static void main(String[] args) {
        new SpringApplicationBuilder(Register.class)
                .web(WebApplicationType.NONE).run(args);
    }

    @Bean
    public CommandLineRunner runnerRegister(RegisterConsoleUI console) {
        return args -> {
            console.addPerson(new Person("janko", "hrasko", 200));
            console.start();
        };
    }

    @Bean
    public PersonService getPersonService() {
        return new PersonServiceJPA();
    }
}
