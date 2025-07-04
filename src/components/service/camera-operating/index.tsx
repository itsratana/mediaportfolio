 
import Breadcrumb from '../../common/Breadcrumb' 
import FooterOne from '../../../layouts/footers/FooterOne'
import ScrollTop from '../../common/ScrollTop'
import ScrollToTop from '../../common/ScrollToTop'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import CameraOperatingArea from './CameraOperating'
import SectionTitle from '../../common/SectionTitle'

import CustomCursor from '../../common/CustomCursor'

export default function CameraOperating() {
    return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Camera Operating" title_2="With experience in professional camera setups and equipment, I offer camera operating services for live events, interviews, video productions, and broadcast shoots. I focus on smooth, steady, and visually appealing footage that supports your creative direction."/>
            <SectionTitle title="Reels Highlight" />
            <CameraOperatingArea />
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
