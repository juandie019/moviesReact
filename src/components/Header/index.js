import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import  RMBDLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, LogoImg, TMBDLogoImg } from './Header.styles';
//context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context);
    return(
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src = { RMBDLogo } alt='rmbd-logo' />
                </Link>
                {user ? (
                    <span className='loggedin'>Logged in as: {user.userName}</span>
                    ) : (
                    <Link to='/login'>
                        <span className='login'>Log in</span>
                    </Link>
                )}
                <TMBDLogoImg src = {TMBDLogo} alt='tmbd-logo' />
            </Content>
        </Wrapper>
    );
}

export default Header;

