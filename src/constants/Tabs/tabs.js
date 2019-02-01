import React, { Component } from 'react';
// Components
import AccordionTab from '../../components/Tabs/AccordionTab';
import SecondTab from '../../components/Tabs/SecondTab';
import ThirdTab from '../../components/Tabs/ThirdTab';

const keyTabs = {
    keyTab1: 'AccordionTab',
    keyTab2: 'SecondTab',
    keyTab3: 'ThirdTab',
};

export const titleAndKeyTabs = [
    { titleTab: 'Accordion', keyTab: keyTabs.keyTab1, contentTab: <AccordionTab/> },
    { titleTab: 'Tab2', keyTab: keyTabs.keyTab2, contentTab: <SecondTab/> },
    { titleTab: 'Tab3', keyTab: keyTabs.keyTab3, contentTab: <ThirdTab/> },
];
