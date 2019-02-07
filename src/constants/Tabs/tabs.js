import React, { Component } from 'react';
// Components
import AccordionTab from '../../components/Tabs/constants/AccordionTab';
import SecondTab from '../../components/Tabs/constants/SecondTab';
import ThirdTab from '../../components/Tabs/constants/ThirdTab';

// const keyTabs = {
//     keyTab1: 'AccordionTab',
//     keyTab2: 'SecondTab',
//     keyTab3: 'ThirdTab',
// };
const contentTabs = {
    contentTab1: <AccordionTab/>,
    contentTab2: <SecondTab/>,
    contentTab3: <ThirdTab/>,
};

export const titleAndKeyTabs = [
    { titleTab: 'Accordion', keyTab: 'AccordionTab', contentTab: contentTabs.contentTab1 },
    { titleTab: 'Tab2', keyTab: 'SecondTab', contentTab: contentTabs.contentTab2 },
    { titleTab: 'Tab3', keyTab: 'ThirdTab', contentTab: contentTabs.contentTab3 },
];

