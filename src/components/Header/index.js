import React from 'react';
import { Link } from 'react-router-dom';

import  RMBDLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, LogoImg, TMBDLogoImg } from './Header.styles';


const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src = { RMBDLogo } alt='rmbd-logo' />
            </Link>
            <TMBDLogoImg src = {TMBDLogo} alt='tmbd-logo' />
        </Content>
    </Wrapper>
);

export default Header;

