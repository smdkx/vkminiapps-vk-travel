import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    ContentCard,
    CardGrid
} from "@vkontakte/vkui";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    FAQ
                </PanelHeader>
                
                <CardGrid size="l" style={{ marginTop: "20px", marginBottom: "30px"}}>
                    <ContentCard
                    disabled
                    header="Что делает данный сервис?"
                    text="Благодаря данному сервису вы сможете подобрать себе место для летнего отдыха или путешествия. На вкладке «Путешествия» находятся подборки интересных мест. Надеемся, вы определитесь с выбором."
                    maxheight={200}
                    />

                    <ContentCard
                    disabled
                    header="Какие страны сейчас находятся в сервисе?"
                    text="Мы собрали более 10 идей для летнего отдыха или путешествия в России, Франции, Италии и других странах. Пожить в юрте на берегу озера, вдоволь накупаться в море, подышать свежим воздухом в горах или погулять по песчаным дюнам — вам будет из чего выбрать."
                    maxheight={200}
                    />

                    <ContentCard
                    disabled
                    header="Места для путешествий будут добавляться?"
                    text="Да, новые места будут дополняться во все страны и подборки."
                    maxheight={200}
                    />

                    <ContentCard
                    disabled
                    header="Тут можно посмотреть советы по путешествию?"
                    text="Да, в данном приложении можно узнать, что стоит взять с собой в путешествие, как его спланировать и не только!"
                    maxheight={200}
                    />
                </CardGrid>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);