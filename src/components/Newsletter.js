import React from 'react'
import news from '../assets/news3.png'
export const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="card">
          <div className="details">
            <div className="header">
              Subscribe to our Newsletter
            </div>
            <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, quam totam asperiores distinctio magnam possimus!</div>
            <div className="form1">
              <input type="email" className="input1" placeholder="Enter your email here" />
              <button className="btn1" type="submit">Subscribe!!</button> 
            </div>
          </div>
          <div className="sideImage">
            <img className="img1" src={news} alt="newsletter-img" />
          </div>   
        </div>
    </div>
  )
}
