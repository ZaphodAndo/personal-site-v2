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
    position:fixed;
    min-width: 100%;

    hr {
        background-image: linear-gradient(to right, #fc00ff, #00dbde);
        margin: 0;
        border: 0;
        height: 2px;
    }

    .nav-bar {
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        background-color: #202020;
        box-shadow: 1px 2px 18px rgba(0,0,0,.1);
    }

    .links {
        padding-top: 19px;
        padding-bottom: 16px;
    }
    .links a {
        text-decoration: none;
        color: #798499;
        font-weight: 500;
        margin: 0 1rem;
        padding: 1rem .5rem;
        border-bottom: 2px solid transparent;
    }
    .links a:hover {
        color: #b3b9c5;
        border-bottom: 2px solid #5183f5;
    }
    .links a:active {
        border-bottom: 2px dashed #5183f5;
    }
    
    a {
        text-decoration: none;
        color: #798499;
        font-weight: 500;
        margin: 0 1rem;
        padding: 1rem .5rem;
    }
    a:hover {
        color: #b3b9c5;
    }

    .brand {
        display: flex;
        align-items: center;
    }
    .brand img {
        margin-right: 1rem;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <hr/>
                <div className="nav-bar">
                    <div>
                        <Link href="/">
                            <a className="brand">
                                <img src="../static/favicon-32x32.png" alt=""/> 
                                <span>Ethan Anderson</span>
                            </a>
                        </Link>
                    </div>
                    <div className="links">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                        <Link href="/articles">
                            <a>Articles</a>
                        </Link>
                    </div>
                </div>
            </StyledHeader>
        )
    }
}
