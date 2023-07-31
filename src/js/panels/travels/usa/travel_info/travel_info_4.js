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
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rodeo_Drive%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg",
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
                    Родео-Драйв
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Родео-Драйв</Header>}> 
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
                            Rodeo Drive, Los Angeles, CA, United States
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Родео-Драйв входит в пятёрку наиболее дорогих и известных улиц мира. Улица расположена в самом центре Лос-Анджелеса и протягивается до Беверли-Хиллз. Особой популярностью пользуется только небольшой её участок в три квартала, расположенный между бульварами Уилшир и Санта-Моника. На этом участке находятся самые дорогие и модные бутики Лос-Анджелеса. Родео-Драйв пересекается не только с вышеупомянутыми бульварами, но и с Кресент-Драйв, образуя Золотой треугольник Лос-Анджелеса. Шоппинг в этом районе — одно удовольствие. Здесь можно найти дизайнерскую одежду от Giorgio Armani, Louis Vuitton, Dolce & Gabbana, Versace, Chanel, Gucci, Christian Dior, Burberry, Yves Saint-Laurent и других известных домов мод. <p />
                            Для посещения любого магазина на Родео-Драйв необходимо придерживаться повседневного, но утонченного дресс-кода. Если прийти, например, в пляжных шортах и футболке, во входе может быть отказано. На улице Родео-Драйв расположена одноименная клиника пластической хирургии, которая рассчитана в основном на состоятельных посетителей.
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