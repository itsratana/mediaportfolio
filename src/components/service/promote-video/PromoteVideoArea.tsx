 
import { useState } from "react";
import "react-18-image-lightbox/style.css";

interface DataType {
  id: number;
  col: string;
  video: string;
  title: string;
  category: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "6",
    video: "https://www.youtube.com/watch?v=xFx21G73AQU",
    title: "Resort Showcase",
    category: "Promote Video",
  },
];

export default function PromoteVideoArea() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handleVideoPopup = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };
  const getYouTubeThumbnail = (url: string) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };
  const extractVideoId = (url: string): string => {
    const parsed = new URL(url);
    return parsed.searchParams.get("v") || ""; // returns video ID
  };

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="container">
          <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title wow fadeInUp delay-0-2s">
                  <h2>Projects Highlight</h2>
                </div>
              </div>
            </div>
          </div>
        <div className="container">
          <div className="row g-4 portfolio-grid justify-content-center">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item`}>
                <div onClick={() => handleVideoPopup(item.video)} style={{ cursor: "pointer" }}>
                  <div className="portfolio-box">
                    <img
                      src={getYouTubeThumbnail(item.video)}
                      alt={item.title}
                      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && currentVideo && (
        <div className="video-popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${extractVideoId(currentVideo)}?autoplay=1&controls=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button className="video-popup-close" onClick={() => setIsOpen(false)}>✖</button>
          </div>
        </div>
      )}
    </>
  );
}