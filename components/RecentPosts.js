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
                <PostBlock></PostBlock>
                <PostBlock></PostBlock>
                <PostBlock></PostBlock>
                <PostBlock></PostBlock>
                <PostBlock></PostBlock>
                <PostBlock></PostBlock>
                <PostBlock></PostBlock> 
            </RecentContent>
        )
    }
}
