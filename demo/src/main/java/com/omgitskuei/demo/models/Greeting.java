package com.omgitskuei.demo.models;

/**
 * https://spring.io/guides/gs/handling-form-submission/
 * @author i92008cc63
 *
 */
public class Greeting {

    private long id;
    private String content;

    public long getId() {
      return id;
    }

    public void setId(long id) {
      this.id = id;
    }

    public String getContent() {
      return content;
    }

    public void setContent(String content) {
      this.content = content;
    }

  }