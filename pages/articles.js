import React, { Component } from 'react'
import styled from 'styled-components';
import theme from '../components/styles/theme';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LargePostBlock from '../components/LargePostBlock';

const ArticleContent = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 750px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
    margin-bottom: 300px;

    .tags {
        display: flex;
    }

    .articleContainer {
        margin-top: 50px;
    }
`;

const Tag = styled.div`
    align-self: center;
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.blue};
    background-color: rgba(0,0,0,.2);
    padding: 10px;
    border-radius: 4px;
    max-height: 20px;
    margin-right: 5px;

    transform: translateZ(0);
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover, &:focus, &:active {
        background: transparent;
        background-color: rgba(0,0,0,.1);
        color: #81a5f8;

        transform: scale(1.1);
    }
`;

export default class articles extends Component {
    render() {
        return (
            <ArticleContent theme={theme}>
                <Meta></Meta>
                <Header></Header>
                <MainContent>
                    <h1>Articles</h1>
                    <div className="tags">
                        <Tag theme={theme}>Git</Tag>
                        <Tag theme={theme}>Meme</Tag>
                        <Tag theme={theme}>Misc</Tag>
                    </div>
                    <div className="articleContainer">
                        <LargePostBlock href="/posts/07_08_2019/settingUpGit" title="Setting up Git!" desc="How to set up Git on your machine. 💻" date="7 August 2019" tag="Git"></LargePostBlock>
                        <LargePostBlock href="/posts/05_08_2019/originalMeme" title="An original meme and a blast from the past!" desc="Its an old meme sir but it still checks out." date="5 August 2019" tag="Meme"></LargePostBlock>
                        <LargePostBlock href="/posts/05_08_2019/welcomeToMySite" title="Welcome to my site!" desc="Something I will redesign hundred of times only to make two posts!" date="5 August 2019" tag="Misc"></LargePostBlock>
                    </div>
                </MainContent>
                <Footer></Footer>
            </ArticleContent>
        )
    }
}
