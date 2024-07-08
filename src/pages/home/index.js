import React from "react";
import { BgImage, IntroSec, IntroText, Section, Intro, ActionButton, IconContainer } from "./style"; // Supondo que você tenha um estilo separado para o componente
import imgProfile from '../../assets/images/profile.jpeg';
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Icon from '../../assets/images/icon.png'

const Home = () => {
  const whatsappNumber = "5518997362352";
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços!";

  return (
    <HelmetProvider>
      <Section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <IntroSec className="intro_sec d-block d-lg-flex align-items-center relative-position">
          <BgImage
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${imgProfile})` }}
          >

            <IconContainer>
              <img src={Icon} alt="Ícone" className="icon" />
            </IconContainer>

          </BgImage>
          <IntroText className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <Intro className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/contact">
                    <ActionButton id="button_p" className="ac_btn btn">
                      Contato
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </ActionButton>
                  </Link>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ActionButton id="button_whatsapp" className="ac_btn btn">
                      WhatsApp
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </ActionButton>
                  </a>
                </div>
              </div>
            </Intro>
          </IntroText>

        </IntroSec>
      </Section>
    </HelmetProvider>
  );
};

export default Home;
