import React, {Component} from 'react';
import flag_of_Germany from '../../image/Accordion/flag_of_Germany.jpeg';
import { AccTabDiv, AccTabP, AccTabImg, AccTabH3} from '../../css/Accordion/AccordionTabs/accTabs';

class ThirdAccTab extends React.Component {
    render(){
        return (
            <AccTabDiv>
                <AccTabH3>Герма́ния</AccTabH3>
                <AccTabImg src={flag_of_Germany}/>
                <AccTabP>
                    Герма́ния (нем. Deutschland), официальное название — Федерати́вная Респу́блика Герма́ния (нем.
                    Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе.
                    Площадь территории — 357 408,74 км². Численность населения на 31 декабря 2015 года
                    — 82 175 684 жителей. Занимает 17-е место в мире по численности населения (2-е в Европе)
                    и 62-е по территории.
                </AccTabP>
            </AccTabDiv>
        )
    }
}

export default ThirdAccTab