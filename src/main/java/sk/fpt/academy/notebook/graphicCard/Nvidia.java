package sk.fpt.academy.notebook.graphicCard;

import org.springframework.stereotype.Component;

public class Nvidia implements GraphicCard {

    public void render() {
        System.out.println("Rendering as Nvidia");
    }
}
