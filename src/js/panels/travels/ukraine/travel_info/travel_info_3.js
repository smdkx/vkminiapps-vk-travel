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
                "https://img.tourister.ru/files/2/1/1/5/6/5/3/7/original.jpg",
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
                    Крещатик
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Крещатик</Header>}> 
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
                            ул. Крещатик, Печерский и Шевченковский район, Киев, Украина, 02000
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Крещатик, соединяющий Бессарабский рынок с Европейской площадью, является главной улицей и одним из символов Киева. В ее границах тесно переплетается политическая, культурная, торговая и развлекательная жизнь города. По выходным и праздничным дням территория превращается в пешеходную зону. <p />
                            Центральная улица украинской столицы всегда находится в круговороте тех или иных событий. Гости Киева включают ее в список обязательных для посещения мест города. Здесь расположено много государственных учреждений, магазинов, кафе и развлекательных заведений, а также — самые популярные отели, в число которых входят известные с советских времен: «Украина» (бывшая «Москва»), «Крещатик» и «Днепр».
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