import React, { Component } from 'react'
import "./header.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
export default class Header extends Component {
  render() {
    return (
        <>
            <div className="header">
              <div className="left">
                  <img src="./Img/casio.png"/> 
              </div>
              <div className="right">
                <div className="search">
                    <form action="#">
                    <input type="text" placeholder="Search..." name="search" />
                    {/* <button type="submit"><i class="fa fa-search"></i></button> */}
                    </form>
                </div>
              </div>
            </div>    
        </>
    )
  }
}
