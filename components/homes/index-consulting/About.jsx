"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="about-area about-style-4 rainbow-section-gap">
        <div className="container">
          <div className="row row--40 align-items-center">
            <div className="col-lg-6">
              <div className="video-btn">
                <div className="video-popup icon-center">
                  <div className="overlay-content">
                    <div className="thumbnail">
                      <Image
                        className="radius-small"
                        alt="Corporate Image"
                        src="/assets/images/about/contact-image.png"
                        width={615}
                        height={560}
                      />
                    </div>
                    <div className="video-icon">
                      <a
                        className="btn-default rounded-player popup-video"
                        onClick={() => setOpen(true)}
                      >
                        <span>
                          <i className="feather-play" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="video-lightbox-wrapper" />
              </div>
            </div>
            <div className="col-lg-6 mt_md--40 mt_sm--40">
              <div className="content">
                <div className="inner">
                  <h3 className="title">
                    Sobre nós<br />
                   <strong>Camargo & Ferro Marcenaria.</strong>
                  </h3>
                  <ul className="feature-list">
                    <li>
                      <div className="icon">
                        <i className="feather-check" />
                      </div>
                      <div className="title-wrapper">
                        <h4 className="title">
                          Racks para Sala
                        </h4>
                        <p className="text">
                          Centros de entretenimento que combinam funcionalidade e estética para sua sala de estar.
                        </p>
                      </div>
                    </li>
                                        <li>
                      <div className="icon">
                        <i className="feather-check" />
                      </div>
                      <div className="title-wrapper">
                        <h4 className="title">
                          Guarda-roupas
                        </h4>
                        <p className="text">
                          Closets e guarda-roupas personalizados que organizam e valorizam suas roupas e acessórios.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="feather-check" />
                      </div>
                      <div className="title-wrapper">
                        <h4 className="title">
                          Cozinhas Planejadas
                        </h4>
                        <p className="text">
                          Projetos funcionais que otimizam cada centímetro do seu espaço, com materiais de qualidade e design moderno.
                        </p>
                      </div>
                    </li>
                                        <li>
                      <div className="icon">
                        <i className="feather-check" />
                      </div>
                      <div className="title-wrapper">
                        <h4 className="title">
                          Armários Sob Medida
                        </h4>
                        <p className="text">
                         Soluções personalizadas para todos os ambientes da casa, aproveitando cada espaço disponível.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="about-btn mt--30">
                    <Link className="btn-default" href="/about">
                      Saber Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Y_14HYK4mOo"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
