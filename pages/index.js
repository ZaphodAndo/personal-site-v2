import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.red};
`;

export default class index extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header></Header>
                    <div>
                        hello world
                    </div>
                </StyledPage>
            </ThemeProvider>
        )
    }
}