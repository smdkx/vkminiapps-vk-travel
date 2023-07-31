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
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://www.fabrika.travel/files/lions/20.jpg",
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
                    Капитолий
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Капитолий</Header>}> 
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
                            First St SE, Washington, DC 20004
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+12022268000">+1 202-226-8000</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.hel.fi">https://www.hel.fi</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вашингтон сегодня — это главный политический центр Америки. Именно в этом городе разместились основные представительства судебной, исполнительной и законодательной ветвей власти, 174 иностранных посольства, штаб-квартиры крупнейших банков и валютных фондов, а главное — президентская резиденция, или Белый дом. Самим Вашингтоном управляет мэр, однако высшим органом власти является Конгресс, который может вносить поправки в утвержденные муниципальным советом законы и осуществлять контроль над администрированием города. Здание заседания Конгресса — Капитолий — находится в самом сердце столицы США и является одной из главных достопримечательностей Америки. Можно сказать, что Капитолий в Вашингтоне — это достойный памятник на почетном пьедестале. <p />
                            <b>Капитолий — одно из самых высоких зданий в городе. Его высота составляет 88 м. С верхнего этажа, куда можно добраться на лифте, открывается потрясающая вашингтонская панорама.</b> <p />
                            Белоснежный Капитолий расположился на одноименном холме, который, в свою очередь, был назван в честь одной из семи древнеримских возвышенностей. История создания Капитолия довольно впечатляющая. Эту обитель представителей городской власти строило не одно поколение архитекторов, каждый из которых сталкивался, казалось, с непреодолимыми трудностями.
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