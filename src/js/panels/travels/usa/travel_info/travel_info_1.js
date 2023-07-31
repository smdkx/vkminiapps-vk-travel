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
    CardGrid,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ClockOutline,
    Icon24MoneyCircleOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1200px-Statue_of_Liberty%2C_NY.jpg",
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
                    Статуя Свободы
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Статуя Свободы</Header>}> 
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
                            Liberty Island
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Время посещения Острова Свободы и Эллис Айленд — с 9:30 до 16:30 (с удлинением графика в летние месяцы)
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Трансфер на пароме до острова Свободы: взрослым и детям от 13 лет — 19,25 $, для пожилых (от 62 лет) — 14 $, детям 4–12 лет — 9 $, детям до 4 лет — бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.nps.gov">http://www.nps.gov</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Самый узнаваемый во всем мире символ Нью-Йорка и Соединенных Штатов — монументальная статуя Свободы. Полное название скульптуры — «Свобода, озаряющая мир» (англ. — Liberty Enlightening the World). <p />
                            Статуя возвышается в Нью-Йоркской бухте, на острове Свободы, расположенном в 3 км от южного берега всегда оживленного Манхэттена. В честь статуи бывший остров Бедлоу в народе стали называть еще в начале XIX века, официально его переименовали в 1956 году. <p />
                            Скульптурный образ богини Свободы глубоко символичен. Надпись на скрижали, которую держит Свобода в левой руке: «JULY IV MDCCLXXVI» — «4 июля 1776 года» — официальная дата принятия Декларации независимости США. Одной ногой богиня стоит на разбитых оковах. Корона Свободы имеет семь лучей — это количество перекликается с числом континентов и морей (по семь — согласно западной географической традиции). <p />
                            Монументы-копии статуи Свободы Бартольди сейчас можно обнаружить в разных странах мира. Наиболее известные из них находятся в Париже, Токио и Лас-Вегасе.
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