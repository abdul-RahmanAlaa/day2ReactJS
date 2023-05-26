import "./App.css";
import LogIn from "./components/log in form/login";
import SignIn from "./components/sign in form/signIn";
import ToDoList from "./components/to do list/toDoList";

function App() {
  return (
    <>
      <div>
        <h1 className="header m-5">DAY TWO ASSIGNMENT</h1>
        <div className="row">
          <div className="col-4">
            <h3 className="m-2">1- the log in form</h3>
          </div>
          <div className="col-4 my-5">
            <LogIn />
          </div>
          <div className="col-4 my-5"></div>
        </div>
        <div className="whiteSpace"></div>
        <div className="row">
          <div className="col-4">
            <h3 className="m-2">2- the register form</h3>
          </div>
          <div className="col-4 my-5">
            <SignIn />
          </div>
          <div className="col-4 my-5"></div>
        </div>
        <div className="whiteSpace"></div>
        <div className="row">
          <div className="col-4">
            <h3 className="m-2">3- the TO-DO list</h3>
          </div>
          <div className="col-6 my-5">
            <ToDoList />
          </div>
        </div>
        <div className="whiteSpace"></div>
      </div>
    </>
  );
}

export default App;
