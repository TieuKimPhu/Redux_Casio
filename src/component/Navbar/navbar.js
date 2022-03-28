import React, { Component } from 'react'
import "./navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
            <div className="container">
                <ul>
                    <li><a href="story.casio">Story</a></li>
                    <li><a href="blog.casio">Blog</a></li>
                    <li><a href="products.casio">Products</a></li>
                    <li><a href="contacts.casio">Contact Us</a></li>
                </ul>
            </div>  
        </div>
      </>
    )
  }
}
