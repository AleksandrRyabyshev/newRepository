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
      isActive: false,
  };

  clickTab = (keyTab) => () => {
        this.setState( (state) => ({itemTab: keyTab, isActive: !state.isActive}), () => console.log(this.state.itemTab))
  };

  // clickTab = (keyTab) => () => {
  //     this.setState( {itemTab: keyTab}, () => console.log(this.state.itemTab))
  // };

  render () {
      const { itemTab, isActive } = this.state;
    return (
        <div>
            {titleAndKeyTabs.map(( item, idx ) => (
                <StyleButton key={ idx } { ...item } onClick={this.clickTab(item.keyTab)}> {item.titleTab} </StyleButton>
            ))}

            <StyleContentDiv>
                { isActive &&  (itemTab === 'AccordionTab') ? <AccordionTab/>
                : (itemTab === 'SecondTab') ? <SecondTab/>
                : (itemTab === 'ThirdTab') ? <ThirdTab/>
                : <AccordionTab/> }
            </StyleContentDiv>

            {/*<StyleContentDiv>*/}
                {/*{ isActive && <AccordionTab key={itemTab}/> }*/}
                {/*{ isActive && <SecondTab key={itemTab}/> }*/}
                {/*{ isActive && <ThirdTab key={itemTab}/> }*/}
            {/*</StyleContentDiv>*/}


        </div>
    )
  }
}

export default Tabs;



