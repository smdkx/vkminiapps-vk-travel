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
                "https://incomartour.com.ua/mediafiles/images/places/20170329152733/thumbs/castellosforzesco8-tmb-1200x628xfill.jpg",
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
                    Замок Сфорца
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Замок Сфорца</Header>}> 
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
                            Piazza Castello, 20121
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Замок: ежедневно 07:00-19:30. <p />
                            Музеи: вторник-воскресенье 09:00-16:30, вход до 16:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход свободный
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390288463703">+39 (02) 88 46 37 03</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.milanocastello.it">http://www.milanocastello.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Замок Сфорца (или Сфорцеско) — одна из самых известных достопримечательностей Милана и настоящий символ города. Постройка существует уже семь веков. Она носит имя герцога Франческо Сфорца, чьей резиденцией он служил. В наше время замок представляет из себя архитектурный комплекс в историческом центре с большим садом и несколькими музеями, находящимися на его территории. <p />
                            <b>В начале XVI века, работами по украшению Замка Сфорцеско занимался сам Леонардо да Винчи.</b> <p />
                            За семь веков существования замка над его внешним и внутренним обликом успели поработать несколько известных скульпторов, архитекторов и художников. Вокруг него раскинулась площадь Piazza delle Armi, раньше служившая в качестве плаца. Также вокруг стен крепости в 1893 г. был разбит парк Семпионе, который до сих пор считается одним из главных парков Милана. В замке Сфорца и парке Семпионе часто можно встретить не только туристов, путешествующих по городу, но и местных жителей, которые также любят проводить здесь свое свободное время.
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