import React, { Component } from 'react';
import { StyleTabDiv } from '../../css/Tabs/tab';

class Tab extends React.Component {
    render() {
        return (
            <StyleTabDiv>{ this.props.items }</StyleTabDiv>
        )
    }
}
export default Tab