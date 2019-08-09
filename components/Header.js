import React, { Component } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};
  
Router.onRouteChangeError = () => {
    NProgress.done();
};

const StyledHeader = styled.header`
    hr {
        background-image: linear-gradient(to right, #fc00ff, #00dbde);
        margin: 0;
        border: 0;
        height: 2px;
    }

    a {
        text-decoration: none;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <hr/>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/articles">
                    <a>Articles</a>
                </Link>
            </StyledHeader>
        )
    }
}
