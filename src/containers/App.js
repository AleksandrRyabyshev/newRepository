import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// Components
import AccordionTab from '../components/Tabs/AccordionTab';
import SecondTab from '../components/Tabs/SecondTab';
import ThirdTab from '../components/Tabs/ThirdTab';
// Constants
import { titleAndKeyTabs } from '../constants/Tabs/tabs';
// Css
import { StyleContentDiv, StyleButton } from '../css/App/appStyle';
import '../App.css';

class Tabs extends Component {
  state = {
    itemTab: null,
  };

  clickTab = (keyTab) => () => {
    this.setState( {itemTab: keyTab}, () => console.log(this.state.itemTab))
  };

  render () {
    return (
        <div>
            {titleAndKeyTabs.map(( item, idx ) => (
                <StyleButton key={ idx } { ...item } onClick={this.clickTab(item.keyTab)}> {item.titleTab} </StyleButton>
            ))}

          <StyleContentDiv>
            { (this.state.itemTab === 'AccordionTab') ?
                <AccordionTab/> : (this.state.itemTab === 'SecondTab') ?
                <SecondTab/> : (this.state.itemTab === 'ThirdTab') ?
                <ThirdTab/> : <AccordionTab/> }
          </StyleContentDiv>

        </div>
    )
  }
}

export default Tabs;
