 
// import ServiceArea from '../../home/ServiceArea'
import Breadcrumb from '../../common/Breadcrumb' 
// import HeaderOne from '../../../layouts/headers/HeaderOne'
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'

import CustomCursor from '../../common/CustomCursor'

export default function EventHighlight() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Event Highlight" />
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
