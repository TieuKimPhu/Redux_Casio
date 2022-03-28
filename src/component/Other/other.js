import React, { Component } from 'react'
import "./other.css";
export default class Other extends Component {
  render() {
    return (
      <>
            <div className='box'>
                <h1>Other Products</h1>
                <div className='list'>
                    <div className='item'><img src='./Img/Other-1.png'/></div>
                    <div className='item'><img src='./Img/Other-2.png'/></div>
                    <div className='item'><img src='./Img/Other-3.png'/></div>
                    <div className='item'><img src='./Img/Other-4.png'/></div>
                </div>
                <div className='key'>
                    <div className='list-key'>
                        <div className='item-key'>
                            <button>Discover</button>
                            <button>Buy</button>
                        </div>
                        <div className='item-key'>
                            <button>Discover</button>
                            <button>Buy</button>
                        </div>
                        <div className='item-key'>
                            <button>Discover</button>
                            <button>Buy</button>
                        </div>
                        <div className='item-key'>
                            <button>Discover</button>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
  }
}
