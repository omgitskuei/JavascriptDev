package com.omgitskuei.demo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * https://spring.io/guides/gs/handling-form-submission/
 * @author i92008cc63
 *
 */
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.omgitskuei.demo.models.Greeting;


@Controller
public class FormsController {

    private Logger logger = LoggerFactory.getLogger(FormsController.class);
    
    @GetMapping("/greeting")
    public String greetingForm(Model model) {
        model.addAttribute("greeting", new Greeting());
        return "greeting";
    }

    @PostMapping("/greeting")
    public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
        
        StringBuilder sb = new StringBuilder();
        sb.append("Greeting form submitted ID = " + greeting.getId() + " Greeting = " + greeting.getContent());
        logger.debug(sb.toString());
        
        model.addAttribute("greeting", greeting);
        return "result";
    }

}