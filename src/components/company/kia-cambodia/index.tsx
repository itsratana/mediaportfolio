import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../../layouts/footers/FooterOne";
import ScrollTop from "../../common/ScrollTop";
import ScrollToTop from "../../common/ScrollToTop";
import SectionTitle from "../../common/SectionTitle";
import KiaCambodiaArea from "./KiaCambodiaArea";
import AIGeneratedArea from "../../service/ai-generated/AIGenerated";
import HeaderCompany from "../../../layouts/headers/HeaderCompany";

export default function KiaCambodia() {
  return (
    <>
      <HeaderCompany />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title="Kia Cambodia"
              title_2="Plan and produce visual content that highlights vehicles, features, dealership services, and brand identity. Work closely with digital marketing manager to create videos optimized for social media, advertising, and online branding. Manage the full production workflow, ensuring all content aligns with automotive brand standards."
            />
            <div className="projects-area" id="portfolio">
              <SectionTitle title="Reels Highlight" />
              <KiaCambodiaArea />
            </div>
            <div className="" id="portfolio">
              <SectionTitle title="Ai Generated Contents" />
              <AIGeneratedArea />
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
