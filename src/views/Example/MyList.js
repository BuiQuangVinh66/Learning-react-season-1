import React from "react";

class MyList extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log("Delete: ", job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrPlayers } = this.props;
    let { showJobs } = this.state;
    return (
      <div className="container">
        {showJobs === false ? (
          <div>
            <button
              className="btn-Show-Hide"
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="player-list">
              {arrPlayers.map((item) => {
                return (
                  <div>
                    {item.username} - {item.email}{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                className="btn-Show-Hide"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MyList;
