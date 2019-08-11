import React, { Component } from 'react'
import {TwitterFollowButton} from 'react-twitter-embed';
import styled from 'styled-components';
import theme from '../components/styles/theme';

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    margin-top: 50px;

    h1 {
        font-size: 3.6rem;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 0;
    }

    p {
        font-size: 1.3rem;
    }
`;

const Links = styled.div`
    display: flex;

    .follow {
        margin-left: 15px;
    }
`;

const Description = styled.div`
    display: flex;

    img {
        width: 180px;
        height: 180px;
        margin: 20px;

        @media screen and (max-width: 850px) {
            display: none;
        }
    }
`;

export default class Info extends Component {
    render() {
        return (
            <InfoContent theme={theme}>
                <div>
                    <h1>Hi, I'm Ethan 👋</h1>
                    <Description>
                        <p>I’m an apprentice applications developer who works for a company called PebblePad. I am mostly a Frontend dev that occasionally delves into a bit of backend and other areas especially at my place of work where I use a lot of C# and .NET alongside your usual frontend technologies such as JavaScript.</p>
                        <img src="../static/profilePic.jpg" alt="Profile picture"/>
                    </Description>
                    <Links>
                        <TwitterFollowButton
                            screenName={'Goebbels_Ando'}
                        />
                        <iframe className="follow" src="https://ghbtns.com/github-btn.html?user=MrGoebbels&type=follow&count=true" frameBorder="0" scrolling="0" width="150px" height="20px"></iframe>
                    </Links>
                </div>
            </InfoContent>
        )
    }
}
