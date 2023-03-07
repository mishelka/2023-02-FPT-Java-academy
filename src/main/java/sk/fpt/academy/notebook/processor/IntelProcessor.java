package sk.fpt.academy.notebook.processor;

import org.springframework.stereotype.Component;

@Component
public class IntelProcessor implements Processor {

    @Override
    public void compute() {
        System.out.println("Computing like an Intel");
    }
}
