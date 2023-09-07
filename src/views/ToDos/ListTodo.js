import React from "react";
import "./listTodo.scss";
import { ToastContainer, toast } from "react-toastify";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "123", title: "DocTerStrength" },
      { id: "234", title: "DocTerStrength" },
      { id: "567", title: "DocTerStrength" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });

    toast.success("Wow so easy !");
  };

  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
    toast.success("Delete success!");
  };

  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <React.Fragment>
        <div className="listTodoContainer">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="listTodoContent">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todoChild" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} - <input value={editTodo.title} />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      onClick={() => this.handleDeleteTodo(item)}
                      className="delete"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.handleEditTodo(item)}
                      className="edit"
                    >
                      Edit
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListTodo;
