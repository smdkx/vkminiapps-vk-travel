import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardScroll,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24CarOutline,
    Icon24ArticleOutline,
    Icon24LinkCircle
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class NatureInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/79320fd6bb669c42/original/Okhta-park-Leningrad-region.JPG?resize=1800px:1800px&quality=100",
                "https://piteronline.tv/images/2019/11/27/18677_64c07.jpg",
                "https://kudago.com/media/images/place/81/cf/81cfe3c93dbd4f6ae13a31b9cd5c812a.jpg",
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
                    Всесезонный курорт «Охта Парк»
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Фотографии</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[1]] })}
                        image={this.state.images[1]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[2]] })}
                        image={this.state.images[2]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                <Group header={<Header mode="secondary">Где располагается</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            ул. Людмилы Кедриной, деревня Мистолово, Всеволжский район, Ленобласть. 35 км от центра Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Активно отдохнуть на природе или полежать в ванне под открытым небом
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Загородный курорт «Охта Парк» расположен в лесопарковой зоне всего в 10 км от северных окраин Петербурга. На территории — большой коттеджный поселок, бассейны на свежем воздухе, банно-оздоровительный комплекс и ресторан. <p />
                            Зимой в «Охта Парке» открыты десять горнолыжных трасс различного уровня сложности, экстремальный сноупарк, лесной каток и аттракцион «Дикие ватрушки». Летом работают веревочный парк, детский парк развлечений и водный аттракцион «Реактивные аквагорки». Взять напрокат спортивный инвентарь в «Охта Парке» можно круглый год. <p />
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.ohtapark.ru/">Официальный сайт «Охта Парка»</Link>
                    </MiniInfoCell>
                </Group>

                <FooterInfo />

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(NatureInfo);