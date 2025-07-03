 

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-6 col-md-7">
              <a href="/service/event-highlight">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>01</h5>
                  <h4>Event Highlight</h4>
                  <p></p>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-5">
              <a href="/service/promote-video">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>02</h5>
                  <h4>Promote Video</h4>
                  <p>Blend of artistic intuition with strategic insight to craft a visual identity.</p>
                </div>
              </a>
            </div>


            <div className="col-lg-6 col-md-5">
              <a href="/service/photography">
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>03</h5>
                  <h4>Photography</h4>
                  <p>Blend of functionality with aesthetics to create delightful experience.</p>
                </div>
              </a>
            </div>


            <div className="col-lg-6 col-md-7">
              <a href="/service/camera-operating">
                <div className="service-item wow fadeInUp delay-0-8s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>04</h5>
                  <h4>Camera Operating</h4>
                  <p>Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
