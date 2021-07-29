import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/undraw_female_avatar.svg';
import logoDesktop from '../../assets/images/logo-desktop.png';
import logoMobile from '../../assets/images/mobile-icon.png';
import ToggleSwitch from '../ToggleSwitch/TogleSwitch';

const HeaderStyled = styled.header`
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  .margin-x {
    margin: 0 0.75rem;
  }
  .menu-hamburger {
    display: none;
  }
  @media (max-width: 576px) {
    padding: 1rem 0.75rem;

    .hide-mobile {
      display: none;
    }

    .menu-hamburger {
      display: block;
    }
  }
`;

const InputSearch = styled.input`
  outline: none;
  width: 100%;
  padding: 12px 20px;
  margin: 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border-color: #928a97;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  @media (max-width: 576px) {
    height: 40px;
    width: 40px;
  }
`;

const Logo = styled.img`
  height: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => (
  <HeaderStyled>
    <Wrapper>
      <picture>
        <source srcSet={logoMobile} media="(max-width: 576px)" />
        <Logo src={logoDesktop} alt="Pied Piper logo" className="margin-x" />
      </picture>
      <form className="margin-x">
        <InputSearch type="text" placeholder="Search" />
      </form>
    </Wrapper>
    <Wrapper className="nav hide-mobile">
      <div className="margin-x hide-mobile">
        <ToggleSwitch />
      </div>
      <figure className="margin-x">
        <Avatar src={avatar} alt="current user avatar" />
      </figure>
    </Wrapper>
  </HeaderStyled>
);

export default Header;
