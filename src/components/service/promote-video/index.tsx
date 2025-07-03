 
import Breadcrumb from '../../common/Breadcrumb' 
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'

import CustomCursor from '../../common/CustomCursor'

export default function PromoteVideo() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Promote Video" />
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
