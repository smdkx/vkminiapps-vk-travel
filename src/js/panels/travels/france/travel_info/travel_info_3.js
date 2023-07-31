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
                "https://incomartour.com.ua/mediafiles/images/places/20170606175127/thumbs/noterdampari3-tmb-1200x628xfill.jpg",
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
                    Собор Парижской Богоматери
                </PanelHeader>

                <Banner
                    before={<Icon28PinOutline />}
                    header="Важная информация"
                    subheader={
                    <React.Fragment>
                        В апреле 2019 года произошел пожар, в результате которого был разрушен шпиль, сгорел деревянный каркас кровли, а само здание сильно пострадало. На данный момент в соборе ведутся восстановительные работы, из-за чего доступ внутрь для посетителей закрыт.
                    </React.Fragment>
                    }
                />
                
                <Group header={<Header mode="secondary">Собор Парижской Богоматери</Header>}> 
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
                            6, Place du Parvis Notre Dame
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в собор закрыт.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+330142345610">+33 (0) 1 42 34 56 10</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.notredamedeparis.fr">http://www.notredamedeparis.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Собор Парижской Богоматери, или Нотр-Дам де Пари, является одним из символов Парижа и шедевром готической архитектуры в мировом масштабе. Он окутан вековыми тайнами и легендами, пережил разруху и возродился вновь. Несмотря на то, что здесь находится Парижская архиепархия, сам религиозный объект относится к государственной собственности. Католической же церкви дано право безвозмездного и бессрочного пользования. <p />
                            Кафедральный собор возвышается над одним из островов Сены — Сите, расположенном в самом сердце французской столицы. Вокруг культового сооружения разворачиваются главные события во многих художественных произведениях. Самым знаменитым является исторический роман Виктора Гюго «Собор Парижской Богоматери», вышедший в свет в 1831 году и ставший мировым бестселлером. По его мотивам сняты фильмы, созданы оперы, поставлен балет и мюзикл. Кроме того, Нотр-Дам де Пари посвящены документальные фильмы, о нем в той или иной степени упоминается в художественных кинолентах и мультфильмах, песнях, крылатых фразах и даже компьютерных играх.
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