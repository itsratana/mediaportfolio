import { useState } from "react";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";
// import NavMenu from "./NavMenu";
import Sidebar from "../../components/common/SidebarTwo";
import menu_data from "./menu_data_two";

export default function HeaderTwo() {
  const { sticky } = UseSticky();
  const [open, setOpen] = useState(false);

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
                <div className="col-xl-10 col-lg-10 col-md-6 col-6 col-sm-9">
                  <div className="main-menu d-none d-lg-block">
                    <nav id="mobile-menu">
                      <ul>
                        {menu_data.map((item, i) => (
                          <li
                            key={i}
                            className={`${item.has_dropdown && "has-dropdown"}`}
                          >
                            <Link to={item.link}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="side-menu-icon d-lg-none text-end">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpen(!open)}
                      className="info-toggle-btn f-right sidebar-toggle-btn"
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
