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
    Link,
    Banner
} from "@vkontakte/vkui";

import { 
    Icon28PinOutline,
    Icon24PlaceOutline,
    Icon24ClockOutline,
    Icon24MoneyCircleOutline,
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://peterburg2.ru/uploads/19/05/15/ga11_1-29_0.jpg",
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
                    Выборгский замок
                </PanelHeader>

                <Banner
                    before={<Icon28PinOutline />}
                    header="Важная информация"
                    subheader={
                    <React.Fragment>
                        Башня Святого Олафа - закрыта на реставрацию.
                    </React.Fragment>
                    }
                />
                
                <Group header={<Header mode="secondary">Выборгский замок</Header>}> 
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
                            Замковый остров, 1, Выборг, Ленинградская обл., 188800
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Музей ждет гостей с 10 до 18, выходной — понедельник. <p />
                            Касса музея работает  с 9.50 до 17.15 <p />
                            Научная библиотека работает с 10 до 18 часов. <p />
                            Вход на Замковый остров открыт ежедневно с 9 до 21 часов.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход на Замковый остров бесплатный для всех посетителей. Территория замка открыта каждый день с 9 до 19 часов, кроме дней проведения массовых мероприятий. Музейные экспозиции, выставки открыты для посещения с 10 до 18 часов. Кассы замка работают ежедневно с 9:50 до 17:15.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:88129801293">8 812 980 1293</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://vyborgmuseum.org/">http://vyborgmuseum.org/</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Выборг можно назвать самым «западноевропейским» городом России, его старинные башни и улочки напоминают Ригу и Таллин.  Выборгский замок — это единственная в России средневековая крепость, достаточно хорошо сохранившаяся. <p />
                            С 1960 года в Выборгском замке работает музей, где каждый найдет интересную для него экспозицию. Для детей будут особенно интересны театрализованные экскурсии в сопровождении сказочных персонажей. <p />
                            Обязательным пунктом программы всех туристов, осматривающих достопримечательности Выборга, является подъем на обзорную площадку. Подъем по лестнице несколько утомителен, особенно для пожилых людей, но Вы будете вознаграждены потрясающим видом на Старый город, его окрестности, Выборгский залив, прекрасные и суровые леса Карельского перешейка. <p />
                            Существует легенда, что со смотровой площадки можно увидеть Финляндию, хотя, надо заметить, что это вряд ли возможно, поскольку до границы с этой страной — не менее 30 км.
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