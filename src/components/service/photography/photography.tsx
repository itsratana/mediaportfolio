 
import { useState } from "react";
import ImagePopup from "../../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";
import BlurHashImage from "../../common/BlurHashImage";

import portfolio_img_1 from "/assets/images/photography/work1.jpg";
import portfolio_img_2 from "/assets/images/photography/work2.jpg";
import portfolio_img_3 from "/assets/images/photography/work3.jpg";
import portfolio_img_4 from "/assets/images/photography/work4.jpg";
import portfolio_img_5 from "/assets/images/photography/work5.jpg"; 
import portfolio_img_6 from "/assets/images/photography/work6.jpg";

interface DataType {
  id: number;
  col: string;
  image: string;
  blur: string;
  title: string;
  category: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "4",
    image: portfolio_img_1,
    blur: "L37-TOs+00?Z03aixaIp0do{~VRP",
    title: "Soccer",
    category: "Sport",
  },
  {
    id: 2,
    col: "4",
    image: portfolio_img_2,
    blur: "L08;Vi00000d008^.64:?z~T~q~D",
    title: "Power Shot",
    category: "Sport",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    blur: "L18NRV^%00xb01Io-jxa01NL~VIo",
    title: "Strike",
    category: "Sport",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    blur: "LFIphw04=}|_6w$^ELJ70Mnn=y%3",
    title: "Good Beer",
    category: "Party",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    blur: "LDGQ^A~V9^~TNN,HIVEe#?9dw~%K",
    title: "Birthday Party",
    category: "Party",
  },
  {
    id: 6,
    col: "4",
    image: portfolio_img_6,
    blur: "LAHnTkt-8_j;.TNGvytT0W-T^$x]",
    title: "Place to Chill",
    category: "Party",
  },
];

export default function PhotographyArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 6).map((item) => item.image);


  return (
    <>

      <div className="projects-padding-btm" id="portfolio">
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="portfolio-box">
                    <BlurHashImage src={item.image} blurHash={item.blur} data-rjs="2" alt={item.title}/>
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            ))} 
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  )
}
