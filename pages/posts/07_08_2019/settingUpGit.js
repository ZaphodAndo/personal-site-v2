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
    max-width: 750px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;
`;

const ArticleContent = styled.div`
    p {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 1.1rem;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: #81a5f8;
    }
    a:hover {
        color: ${props => props.theme.blue};
    }

    img {
        max-width: 100%;
    }
`;

export default class welcomeToMySite extends Component {
    render() {
        return (
            <WelcomeToMySiteContent theme={theme}>
                <Meta />
                <Header></Header>
                <Content>
                    <ArticleInfo title="Setting up Git!" desc="How to set up Git on your machine. 💻" date="7 August 2019" tag1="Git" tag2="Guide"></ArticleInfo>
                    <ArticleContent theme={theme}>
                        <h2>Useful Links 🙌</h2>
                        <ul>
                            <li>
                                <p>Download Git: <Link href="https://git-scm.com/downloads"><a>https://git-scm.com/downloads</a></Link></p>
                            </li>
                            <li>
                                <p>Git Documentation: <Link href="https://git-scm.com/doc"><a>https://git-scm.com/doc</a></Link></p>
                            </li>
                        </ul>
                        <h2>Download Git</h2>
                        <p>Fist navigate to the download section of the official Git site <Link href="https://git-scm.com/downloads"><a>Here</a></Link>.</p>
                        <p>Then select the download for your operating system of choice. As I am using windows that is the option that I will be selecting.</p>
                        <img alt="Image of Git download page" src="../../static/articleImages/setupGitPic1.PNG"/>
                        <h2>Install</h2>
                        <p>Now that the Git installer has been downloaded, run the installer on your machine.</p>
                        <p>Follow the setup until you reach the option to select which editor you want to use. For this option its up to you, I personaly prefer nano but you can use what you want.</p>
                        <img alt="Selecting default editor for git" src="../../static/articleImages/setupGitPic2.PNG"/>
                        <p>For the rest of the options you can just leave them on the defaults as that should be fine for most people and then press install.</p>
                        <h2>Your Done! 😎</h2>
                        <p>Now open your terminal of choice and run the command "git --version" to check if git is installed correctly.</p>
                        <img alt="Using git command in terminal" src="../../static/articleImages/setupGitPic3.PNG"/>
                        <p>Now you can start using Git!</p>
                        <p>Its also worth noting that by installing Git you will now also have access to git-bash on your computer if you are on windows, allowing the user to have a terminal that is more inline with what you might find on Linux and MacOS.</p>
                    </ArticleContent>
                </Content>
                <Footer></Footer>
            </WelcomeToMySiteContent>
        )
    }
}