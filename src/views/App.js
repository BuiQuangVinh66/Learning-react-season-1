import "./App.scss";
import "./ToDos/ListTodo";
import ListTodo from "./ToDos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "2.3rem", marginBottom: "40px" }}>
        Simple TODO app with React.js (Vinh &amp; Bui Quang Vinh)
      </p>
      <ListTodo />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
