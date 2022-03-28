import React, { Component } from 'react'
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
            <div className='footer'>
                <div className='list-footer'>
                    <div className='item-footer'>
                      <h1>About Us</h1>
                      <p id='about'>We are a young company <br/>
                        always looking for new and <br/>
                        creative ideas to help you <br/>
                        with our products in <br/>
                        your everyday work.
                      </p>
                    </div>
                    <div className='item-footer'>
                      <h1>Products</h1>
                      <a>Men</a>
                      <a>Woman</a>
                      <a>Kid</a>
                      <a>Couple</a>
                      <a>SHEEN</a>
                      <a>BABY-G</a>
                      <a>G-SHOCK</a>
                      <a>PROTREK</a>
                      <a>EDIFICE</a>
                      <a>Other products</a>
                    </div>
                    <div className='item-footer'>
                      <h1>Support</h1>
                      <a>Zalo</a>
                      <a>0903765999</a>
                    </div>
                    <div className='item-footer'>
                      <h1>Contact</h1>
                      <a>Facebook</a>
                      <a>Instagram</a>
                      <a>Youtube</a>
                      <a>Shopee</a>
                      <p>Email: Casio1999@gmail.com</p>
                    </div>
                </div>
            </div>
      </>
    )
  }
}
