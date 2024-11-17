import React from 'react'
import Slider from "react-slick";
import './banner.css'
import one from '../../img/nature1.jpg'
import two from '../../img/nature2.jpg'
import three from '../../img/nature3.jpg'
import four from '../../img/nature4.jpg'
import five from '../../img/nature5.jpg'
import six from '../../img/nature6.jpg'
import seven from '../../img/nature7.jpg'
import eight from '../../img/nature8.jpg'
import nine from '../../img/nature9.jpg'

function Banner() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="items">
            <img src={one} alt="" />
            <div className="details">
              <h4>Welcome to</h4>
              <h2>MARAK</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque repudiandae minus porro neque repellendus nesciunt, adipisci explicabo unde facilis saepe obcaecati quia, facere reiciendis illo alias hic aperiam corporis nulla aut ullam amet similique voluptas. Aliquid expedita maiores in repellat, fuga eveniet ratione tempora possimus eos voluptatum facere magni!
              Eveniet delectus aliquid quisquam illum laudantium reiciendis iste fuga suscipit et unde culpa soluta pariatur temporibus molestias commodi magnam dolor ipsa in atque autem, eaque possimus esse! Voluptatibus ipsum animi quae, dolorem sint itaque, perspiciatis eum ab amet, soluta ea at officia aliquid dignissimos? Amet ab harum eos sit eligendi!</p>
            </div>
        </div>
        <div className="items">
            <img src={two} alt="" />
            <div className="details">
              <h2>Coding Life</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque repudiandae minus porro neque repellendus nesciunt, adipisci explicabo unde facilis saepe obcaecati quia, facere reiciendis illo alias hic aperiam corporis nulla aut ullam amet similique voluptas. Aliquid expedita maiores in repellat, fuga eveniet ratione tempora possimus eos voluptatum facere magni!
              Eveniet delectus aliquid quisquam illum laudantium reiciendis iste fuga suscipit et unde culpa soluta pariatur temporibus molestias commodi magnam dolor ipsa in atque autem, eaque possimus esse! Voluptatibus ipsum animi quae, dolorem sint itaque, perspiciatis eum ab amet, soluta ea at officia aliquid dignissimos? Amet ab harum eos sit eligendi!</p>
            </div>
            
        </div>
        <div className="items">
            <img src={three} alt="" />
            <div className="details">
              <h2>Coding Life</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque repudiandae minus porro neque repellendus nesciunt, adipisci explicabo unde facilis saepe obcaecati quia, facere reiciendis illo alias hic aperiam corporis nulla aut ullam amet similique voluptas. Aliquid expedita maiores in repellat, fuga eveniet ratione tempora possimus eos voluptatum facere magni!
              Eveniet delectus aliquid quisquam illum laudantium reiciendis iste fuga suscipit et unde culpa soluta pariatur temporibus molestias commodi magnam dolor ipsa in atque autem, eaque possimus esse! Voluptatibus ipsum animi quae, dolorem sint itaque, perspiciatis eum ab amet, soluta ea at officia aliquid dignissimos? Amet ab harum eos sit eligendi!</p>
            </div>
        </div>
        <div className="items">
            <img src={four} alt="" />
        </div>
        <div className="items">
            <img src={five} alt="" />
        </div>
        <div className="items">
            <img src={six} alt="" />
        </div>
        <div className="items">
            <img src={seven} alt="" />
        </div>
        <div className="items">
            <img src={eight} alt="" />
        </div>
        <div className="items">
            <img src={nine} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Banner