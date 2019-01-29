import React, {Component} from 'react';
import flag_of_Russia from '../../image/Accordion/flag_of_Russia.svg.jpeg';
import { AccTabDiv, AccTabP, AccTabImg, AccTabH3} from '../../css/Accordion/AccordionTabs/accTabs';

class SecondAccTab extends React.Component {
    render(){
        return (
            <AccTabDiv>
                <AccTabH3>Росси́я</AccTabH3>
                <AccTabImg src={flag_of_Russia}/>
                <AccTabP>
                    Росси́я, официально также Росси́йская Федера́ция — государство в Восточной Европе и Северной Азии.
                    Территория России в рамках её конституционного устройства составляет 17 125 191 км²; население
                    страны (в пределах её заявленной территории) составляет 146 793 744 чел. (2019).
                </AccTabP>
            </AccTabDiv>
        )
    }
}

export default SecondAccTab