import React from 'react'

export default function Contact() {
  return (
    <section className="py-5 container contact-ctn">
        <div className="container p-0">
            <div className="row contact__row">
                <div className="col-lg-6 mb-3 mb-lg-0">
                    <h5 className="text-uppercase">Let's be friends!</h5>
                    <p className="text-small text-muted mb-0">Input your email to contact us.</p>
                </div>
                <div className="col-lg-6">
                    <form action="#">
                        <div className="input-group flex-column flex-sm-row mb-3">
                            <input className="form-control form-control-lg py-3 let-be-friend-input" type="email" placeholder="Enter your email address" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-dark btn-block" id="button-addon2" type="submit">Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
