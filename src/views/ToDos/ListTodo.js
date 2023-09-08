import React from "react";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import "./listTodo.scss";

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
    let { editTodo, listTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj) {
      this.setState({
        editTodo: todo,
      });
    } else if (editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });
      toast.success("Update todo success!");
    }
  };

  handleOnChangeTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
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
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeTodo(event)
                              }
                            />
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
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
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
