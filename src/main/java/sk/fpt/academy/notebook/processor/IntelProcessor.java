package sk.fpt.academy.notebook.processor;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class IntelProcessor implements Processor {

    public IntelProcessor () {
        System.out.println(">>>Intel object created");
    }

    @Override
    public void compute() {
        System.out.println("Computing like an Intel");
    }
}
