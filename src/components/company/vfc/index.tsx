import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../../layouts/footers/FooterOne";
import ScrollTop from "../../common/ScrollTop";
import ScrollToTop from "../../common/ScrollToTop";
import HeaderCompany from "../../../layouts/headers/HeaderCompany";
import SectionTitle from "../../common/SectionTitle";
import VFCArea from "./VFC";

export default function VFC() {
  return (
    <>
      <HeaderCompany />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title="Volleyball Federation of Cambodia"
              title_2="Lead the planning, production, and execution of all video content for the Volleyball Federation of Cambodia, ensuring every deliverable meets sponsor requirements and aligns with both sponsor branding and the federation's sports identity. Responsible for creating high-quality visual content related to volleyball events, athletes, promotions, and sponsorship campaigns. Oversee the full production workflow—including concept development, filming, editing, and final delivery—to support marketing partnerships, increase fan engagement, and elevate the federation’s visual storytelling across digital platforms."
            />
            <div className="projects-area" id="portfolio">
              <SectionTitle title="Reels Highlight" />
              <VFCArea />
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
