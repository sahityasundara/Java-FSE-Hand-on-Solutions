
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

 
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts.');
      }
      const data = await response.json();
      this.setState({ posts: data });
    } catch (err) {
      this.setState({ error: err });
    }
  };

 
  componentDidMount() {
    this.loadPosts();
  }


  componentDidCatch(error, info) {
    alert('An error occurred in Posts component.');
    console.error('Error:', error, info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h3 style={{ color: 'red' }}>Something went wrong: {error.message}</h3>;
    }

    return (
      <div className="posts-container">
        <h1>📚 Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
