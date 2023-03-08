package sk.fpt.academy.notebook.processor;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("amd") //singleton by default
@Scope(value="prototype")
public class AMDProcessor implements Processor {

    public AMDProcessor() {
        System.out.println(">>>AMD object created");
    }

    @Override
    public void compute() {
        System.out.println("Computing like an AMD");
    }
}
