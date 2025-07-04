
import UseSticky from "../../hooks/UseSticky";

export default function HeaderProject() {
  const { sticky } = UseSticky();

  const handleBackToHome = () => {
    // window.history.back();
    localStorage.setItem("scrollTo", "service");
    window.location.href = "/";
  };

  return (
    <>
      <header className={`main-header ${sticky ? "fixed-header" : ""}`}>
        <div className="header-upper">
          <div className="container">
            <div className="header-inner">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-6 col-6 col-sm-3">
                  <div className="back-area">
                    <div className="back">
                      {/* <a href="/#service" className="text-black">Back To Home</a> */}
                      <div className="back-btn">
                        <button
                          onClick={handleBackToHome}
                          className="theme-btn-three"
                        >
                          <i className="ri-arrow-left-line"></i>
                          Back To Home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
