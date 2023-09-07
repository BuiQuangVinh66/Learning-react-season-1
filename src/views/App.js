import MyComponent from "./Example/MyComponent";
import "./Example/form.scss";
import "./Example/list.scss";
import "./App.scss";
import "./ToDos/ListTodo";
import ListTodo from "./ToDos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <p style={{ fontSize: "2.3rem", marginBottom: "40px" }}>
        Simple TODO app with React.js (Vinh &amp; Bui Quang Vinh)
      </p>
      {/* <MyComponent /> */}
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
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
