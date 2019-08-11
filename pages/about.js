import React, { Component } from 'react'
import Link from 'next/link';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import theme from '../components/styles/theme';

const AboutContent = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: ${props => props.theme.pageWidth};
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 50px;

    a {
        text-decoration: none;
        font-weight: 600;
        color: ${props => props.theme.secondaryColour};
    }
    a:hover {
        color: ${props => props.theme.primaryColour};
    }

    p {
        margin: 0;
        font-size: 1.1rem;
    }

    .middle {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .last {
        margin-top: 10px;
    }

    ul {
        margin: 0;
        font-size: 1.1rem;
    }
`;

export default class about extends Component {
    render() {
        return (
            <AboutContent theme={theme}>
                <Meta></Meta>
                <Header></Header>
                <Content theme={theme}>
                    <h1>About Me</h1>
                    <p>
                        Hi 👋 I’m Ethan, an apprentice applications developer who works for a company called PebblePad.
                    </p>
                    <p className="middle">
                        I am mostly a Frontend dev that occasionally delves into a bit of backend and other areas especially at my place of work where I use a lot of C# and .NET alongside your usual frontend technologies such as JavaScript.
                    </p>
                    <p>
                        My main interests are in Frontend web development however I also have a great interest in mobile development, an area which I am currently looking to maybe expand my knowledge into.
                    </p>
                    <h2>About this site</h2>
                    <p>
                        This site is my little corner of the internet where I will be posting things that I have learned over time in my adventures as a software developer as well as potential tutorials and guides on various things software and programming related and maybe even the occasional general blog post that will probably mostly involve me incessantly ranting about something going on or involved with the tech industry as a whole.
                    </p>
                    <p className="last">
                        So if you are remotely interested in that sort of content then great this is the site for you otherwise what are you doing here? Go watch 
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <a> YouTube </a>
                        </Link> 
                        or something. 🦀
                    </p>
                    <h2>My Links</h2>
                    <Link href="https://twitter.com/Goebbels_Ando">
                        <a>🦜 Twitter</a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ethan-anderson-41ba9a172">
                        <a>🔗 LinkedIn</a>
                    </Link>
                    <Link href="https://medium.com/@ethan.anderson">
                        <a>📰 Medium</a>
                    </Link>
                    <Link href="https://github.com/MrGoebbels">
                        <a>🐙 GitHub</a>
                    </Link>
                    <h2>Currently Using</h2>
                    <ul>
                        <li>Computer: Windows 10 Desktop /w i5-6400 CPU, 8GB RAM, GTX 1060</li>
                        <li>
                            Editors/IDE: 
                            <Link href="https://code.visualstudio.com/">
                                <a> Visual Studio Code</a>
                            </Link>
                            /
                            <Link href="https://visualstudio.microsoft.com/">
                                <a>Visual Studio</a>
                            </Link> 
                        </li>
                        <li>
                            Code syntax theme: 
                            <Link href="https://taniarascia.github.io/new-moon/">
                                <a> New Moon</a>
                            </Link> 
                        </li>
                        <li>
                            Hosting: 
                            <Link href="https://www.netlify.com/">
                                <a> Netlify</a>
                            </Link> 
                        </li>
                        <li>
                            Static site generator (blog): 
                            <Link href="https://nextjs.org/">
                                <a> Next.js</a>
                            </Link> 
                        </li>
                    </ul>
                </Content>
                <Footer></Footer>
            </AboutContent>
        )
    }
}
