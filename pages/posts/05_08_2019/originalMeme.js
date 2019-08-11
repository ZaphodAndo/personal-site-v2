import React, { Component } from 'react'
import styled from 'styled-components';
import Meta from '../../../components/Meta';
import theme from '../../../components/styles/theme';
import ArticleInfo from '../../../components/ArticleInfo';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const WelcomeToMySiteContent = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.theme.pageWidth};
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
`;

const ArticleContent = styled.div`
    p {
        font-size: 1.1rem;
    }

    .middle {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .video-container {
        position:relative;
        padding-bottom:56.25%;
        padding-top:30px;
        height:0;
        overflow:hidden;
    }
    
    .video-container iframe, .video-container object, .video-container embed {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`;

export default class originalMeme extends Component {
    render() {
        return (
            <WelcomeToMySiteContent theme={theme}>
                <Meta />
                <Header></Header>
                <Content theme={theme}>
                <ArticleInfo theme={theme} title="An original meme and a blast from the past!" desc="Its an old meme sir but it still checks out." date="5 August 2019" tag1="Meme" tag2="Blog Filler"></ArticleInfo>
                    <ArticleContent theme={theme}>
                        <div className="video-container"><iframe width="700" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        <p>I had to have something to post on my site to start it off. 🤣</p>
                    </ArticleContent>
                </Content>
                <Footer></Footer>
            </WelcomeToMySiteContent>
        )
    }
}