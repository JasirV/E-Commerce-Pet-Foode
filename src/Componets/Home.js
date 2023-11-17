import React from "react";
import {
  MDBBtn,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import image from "../img/Cat-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Collection from "./Collection";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navigation/>
      <div>
        <MDBCarousel showControls>
          <MDBCarouselItem itemId={1}>
            <img
              src="https://scontent.fccj8-1.fna.fbcdn.net/v/t39.30808-6/273581251_1790384177964881_503367807611658517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WQBWkuj3P8QAX_RDElK&_nc_ht=scontent.fccj8-1.fna&oh=00_AfBBWC8tsGn-Z_6ikSBscfbOFd4OXIWiw9TBhA9mjuFrJA&oe=655B4C1B"
              className="d-block w-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => {
                  navigate("/collection");
                }}>
                BUY NOW
              </button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src="https://orchiddigitals.com/wp-content/uploads/2020/08/royal-canin-logo-with-dog-pic.jpg.webp"
              className="d-block w-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <button
                type="button"
                class="btn btn-outline-danger"
                onClick={() => {
                  navigate("/Dog");
                }}>
                BUY NOW
              </button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={image} className="d-block w-100" alt="..." />
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => {
                navigate("/Cat");
              }}>
              BUY NOW
            </button>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <Footer />
    </>
  );
};

export default Home;
