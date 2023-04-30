import React from 'react'

export default function FavoriteBanner() {
  return (
    <section className="py-3  banner" style={{ backgroundImage: "url(./static/banner.jpg)" }}>
            <div className="container">
                <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="h2 text-uppercase mb-0 main-title">Favorite</h1>
                    </div>
                </div>
            </div>
        </section>
  )
}
