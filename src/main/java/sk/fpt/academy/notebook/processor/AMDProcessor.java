package sk.fpt.academy.notebook.processor;

import org.springframework.stereotype.Component;

public class AMDProcessor implements Processor {

    @Override
    public void compute() {
        System.out.println("Computing like an AMD");
    }
}
