import React, {Component} from 'react';
import styled from "styled-components";

const StyleButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
   &:hover {
    background: #DCDCDC;
  }`

const StyleBlockDiv = styled.div`
    display: inline-block;`

class VueTabs extends React.Component {
    render(){
        const { titleTab, contentTab, clickTab }= this.props
        return (
            <StyleBlockDiv>
                <StyleButton onClick={clickTab(contentTab)}> { titleTab }</StyleButton>
            </StyleBlockDiv>
        )
    }
}

export default VueTabs
