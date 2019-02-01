import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// Components
import AccordionTab from '../components/Tabs/AccordionTab';
//import SecondTab from '../components/Tabs/SecondTab';
//import ThirdTab from '../components/Tabs/ThirdTab';
// Constants
import { titleAndKeyTabs } from '../constants/Tabs/tabs';
// Css
import { StyleContentDiv, StyleButton } from '../css/App/appStyle';
import '../App.css';

class Tabs extends Component {
  state = {
      isActive: 'AccordionTab',
  };

    clickTab = (keyTab) => () => {
        this.setState({isActive: keyTab});
    }

  render () {
      const { isActive } = this.state;
      return (
            <div>
                {titleAndKeyTabs.map(( item, idx ) => (
                    <StyleButton key={ idx } { ...item }  onClick={this.clickTab(item.keyTab)}> {item.titleTab} </StyleButton>
                ))}

                <StyleContentDiv>
                    {titleAndKeyTabs.map(idx => (
                        <div key={idx.keyTab}> { isActive === idx.keyTab && idx.contentTab } </div>
                    ))}
                </StyleContentDiv>
            </div>
      )
  }
}

export default Tabs;



