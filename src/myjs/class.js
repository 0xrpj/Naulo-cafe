import React, { Component } from "react";

class Rosnn extends Component {
constructor(){
    super()
    this.state ={post :{}}
}
render = () => {
    const { post } =this.state
   return (
       <div className = "header">
<h2>{post.name}</h2>
       </div>
   )
}
  };

  componentDidMount = () => {
    fetch("http://localhost:3001/quiz")
      .then(response => response.json())
      .then(data => {
        this.setState({ post: data });
      })

  };
}

export default Rosnn;
