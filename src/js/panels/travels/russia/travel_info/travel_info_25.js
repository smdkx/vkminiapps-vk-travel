import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardGrid
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://images.spasibovsem.ru/catalog/original/salbykskij-kurgan-rossiya-respublika-hakasiya-otzyvy-1535909544.jpg",
            ],
        };
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Большой Салбыкский курган
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Большой Салбыкский курган</Header>}> 
                    <CardGrid size="l">
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        />
                    </CardGrid>
                </Group>

                <Group header={<Header mode="secondary">Адрес местонахождения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            д. Салбык, Респ. Хакасия, 655140
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Большой Салбыкский курган — руинированные остатки крупнейшего кургана бассейна Среднего Енисея, получил свое название по Салбыкской котловине. Он находится в Камызякской степи, в пяти километрах от автодороги Абакан — Сорск и примерно в 70 километрах от республиканского центра. Впервые Большой Салбыкский курган был описан в 1739 году российским учёным и путешественником Герардом Фридрихом Миллером во время «Первой академической экспедиции». Раскопали курган в 1954-56 гг. экспедицией института истории материальной культуры и Хакасского научно-исследовательского института языка, литературы и истории, под руководством С.В. Киселева. По подсчетам ученого, в глубокой древности, высота этой земляной пирамиды достигала 30 метров. К началу раскопок насыпь уже сильно омыло, но и в таком виде высота холма достигала 12 метров. 
                    </MiniInfoCell>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(TravelInfo);