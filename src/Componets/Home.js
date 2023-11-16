import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselItem } from "mdb-react-ui-kit";
import image from '../img/Cat-removebg-preview.png'
const Home = () => {
  return (
    <div>
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://scontent.fccj8-1.fna.fbcdn.net/v/t39.30808-6/273581251_1790384177964881_503367807611658517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WQBWkuj3P8QAX_RDElK&_nc_ht=scontent.fccj8-1.fna&oh=00_AfBBWC8tsGn-Z_6ikSBscfbOFd4OXIWiw9TBhA9mjuFrJA&oe=655B4C1B' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <button className="btn mb-3" style={{background:"red",color:"white"}}>BUY NOW</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://orchiddigitals.com/wp-content/uploads/2020/08/royal-canin-logo-with-dog-pic.jpg.webp' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <button className="btn p-2 mb-3" style={{background:"red",color:"white"}}>BUY NOW</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
};

export default Home;
