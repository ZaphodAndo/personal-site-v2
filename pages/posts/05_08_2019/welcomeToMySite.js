import React, { Component } from 'react'
import Link from 'next/link';
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
    margin-bottom: 360px;
    margin-top: 50px;
`;

const ArticleContent = styled.div`
    p {
        margin: 0;
        font-size: 1.1rem;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: ${props => props.theme.secondaryColour};
    }
    a:hover {
        color: ${props => props.theme.primaryColour};
    }

    .middle {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export default class welcomeToMySite extends Component {
    render() {
        return (
            <WelcomeToMySiteContent theme={theme}>
                <Meta />
                <Header></Header>
                <Content theme={theme}>
                    <ArticleInfo title="Welcome to my site" desc="Something I will redesign hundred of times only to make two posts! 🤣" date="5 August 2019" tag1="Misc" tag2="First Post"></ArticleInfo>
                    <ArticleContent theme={theme}>
                        <h2>Welcome 👋</h2>
                        <p>Welcome to my blog that I have been creating over the past couple of weeks.</p>
                        <p className="middle">This is the place where I plan on posting all of my rants and raves about things as well as useful guides and posts about what I have learnt on my journey as a developer.</p>
                        <p>So if you are remotely interested in that sort of content then great this is the site for you otherwise what are you doing here? Go watch <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><a>YouTube</a></Link> or something. 🦀</p>
                    </ArticleContent>
                </Content>
                <Footer></Footer>
            </WelcomeToMySiteContent>
        )
    }
}
