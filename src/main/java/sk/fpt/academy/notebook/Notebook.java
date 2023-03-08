package sk.fpt.academy.notebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import sk.fpt.academy.notebook.graphicCard.GraphicCard;
import sk.fpt.academy.notebook.processor.*;

@Component
public class Notebook {

    //loose coupling
    @Autowired
    @Qualifier("amd") //prepise @Primary
    Processor processor;

    @Autowired
    GraphicCard graphicCard;

    public Notebook() {}

    public void start() {
        //close/tight coupling, no abstraction
//        IntelProcessor processor = new IntelProcessor();

        //abstraction, still close coupling
//        Processor processor = new IntelProcessor(); //we are hardcoding Intel here
//        processor.compute();

        //loose coupling
//        using spring.xml and, optionally @Component:
//        context.getBean("...")

        //using @Autowired
        processor.compute();
        graphicCard.render();
    }

    public Processor getProcessor() {
        return processor;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public GraphicCard getGraphicCard() {
        return graphicCard;
    }

    public void setGraphicCard(GraphicCard graphicCard) {
        this.graphicCard = graphicCard;
    }
}
