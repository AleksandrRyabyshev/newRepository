import React, { Component } from 'react';
import renderHTML from 'react-render-html';
// Components
import VueMenuTabs from '../components/MenuTabs/VueMenuTabs';
import Tab from '../components/Tabs/Tab';
import AccordionTab from '../components/Tabs/constants/AccordionTab';
// Constants
import { titleAndKeyTabs } from '../constants/Tabs/tabs';
// Css
import '../App.css';

class Tabs extends Component {
  state = {
      itemContent: <AccordionTab/>,
  };

    clickTab = ( contentTab) => () => {
        this.setState({ itemContent: contentTab});
    };

  render () {
      const {  itemContent } = this.state;
      return (
            <div>
                {titleAndKeyTabs.map(( item, idx ) => (
                    <VueMenuTabs key={ idx } { ...item } clickTab={this.clickTab} />
                ))}

                <Tab items={ itemContent }/>
            </div>
      )
  }
}

export default Tabs;



