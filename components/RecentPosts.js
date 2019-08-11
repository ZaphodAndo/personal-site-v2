import React, { Component } from 'react'
import styled from 'styled-components';
import theme from '../components/styles/theme';
import PostBlock from './PostBlock';

const RecentContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export default class RecentPosts extends Component {
    render() {
        return (
            <RecentContent theme={theme}>
                <h1>Recent Posts!</h1>
                <PostBlock href="/posts/07_08_2019/settingUpGit" title="Setting up Git!" desc="How to set up Git on your machine. 💻" tag="Git"></PostBlock>
                <PostBlock href="/posts/05_08_2019/originalMeme" title="An original meme and a blast from the past!" desc="Its an old meme sir but it still checks out." tag="Meme"></PostBlock>
                <PostBlock href="/posts/05_08_2019/welcomeToMySite" title="Welcome to my site!" desc="Something I will redesign hundred of times only to make two posts!" tag="Misc"></PostBlock>
            </RecentContent>
        )
    }
}
