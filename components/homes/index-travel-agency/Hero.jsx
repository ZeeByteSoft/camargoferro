"use client";

import { NextArrow, PrevArrow } from "@/components/common/SliderArrows";
import React from "react";
import Slider from "react-slick";

export default function Hero() {
  const options = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    // adaptiveHeight: true,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const slidersData = [
    {
      id: 1,
      backgroundImage: "bg_image--7",
      title: "",
      description:
        "Design sob medida — seja você buscando elegância minimalista ou algo marcante e imponente.",
    },
    {
      id: 2,
      backgroundImage: "bg_image--7",
      title: "",
      description:
        "Os móveis são feitos sob medida para atender às preferências pessoais de design, necessidades funcionais e restrições de espaço.",
    },
    {
      id: 3,
      backgroundImage: "bg_image--7",
      title: "",
      description:
        "Atendimento dedicado: entendemos suas ideias, suas necessidades, para criar peças que combinem com seu estilo e seu espaço",
    },
  ];

  return (
    <Slider
      {...options}
      className="slider-area slider-activation slider-style-4 slider-dot rainbow-slick-dot rainbow-slick-arrow"
    >
      {slidersData.map((slider) => (
        <div
          key={slider.id}
          className={`height-850 bg_image ${slider.backgroundImage} d-flex align-items-center`}
          data-black-overlay={5}
        >
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  <h1 className="title">{slider.title}</h1>
                  <p className="description">
                    {slider.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                  <div className="button-group mt--30">
                    <a
                      className="btn-default"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=556298724893&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%A3o."
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End Single Slider  */}
    </Slider>
  );
}
