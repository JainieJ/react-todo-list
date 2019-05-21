import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    const { clearList, handleDelete, handleEdit, items } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">
          {items.map(item => (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id, item.title)}
            />
          ))}
        </h3>
        <button
          type="button"
          className="btn btn-danger btn-block mt-5 text-capitalize"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
