import styled from "styled-components";

export const StickFollowIcon = styled.div`
  position: fixed;
  top: 50%;
  left: 30px;
  width: 20px;
  height: 200px;
  margin-top: -100px;

  @media only screen and (max-width: 991px) {
    position: static;
    width: unset;
    height: unset;
    margin-top: unset;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 40px 0;
    align-items: center;
  }
`;

export const IconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

export const IconItem = styled.li`
  display: block;
  font-size: 12px;
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 991px) {
    display: inline;
    margin-bottom: 29px;
    margin-right: 10px;
  }
`;

export const FollowText = styled.p`
  position: relative;
  top: 70px;
  left: -24px;
  width: 68px;
  height: 20px;
  color: var(--text-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  transform: rotate(-90deg);

  @media only screen and (max-width: 991px) {
    top: unset;
    left: unset;
    width: unset;
    height: unset;
    white-space: nowrap;
    transform: unset;
    font-size: 17px;
    margin-right: 65px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 9px;
    right: -48px;
    width: 40px;
    height: 1px;
    background-color: var(--text-color);

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  width: 1.3em;
  height: 1.3em;
  fill: var(--text-color);
`;
