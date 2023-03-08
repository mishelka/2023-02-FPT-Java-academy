package sk.fpt.academy.notebook;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import sk.fpt.academy.notebook.graphicCard.*;
import sk.fpt.academy.notebook.processor.*;

@SpringBootApplication
public class NotebookConsole {

    public static void main(String[] args) {
        ConfigurableApplicationContext context
                = SpringApplication.run(NotebookConsole.class, args);

        Processor p = context.getBean(AMDProcessor.class);
        Processor p2 = context.getBean(AMDProcessor.class);
        p.compute();
        p2.compute();

        Notebook n = context.getBean(Notebook.class);
        n.start();
    }

    @Bean
    public GraphicCard getGraphicCard() {
        return new Intel("2.0Ghz");
    }
}
