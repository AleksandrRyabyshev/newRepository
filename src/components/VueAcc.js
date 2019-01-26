import React, {Component} from 'react';
import styled from "styled-components";

const StyleAcc = styled.button`
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

class VueAcc extends React.Component {
    render(){
        const { titleAcc, contentAcc, clickAcc }= this.props
        return (
            <StyleBlockDiv>
                <StyleAcc onClick={clickAcc(contentAcc)}> { titleAcc} </StyleAcc>
            </StyleBlockDiv>
        )
    }
}

export default VueAcc