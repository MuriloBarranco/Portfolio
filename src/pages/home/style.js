import styled from "styled-components"

export const Section = styled.section`
  flex: 1 0 auto;
  position: relative;
  width: 100%;
  transition: all 0.5s ease-in;
`

export const IntroSec = styled.div`
  height: calc(100vh - 60px);
  min-height: 700px;
  margin-top: -60px;

  @media (max-width: 991.98px) {
    display: block;
    height: auto !important;
  }

  .text,
  .h_bg-image {
    width: 50%;

    @media (max-width: 991.98px) {
      width: 100%;
    }
  }

  .intro {
    max-width: 450px;
    margin: 0 auto;

    @media (max-width: 991.98px) {
      max-width: 700px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`

export const BgImage = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 700px;
  position: relative;
  filter: saturate(0.5);
`

export const IntroText = styled.div`
  h1 {
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: 700;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }
`

export const Intro = styled.div`
  max-width: 450px;
  margin: 0 auto;
`

export const ActionButton = styled.div`
  padding: 4px 19px;
  color: var(--secondary-color);
  position: relative;
  border: var(--secondary-color) 2px solid;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  cursor: pointer;
  border-radius: 0;
  margin-right: 20px;

  &:hover {
    box-shadow: 8px 8px 0px var(--text-color), -8px -8px 0px var(--text-color);

    .one,
    .two,
    .three,
    .four {
      transform: translate3d(0px, 0px, 0px);
    }

    .one {
      opacity: 1;
    }
  }

  .ring {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    top: 0;
    left: 0;
    transform: translate3d(0px, 90px, 0px);

    &.one {
      background-color: #000;
      transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -4;
    }

    &.two {
      background-color: var(--primary-color);
      transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -3;
    }

    &.three {
      background-color: var(--secondary-color);
      transition: all 0.7s cubic-bezier(0.55, 0, 0.1, 1);
      z-index: -2;
    }
  }

  a {
    text-decoration: none;
  }

  &#button_p {
    background: var(--secondary-color);
    color: var(--primary-color);
  }

  #button_h:hover {
    color: var(--primary-color);
  }
`

export const IconContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  img { 
    width: 100px;
    height:100px;
  }
`;
