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
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    background-color: #202020;
    box-shadow: 1px 2px 18px rgba(0,0,0,.1);

    hr {
        background-color: #5183f5;
        margin: 0;
        border: 0;
        height: 2px;
    }

    .nav-bar-wrapper {
        display: flex;
        justify-content: center;
    }

    .nav-bar {
        display: flex;
        font-size: 1.2rem;
        max-width: 750px;
        min-width: 750px;

        @media screen and (max-width: 850px) {
            min-width: 0;
        }
    }

    .links {
        align-self: center;
        margin-left: auto;
        margin-right: 0;
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
        padding-left: 0;
        margin-left: 0;
    }
    .brand img {
        margin-right: 1rem;
    }
    .brand span {
        @media screen and (max-width: 570px) {
            display: none;
        }
    }
`;

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <hr/>
                <div className="nav-bar-wrapper">
                    <div className="nav-bar">
                        <div>
                            <Link href="/">
                                <a className="brand">
                                    <img src="/static/favicon-32x32.png" alt="Website logo"/> 
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
                </div>
                
            </StyledHeader>
        )
    }
}
