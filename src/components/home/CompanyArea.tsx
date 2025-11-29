 

export default function CompanyArea() {
  return (
    <>
      <section id="services" className="company-worked-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Companies worked for</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-lg-6 col-md-7">
              <a href="/company/vfc">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>01</h5>
                  <h4>Volleyball Federation Cambodia</h4>
                  <p> Videography Lead <br />Dec 2023 - Present. Freelance <br />Click to see my works</p>
                </div>
              </a>
            </div>

            <div className="col-lg-6 col-md-5">
              <a href="/company/kia-cambodia">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-arrow-right-up-line"></i>
                  <h5>02</h5>
                  <h4>Kia Cambodia</h4>
                  <p>Videographer <br />July 2025 - Present. Full-time <br />Click to see my works</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
