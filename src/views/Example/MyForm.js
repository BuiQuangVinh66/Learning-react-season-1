import React from "react";

class MyForm extends React.Component {
  state = {
    username: "",
    email: "",
  };
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleClickSubmit = () => {
    if (!this.state.username || !this.state.email) {
      alert("Missing required params!");
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 10000),
      username: this.state.username,
      email: this.state.email,
    });

    this.setState({
      username: "",
      email: "",
    });
  };
  render() {
    return (
      <>
        <div className="form">
          <h2>This is a form</h2>
          <div className="input-box">
            <input
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleOnChangeUsername(event)}
            />
          </div>

          <div className="input-box">
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={(event) => this.handleOnChangeEmail(event)}
            />
          </div>

          <button
            onClick={(event) => this.handleClickSubmit(event)}
            className="btn-submit"
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default MyForm;
