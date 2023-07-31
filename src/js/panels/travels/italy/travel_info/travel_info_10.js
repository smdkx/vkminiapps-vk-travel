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
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://incomartour.com.ua/mediafiles/images/places/20170323161722/fiorence3.jpg",
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
                    Санта Мария дель Фьори
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Санта Мария дель Фьори</Header>}> 
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
                            Via della Canonica, 1
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Собор: 10:00–16:30; <p />
                            Купол: 08:30–19:00; <p />
                            Баптистерий: 08:15–10:15/11:15–19:30; <p />
                            Часовая башня: 08:15–19:00; <p />
                            Склеп Санта Репарата: 10:00–17:00; <p />
                            Музей: 09:00–19:00. <p />
                            Музей не работает по первым вторникам каждого месяца.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Стоимость комплексного билета: <p />
                            Взрослые: 18 евро; <p />
                            Дети от 6 до 11 лет: 15 евро; <p />
                            Дети до 6 лет: бесплатно (вход только через кассу); <p />
                            Инвалиды: бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390552302885">+39 055 2302885</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.operaduomo.firenze.it">http://www.operaduomo.firenze.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Базилика Санта Мария дель Фьори — главный кафедральный собор итальянского города Флоренции, поэтому его также называют Флорентийский собор или Дуомо. Собор посвящен покровительнице Флоренции, «Святой Марии с цветком», ведь столица региона Тосканы — Флоренция — в переводе с латыни означает «цветущая», а символом города является лилия. <p />
                            Огромный купол собора Санта Мария дель Фьори, который находится на площади Пьяцца дель Дуомо, виден со всего города и является одним из самых узнаваемых символов Флоренции. Полюбоваться на панораму Флоренции с собором можно, воспользовавшись круглосуточно действующей веб-камерой. Еще одна веб-камера, установленная на площади Дуомо, позволяет посмотреть на базилику вблизи. <p />
                            Великолепный Флорентийский Дуомо — третий по величине собор мира (после соборов Святого Петра в Ватикане и Святого Павла в Лондоне), а в момент окончания его строительства, в 1434 году, он был самым большим в Европе. <p />
                            <b>Размеры базилики: длина — 153 м, ширина — 90 м. В соборе может поместиться население целого города — 30 тыс. человек.</b> <p />
                            Собор, украшенный великолепными ажурными каменными кружевами, поражает своей красотой и богатой отделкой, его называют одним из прекраснейших храмов в мире.
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