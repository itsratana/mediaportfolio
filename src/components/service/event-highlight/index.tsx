 
import Breadcrumb from '../../common/Breadcrumb' 
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import EventHighlightArea from './EventHighlightArea'
import SectionTitle from '../../common/SectionTitle'


export default function EventHighlight() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Event Highlight" title_2="Transform your special occasions into cinematic memories. I capture the energy, emotion, and essence of your events, whether it's a wedding, concert, corporate function, or private gathering, and turn them into visually engaging highlight reels you can relive and share."/>
            <SectionTitle title="Reels Highlight" />
            <EventHighlightArea />
          </main>
          <FooterOne />
        </div>
      </div>

      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
