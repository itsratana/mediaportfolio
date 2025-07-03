 

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
                  <p> Capturing the most memorable moments of your event with cinematic edits and emotional impact.</p>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-5">
              <a href="/service/promote-video">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>02</h5>
                  <h4>Promote Video</h4>
                  <p>Crafting compelling promotional videos that elevate your brand, product, or campaign.</p>
                </div>
              </a>
            </div>


            <div className="col-lg-6 col-md-5">
              <a href="/service/photography">
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>03</h5>
                  <h4>Photography</h4>
                  <p>Capture and Delivering high-quality photos for events, portraits, products, or social media content.</p>
                </div>
              </a>
            </div>


            <div className="col-lg-6 col-md-7">
              <a href="/service/camera-operating">
                <div className="service-item wow fadeInUp delay-0-8s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>04</h5>
                  <h4>Camera Operating</h4>
                  <p>Professional camera work for live events, interviews, and video productions with technical precision.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
