package sk.fpt.academy.notebook.graphicCard;

import org.springframework.stereotype.Component;

@Component
public class Intel implements GraphicCard {

    private String config;

    public Intel() {}

    public Intel(String config) {
        this.config = config;
    }
    public void render() {
        System.out.println("Rendering as Intel with config " + config);
    }
}
