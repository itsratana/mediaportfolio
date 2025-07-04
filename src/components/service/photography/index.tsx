 
import Breadcrumb from '../../common/Breadcrumb' 
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import PhotographyArea from './photography'
import SectionTitle from '../../common/SectionTitle'

export default function Photography() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Photography" title_2="From candid shots to carefully composed frames, I provide high-resolution photography for a variety of needs including events, portraits, lifestyle, and branding. Every photo is professionally edited to match the tone and style you're looking for."/>
            <SectionTitle title="Photo" />
            <PhotographyArea />
          </main>
          <FooterOne />
        </div>
      </div>

      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
