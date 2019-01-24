import React, { Component } from 'react';
//import logo from '../logo.svg';
import VueTabs from '../components/VueTabs'
//import ConstantsTab from '../constants/ConstantsTab'
import styled from 'styled-components'
import '../App.css';

const StyleContentDiv = styled.div`
    margin: 0.5em 1em;
    color: blue;`

const titleAndContentTabs = [
  { titleTab: 'nameTab1', contentTab: 'contentText1' },
  { titleTab: 'nameTab2', contentTab: 'contentText2' },
  { titleTab: 'nameTab3', contentTab: 'contentText3' },
];

class Tabs extends Component {
  state = {
    itemTab: null,
  }

  clickTab = (contentTab) => () => {
    this.setState( {itemTab: contentTab})
  }

  render () {
    const { titleTab, contentTab, itemTab } = this.state

    return (
        <div>

          {titleAndContentTabs.map(( item, idx ) => (
              <VueTabs key={ idx } { ...item } clickTab={this.clickTab} />
          ))}
          <StyleContentDiv>{ itemTab ?  `${ itemTab }` : 'Пожалуйста, нажмите на Tab' }</StyleContentDiv>

        </div>
    )
  }
}

export default Tabs;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
