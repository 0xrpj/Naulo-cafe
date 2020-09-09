import React, {Component} from 'react'
import axios from 'axios'

class Main extends Component{
    constructor(){
        super()
        this.state = {quiz}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3001/quiz")
        .then(response => response.json())
        .then(data => {
          this.setState({ post: data });
        })
        .catch(error => console.log(error));

    }
}
