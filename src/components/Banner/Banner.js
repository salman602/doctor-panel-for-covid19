import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <section className="container my-3">
      <div className="card banner-section">
        <div className="card-body text-center text-white">
          <h4 className="card-title">make a doctor's board for covid 19 outbreak</h4>

          <p className="card-text">With the outbreak of novel corona virus declear a pendamic and international public health emergency of international concern.</p>
          <h3>Total Budget: $5000</h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;