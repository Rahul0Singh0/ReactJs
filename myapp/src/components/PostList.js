import React, { Component } from 'react'
import axios from 'axios';

export class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         error : ''
      }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => { // it has response arrow function
            this.setState({posts: response.data})
            console.log(response)
        })
        .catch(error => { // it has error arrow function 
          this.setState({error: "URL Error"})
          // Request failed with status code 404
            console.log(error)
        })
    }

  render() {
    const {posts, error} = this.state
    return (
      <div>
        List Post Data
        {
          posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        {
          error ? <div>{error}</div> : null
        }
      </div>
    )
  }
}

export default PostList
