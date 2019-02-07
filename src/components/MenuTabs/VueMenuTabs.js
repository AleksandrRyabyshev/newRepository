import React, { Component } from 'react';
import { StyleMenuDiv, StyleMenuButton } from '../../css/MenuTabs/menuTabs';

class VueMenuTabs extends React.Component {
    render(){
        const { titleTab, keyTab, contentTab, clickTab }= this.props
        return (
            <StyleMenuDiv>
                <StyleMenuButton key={keyTab} onClick={clickTab(contentTab)}> { titleTab }</StyleMenuButton>
            </StyleMenuDiv>
        )
    }
}

export default VueMenuTabs