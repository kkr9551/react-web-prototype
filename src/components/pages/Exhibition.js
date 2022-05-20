import React from "react";
import Footer from "../Footer";
import {Row, Col} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from "../user-one.png";
import ExhibitionDetail from "./ExhibitionDetail";
import './Exhibition.css';

const Exhibition = () => {
  
    const exhibition = [
      {
        name: "Davinci Code",
        description: "The hit book in Dan Brown's career, though stirring public's interest in religion, was banned in many countries ...", 
        author: "Dan Brown",
        img: "https://i.pinimg.com/564x/24/6f/17/246f17a76295e430bb347bf25cec74f0.jpg" 
      },

      {
        name: "The Diary of a Young Girl",
        description: "Though included in several lists of the top books of the 20th century, unavoidably it was censored because of ...",
        author: "Anne Frank",
        img: "https://i.pinimg.com/564x/f5/4a/17/f54a172623b2c5dd8d9ae3a4da977b2f.jpg"
      },

      {
        name: "Lolita",
        description: "Lolita, notable because of the protagonist and unreliable narratist, was frequently described as an 'erotic novel ...'",
        author: "Vladimir Nabokov",
        img: "https://i.pinimg.com/564x/80/d4/83/80d48370996e845d78712b18876f638b.jpg"
      },

      {
        name: "1984",
        description: "It was first banned and burned in communist Russia under Stalin and USSR because of anti-communism ...",
        author: "George Orwell",
        img: "https://i.pinimg.com/564x/43/75/b7/4375b7d9bf24b88aa53744b417227485.jpg"
      },

      {
        name: "Dragon Ball",
        description: "This famous Japanese comics undergo ridiculous edits and cuts in the U.S to tone down the violence ...",
        author: "Akira Toriyama",
        img: "https://i.pinimg.com/564x/84/a1/a0/84a1a006188c9ce13a5c52a6beb467aa.jpg"
      }
    ];

    const options = {
      loop: true,
      center: true,
      items: 4,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        }
      }
    };

    return (
      <>
      <Row>
        <Col>
        <section id="exhibition" className="exhibition pt-70 pb-70">
          <div className="container mt-5">
            <h1 className="miniTitle text-center">Exhibition</h1>
            <div className="text-center">
              <h2 className="sectionTitle">Have you ever heard of them?</h2>
            </div>
            <p className="text-center"></p>
            <Row>
              <Col>
              <OwlCarousel id="book-exhibition" className="owl-carousel owl-theme" {...options}>
                {
                  exhibition.length === 0?
                  <div className="item">
                    <div className="shadow-effect">
                      <img src={userPic} className="img-card" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                      </p>
                    </div>
                    <div className="exhibition-item">
                      <h3>Rajon Rony</h3>
                      <small>Italy</small>
                    </div>
                  </div> :
                  exhibition.map(exhibitionDetail => {
                    return (
                      <ExhibitionDetail exhibitionDetail={exhibitionDetail} key={exhibitionDetail._key} />
                    );
                  })
                }
              </OwlCarousel>
              </Col>
            </Row>
          </div>
        </section>
        </Col>
      </Row>
      <div>
        <Footer />
      </div>  
      </>
    );
}

export default Exhibition;