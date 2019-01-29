import React, {Component} from 'react';
import flag_of_the_United_States from '../../image/Accordion/flag_of_the_United_States.jpeg';
import { AccTabDiv, AccTabP, AccTabImg, AccTabH3} from '../../css/Accordion/AccordionTabs/accTabs';

class FirstAccTab extends React.Component {
    render(){
        return (
            <AccTabDiv>
                <AccTabH3>Соединённые Штаты</AccTabH3>
                <AccTabImg src={flag_of_the_United_States}/>
                <AccTabP>
                    Соединённые Штаты  — государство в Северной Америке. Площадь — 9,5 млн км²(4-е место в мире).
                    Население — 327 млн человек (2018, оценка; 3-е место в мире). США имеют федеративную форму
                    устройства, административно делятся на 50 штатов и федеральный округ Колумбия; в их подчинении
                    также находится ряд островных территорий Пуэрто-Рико, Виргинские Острова, Гуам и другие)
                </AccTabP>
            </AccTabDiv>

        )
    }
}

export default FirstAccTab
