import styled from "styled-components";

export const Header = styled.header`
  background-color: #1b1c1e;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

  @media (max-width: 37rem) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: 0 0 10px #2d1653, 0px 0px 10px #fff;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2rem;
    overflow: hidden;
  }

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #fff;
    position: relative;
    font-size: 1.25rem;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      border-radius: 3px;
      height: 3px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }

  span {
    position: relative;
  }

  @media (max-width: 56rem) {
    ul {
      display: block;
      position: absolute;
      top: 5rem;
      left: 0;
      background: #1b1c1e;
      width: 100%;
      height: 0px;
      z-index: 1;
      visibility: hidden;
      overflow-y: hidden;
      transition: 0.5s;

      a {
        margin: 1rem 0 0 2rem;
        font-size: 1.5rem;
        width: fit-content;
      }
      span {
        top: 1px;
      }
    }

    ul.navMobileActive {
      visibility: visible;
      overflow-y: auto;
      height: 230px;
    }
  }
`;

export const MobileBtn = styled.button`
  background: none;
  border: none;
  color: #fff;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border-color: #fff;
  color: #fff;

  ::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &.mobileBtnActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
