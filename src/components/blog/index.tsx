 
import  { useState } from 'react'
import PostboxArea from './PostboxArea'
import Breadcrumb from '../common/Breadcrumb' 
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterOne from '../../layouts/footers/FooterOne';
import VideoPopup from '../../modals/VideoPopup';
import ScrollTop from '../common/ScrollTop';
import ScrollToTop from '../common/ScrollToTop';
import BlogDetailsArea from '../blog-details/BlogDetailsArea';
import ResumeArea from '../about/ResumeArea';
import SkillArea from '../about/SkillArea';
import SingleProjectArea from '../single-project/SingleProjectArea';
import TestimonoalArea from '../home/TestimonoalArea';
import BrandArea from '../home/BrandArea';
import BlogArea from '../home/BlogArea';

export default function Blog() {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Blogs" style_4={true} />
            <PostboxArea setIsVideoOpen={setIsVideoOpen} />
            <BlogDetailsArea />
            <ResumeArea />
            <SkillArea />
            <SingleProjectArea />
            <TestimonoalArea />
            <BrandArea />
            <BlogArea />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}

      <ScrollToTop />
      <ScrollTop />
    </>
  )
}
