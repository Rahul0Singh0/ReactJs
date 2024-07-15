import React, { Component } from 'react'
import axios from 'axios'

export default class PostForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           userid: '',
           title: '',
           body: ''
        }
      }
      
      changeHandler = (e) => {
          this.setState({[e.target.name] : e.target.value})
      }

      handleSubmit = (e) => {
        e.preventDefault() 
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
      }



  render() {
    const {userid, title, body} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>userid</label>
                <input type='text' value={userid} name='userid' onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>title</label>
                <input type='text' value={title} name='title' onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>body</label>
                <input type='text' value={body} name='body' onChange={this.changeHandler}></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
  }
}
