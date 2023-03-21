import React from 'react'

export default function ServiceBanner() {
  return (
    <section className="py-3  banner" style={{ backgroundImage: "url(./static/banner.jpg)" }}>
    <div className="container">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
            <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0 main-title">Services</h1>
            </div>
            <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                <p className="title-result-number">Result:</p>

                    <ol className="justify-content-lg-end mb-0 px-0 result-number">
                        <li className="breadcrumb-item active result-number" aria-current="page">NaN</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</section>
  )
}
