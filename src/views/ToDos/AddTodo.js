import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      alert("Missing title");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 100001),
      title: this.state.title,
    };

    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <React.Fragment>
        <div className="addTodo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button
            onClick={() => this.handleAddTodo()}
            type="button"
            className="add"
          >
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTodo;
