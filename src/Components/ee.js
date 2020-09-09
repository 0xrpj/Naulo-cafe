import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objPeople: []
    };
  }
  objPeople = [
    {
      username: "san",
      password: "password25"
    },
    {
      username: "mat",
      password: "password88"
    },
    {
      username: "chris",
      password: "password3"
    }
  ];

  //login function
  login = () => {
    //reterving data input from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //loop through all the user ojecects and conform if the user name password are correct
    for (i = 0; i < objPeople.length; i++) {
      if (
        username == objPeople[i].username &&
        password == objPeople[i].password
      ) {
        console.log(username + "is logged in !!!!!!!");
        document.write("log in successful");

        return;
      }
    }
    console.log("incorrect username or password");
  };
  registerUser = () => {
    var registerUser = document.getElementById("newUser").value;
    var registerPassword = document.getElementById("newPassword").value;
    var newUser = {
      username: registerUser,
      password: registerPassword
    };

    for (i = 0; i < objPeople.length; i++) {
      if (registerUser == objPeople[i].username) {
        alert("sfhuknncihs");
        return;
      } else if (registerPassword.length < 8) {
        alert("password is too short input 8 or more character");
        return;
      }
    }
    objPeople.push(newUser);
    console.log(objPeople);
  };

  render = () => {
    return (
      <>
        <form>
          <h2>login</h2>
          <input id="username" />
          <input id="password" />
          <button type="button" onclick={this.login}>
            login
          </button>
        </form>

        <form>
          <h2>Register</h2>
          <input id="newUser" />
          <input id="newPassword" />
          <button type="button" onclick={this.registerUser}>
            login
          </button>
        </form>
      </>
    );
  };
}

export default Login;
