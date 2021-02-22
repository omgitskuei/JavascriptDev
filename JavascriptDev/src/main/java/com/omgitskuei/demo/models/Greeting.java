package com.omgitskuei.demo.models;

import lombok.Data;

/**
 * https://spring.io/guides/gs/handling-form-submission/
 * @author i92008cc63
 *
 */

@Data
public class Greeting {

    private long id;
    private String content;

    // For versions of Eclipse without Lombok installed
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