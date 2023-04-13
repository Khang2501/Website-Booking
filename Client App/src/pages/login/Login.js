import { useRef, useState, useEffect } from "react";
import classes from "./Login.module.css";
import axios from "axios";
const Login = () => {
  const [users, setUsers] = useState([]);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [isWrong, setIsWrong] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((user) => {
        setUsers(user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const checkLogin = users.filter(
      (user) =>
        user.username === userNameRef.current.value &&
        user.password === passwordRef.current.value
    );
    if (checkLogin.length > 0) {
      console.log(checkLogin[0]);
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={loginHandler} className={classes["form-login"]}>
        <h1>Login</h1>
        <input type="text" ref={userNameRef} />
        <input type="password" ref={passwordRef} />
        {isWrong && <p>User name or Password went wrong!</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
