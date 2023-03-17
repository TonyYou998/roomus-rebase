import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    
  return (
    <div className="container">
    <section className=" pb-3 bg-cover bg-center d-flex align-items-center" style={{ backgroundImage: "url(./static/banner1.jpg)" }}>
        <div className="container py-5">
            <div className="row px-4 px-lg-5">
                <div className="col-lg-6">
                    <p className="text-muted small text-uppercase mb-2">roomus.com</p>
                    <h1 className="h2 text-uppercase mb-3">WELCOME TO ROOMUS!</h1><a className="btn book-now-btn" href="./shop">Book now!</a>
                </div>
            </div>
        </div>
    </section>
 
</div>
  )
}
