 
import Breadcrumb from '../../common/Breadcrumb' 
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import PromoteVideoArea from './PromoteVideoArea'
import CustomCursor from '../../common/CustomCursor'
import SectionTitle from '../../common/SectionTitle'

export default function PromoteVideo() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Promote Video" title_2="I create impactful videos to promote your event, brand, product, or service. Whether it’s a short social media clip, an event teaser, or a full promotional piece, I focus on clear visuals, strong messaging, and a professional finish that captures attention and delivers results."/>
            <SectionTitle title="Reels Highlight" />
            <PromoteVideoArea />
          </main>
          <FooterOne />
        </div>
      </div>

      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  )
}
