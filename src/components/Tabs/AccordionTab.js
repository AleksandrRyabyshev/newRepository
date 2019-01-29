import React, {Component} from 'react';
//Constants/Accordions
import FirstAccTab from "../../components/Accordion/FirstAccTab";
import SecondAccTab from "../../components/Accordion/SecondAccTab";
import ThirdAccTab from "../../components/Accordion/ThirdAccTab";
//Css
import  { StyleAccordionButton } from '../../css/Accordion/accordion.js';

class AccordionTab extends React.Component {
    state ={
        FirstAccTab: 'FirstAccTab',
        SecondAccTab: 'SecondAccTab',
        ThirdAccTab: 'ThirdAccTab',

        FirstAccTabActive: false,
        SecondAccTabActive: false,
        ThirdAccTabActive: false,
    };

    clickFirstAccTab = (FirstAccTab, FirstAccTabActive) => () => {
        this.setState((state) => ({ FirstAccTab: FirstAccTab, FirstAccTabActive: !state.FirstAccTabActive }))
    };

    clickSecondAccTab = (SecondAccTab, SecondAccTabActive) => () => {
        this.setState((state) => ({ SecondAccTab: SecondAccTab, SecondAccTabActive: !state.SecondAccTabActive }))
    };

    clickThirdAccTab = (ThirdAccTab, ThirdAccTabActive) => () => {
        this.setState((state) => ({ ThirdAccTab: ThirdAccTab, ThirdAccTabActive: !state.ThirdAccTabActive }))
    };

    render(){

        return (
            <div>
                <StyleAccordionButton onClick={this.clickFirstAccTab(this.state.FirstAccTab, this.state.FirstAccTabActive)}> Accordion#1 </StyleAccordionButton>
                <div>{ this.state.FirstAccTabActive && this.state.FirstAccTab  === 'FirstAccTab' ? <FirstAccTab/> : '' }</div>

                <StyleAccordionButton onClick={this.clickSecondAccTab(this.state.SecondAccTab, this.state.SecondAccTabActive)}> Accordion#2 </StyleAccordionButton>
                <div>{ this.state.SecondAccTabActive && this.state.SecondAccTab  === 'SecondAccTab' ? <SecondAccTab/> : '' }</div>

                <StyleAccordionButton onClick={this.clickThirdAccTab(this.state.ThirdAccTab, this.state.ThirdAccTabActive)}> Accordion#3 </StyleAccordionButton>
                <div>{ this.state.ThirdAccTabActive && this.state.ThirdAccTab  === 'ThirdAccTab' ? <ThirdAccTab/> : '' }</div>
            </div>
        )
    }
}

export default AccordionTab