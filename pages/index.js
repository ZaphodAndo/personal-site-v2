import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';
import theme from '../components/styles/theme';
import Info from '../components/Info';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 50px;
`;

export default class index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header></Header>
                    <Content>
                        <Info></Info>
                        <RecentPosts></RecentPosts>
                    </Content>
                    <Footer></Footer>
                </StyledPage>
            </ThemeProvider>
        )
    }
}