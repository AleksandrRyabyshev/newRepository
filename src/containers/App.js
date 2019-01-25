import React, { Component } from 'react';
//import logo from '../logo.svg';
import VueTabs from '../components/VueTabs';
import VueAcc from '../components/VueAcc';
//import ConstantsTab from '../constants/ConstantsTab';
import styled from 'styled-components';
import '../App.css';


const StyleContentDiv = styled.div`
    margin: 0.5em 1em;
    color: blue;`

const accordionTabs = [
  { titleAcc: 'Acordion', contentAcc: 'contentAccordion contentAccordion contentAccordion contentAccordion contentAccordion'}
];

const titleAndContentTabs = [
  { titleTab: 'nameTab1', contentTab: 'contentText1' },
  { titleTab: 'nameTab2', contentTab: 'contentText2' },
  { titleTab: 'nameTab3', contentTab: 'contentText3' },
];

class Tabs extends Component {
  state = {
    isActive: false,
    itemIsActive: null,
    itemAcc: null,
    itemTab: null,
  };

  clickAcc = (state, contentAcc) => () => {
    this.setState({itemAcc: contentAcc});
    this.setState((state) => ({
      isActive: !state.isActive
    }));
    console.log(state.isActive);
  };

  // Это работало
  // clickAcc = (contentAcc) => () => {
  //     this.setState({itemAcc: contentAcc});
  //   };

  //*** Пример с конференции
  // state = {
  //     isActive: false,
  // }

  // handeleClick = () => {
      // this.setState((state) => ({
      // isActive: !state.isActive
    // }));
//}



  clickTab = (contentTab) => () => {
    this.setState( {itemTab: contentTab})
  };

  render () {
    const { state, titleAcc, contentAcc, itemAcc, isActive, itemIsActive, titleTab, contentTab, itemTab } = this.state;

    return (
        <div>
          {accordionTabs.map(( item, idx ) => (
              <VueAcc key={ idx } { ...item } clickAcc={this.clickAcc} />
          ))}

          {titleAndContentTabs.map(( item, idx ) => (
            <VueTabs key={ idx } { ...item } clickTab={this.clickTab} />
          ))}

          <StyleContentDiv>{ itemAcc }</StyleContentDiv>
          <StyleContentDiv>{ itemTab ?  `${ itemTab }` : 'Пожалуйста, нажмите на Tab' }</StyleContentDiv>
        </div>
    )
  }
}

export default Tabs;

//{ (itemAcc && itemIsActive) ?  `${itemAcc}` : '' }

/*{titleAndContentTabs.map(( item, idx ) => (*/
/*<VueTabs key={ idx } { ...item } clickTab={this.clickTab} />*/
/*))}*/

{/*<StyleContentDiv>{ itemTab ?  `${ itemTab }` : 'Пожалуйста, нажмите на Tab' }</StyleContentDiv>*/}