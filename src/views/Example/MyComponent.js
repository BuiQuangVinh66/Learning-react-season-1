import React from "react";
import MyForm from "./MyForm";
import MyList from "./MyList";

class MyComponent extends React.Component {
  state = {
    arrPlayers: [
      { id: "123", username: "Nguyen Van A", email: "nguyenvana@gmail.com" },
      { id: "345", username: "Xuan Van Dao", email: "xuanvandao@gmail.com" },
      { id: "678", username: "Le Ngoc Bich", email: "lengocbich@gmail.com" },
    ],
  };

  addNewJob = (job) => {
    console.log("Add: ", job);
    this.setState({
      arrPlayers: [...this.state.arrPlayers, job],
    });
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrPlayers;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrPlayers: currentJobs,
    });
  };

  render() {
    return (
      <>
        <MyForm addNewJob={this.addNewJob} />
        <MyList
          arrPlayers={this.state.arrPlayers}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
