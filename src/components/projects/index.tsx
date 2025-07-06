import FooterOne from "../../layouts/footers/FooterOne";
import HeaderProject from "../../layouts/headers/HeaderProject";
import Breadcrumb from "../common/Breadcrumb";
//import CustomCursor from "../common/CustomCursor";
import ScrollTop from "../common/ScrollTop";
import ScrollToTop from "../common/ScrollToTop";
import SectionTitle from "../common/SectionTitle";
import EventHighlightArea from "../service/event-highlight/EventHighlightArea";
import PromoteVideoArea from "../service/promote-video/PromoteVideoArea";
import CameraOperatingArea from "../service/camera-operating/CameraOperating";

export default function Projects() {
  return (
    <>
      <HeaderProject />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Projects" style_2={true} />
            <div className="projects-area" id="portfolio">
              <SectionTitle title="Event Highlight" />
              <div className="projects-m-btm">
                <EventHighlightArea />
              </div>
            </div>
            <div className="projects-area" id="portfolio">
              <SectionTitle title="Promote Video" />
              <div className="projects-m-btm">
                <PromoteVideoArea />
              </div>
            </div>
            <div className="projects-area" id="portfolio">
              <SectionTitle title="Camera Operating" />
              <CameraOperatingArea />
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
    </>
  );
}
