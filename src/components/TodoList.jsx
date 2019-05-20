import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1>hello from todo list</h1>
        <TodoItem />
      </section>
    );
  }
}

export default TodoList;
