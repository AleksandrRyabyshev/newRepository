import React, {Component} from 'react';
import { SecondTabTable, SecondTabTableTr, SecondTabTableTd, SecondTabTableAllTd} from '../../css/Tabs/SecondTab/secondTab.js';

class SecondTab extends React.Component {
    render(){
        return (
            <div>
                <SecondTabTable>
                    <SecondTabTableTr>
                        <SecondTabTableTd>Страна</SecondTabTableTd>
                        <SecondTabTableTd>Столица</SecondTabTableTd>
                    </SecondTabTableTr>
                    <tr>
                        <SecondTabTableAllTd>США</SecondTabTableAllTd>
                        <SecondTabTableAllTd>Вашингтон</SecondTabTableAllTd>
                    </tr>
                    <tr>
                        <SecondTabTableAllTd>Россия</SecondTabTableAllTd>
                        <SecondTabTableAllTd>Москва</SecondTabTableAllTd>
                    </tr>
                    <tr>
                        <SecondTabTableAllTd>Украина</SecondTabTableAllTd>
                        <SecondTabTableAllTd>Киев</SecondTabTableAllTd>
                    </tr>
                    <tr>
                        <SecondTabTableAllTd>Deutschland</SecondTabTableAllTd>
                        <SecondTabTableAllTd>Berlin</SecondTabTableAllTd>
                    </tr>
                </SecondTabTable>
            </div>
        )
    }
}

export default SecondTab