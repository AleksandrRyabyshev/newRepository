import React, {Component} from 'react';
import {AccH3} from '../../../css/Tabs/ThirdTab/thirdTab';

class ThirdTab extends React.Component {
    render(){
        return (
            <div>
                <AccH3> Ссылки </AccH3>
                <ul>
                    <li><a href={'https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D1%91%D0%BD%D0%BD%D1%8B%D0%B5_%D0%A8%D1%82%D0%B0%D1%82%D1%8B_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8'}>CША</a></li>
                    <li><a href={'https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F'}>Россия</a></li>
                    <li><a href={'https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F'}>Германия</a></li>
                </ul>
            </div>
        )
    }
}

export default ThirdTab