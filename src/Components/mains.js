import React, { Component } from "react";

// import  Styles from '../css/index.css'

class Main extends Component {

componentDidMount = ()=>{
    window.addEventListener('scroll',this.myFunction)
}

submit = (e) =>{


var checkdata = [];

var form= document.getElementById('form');
let name= document.getElementById('name');
let email= document.getElementById('email');
let comment= document.getElementById('comment');
let btn= document.getElementById('submit');
let reset= document.getElementById('reset');


  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    comment: comment.value
  };


if(!localStorage.getItem('dataplay')){

     checkdata.push(formData);

    localStorage.setItem('dataplay', JSON.stringify(checkdata));

}
else{
let checkdata=JSON.parse(localStorage.getItem('dataplay'));
checkdata.push(formData);
 localStorage.setItem('dataplay', JSON.stringify(checkdata));
}

e.target.reset()

}

  render = () => {







    return (
      <section>

<script type="text/javascript" src="../js/all.js"></script>

  <form className="form" id="form" onSubmit={this.submit} style={{marginBottom:"300px"}}>
    <fieldset>

  <div>
    <label for="">Name:</label><br />
   <input type="text" id="name"   required/><br /><br /></div>

  <div>
    <label for="">Email:</label><br />
   <input type="Email" id="email"  required/><br /><br /></div>

 <div className="flex">
  <input type="submit" name="" value="Submit" id="submit"/>
  </div>

  </fieldset>
</form>
  </section>
      )
  }
}
 
export default Main;