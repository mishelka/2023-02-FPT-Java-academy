package sk.fpt.academy.notebook.processor;

//@Component - then we can use @Autowired
public class QualcommProcessor implements Processor {

    @Override
    public void compute() {
        System.out.println("Computing like a Qualcomm");
    }
}
