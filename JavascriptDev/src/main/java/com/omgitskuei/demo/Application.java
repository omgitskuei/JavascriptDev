package com.omgitskuei.demo;

import java.util.Arrays;

import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

// Prints out all the beans in console log, when ran

@SpringBootApplication
// ^ same as adding 
// @Configuration - is a source of bean definitions
// @EnableAutoConfiguration - flags the application as a web application and activates key behaviors
// @ComponentScan - look for other components, configurations, and services in the com/example package, letting it find the controllers.
public class Application {

	public static void main(String[] args) {
	    SpringApplication app = new SpringApplication(Application.class);
	    app.setBannerMode(Banner.Mode.OFF);
		app.run(args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
		    System.out.println("Welcome to Application:" + ctx.getApplicationName());
		    System.out.println("Application Display Name = "+ ctx.getDisplayName());
		    System.out.println("Application Parent Name = "+ ((ctx.getParent() == null) ? "null" : ctx.getParent()));
			System.out.println("Let's inspect the beans provided by Spring Boot:");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				System.out.println(beanName);
			}

		};
	}

}