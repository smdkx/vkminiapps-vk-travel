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
                "https://content.skyscnr.com/m/17803188e1adda3e/original/Zubrovnik-Leningrad-region.jpeg?resize=1800px:1800px&quality=100",
                "https://www.bus4u.ru/uploads/img/26391668.jpg",
                "http://zubrovnik.ru/Content/UserImages/newcontent/ttSzSe1JEGU.jpg",
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
                    Парк «Зубровник»
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
                            15 минут от ТЦ Мега Парнас, пос. Рапполово / Токсово, Ленинградская область. 38 км от Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С детьми — полюбоваться мохнатыми зубробизонами и покататься на лошадках
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            «Зубровник» в Токсово, открытый еще в 1979 году, — до сих пор любимое место для семейного и экологического туризма в Ленобласти. Сюда приезжают взглянуть на огромных зубробизонов и покормить хорошеньких обитателей мини-фермы. <p />
                            Еще в «Зубровнике» есть зона для пикников и конный клуб. Гости могут прокатиться на лошадях, квадроциклах или снегоходах, сразиться в пейнтбол и пострелять в тире. Для малышей оборудованы игровая площадка и веревочный городок. По праздникам в парке проводят интерактивные мероприятия и мастер-классы. <p />
                            Если нет машины, до «Зубровника» легко доехать на общественном транспорте. От Финляндского вокзала или ж/д станции «Девяткино» до станции «Токсово» электричка довезет вас за 20 минут. Дальше либо на автобусе №419, либо на такси. От метро «Проспект Просвещения» до парка ходят маршрутки №205, в пути 45 минут. На маршрутках №413 и №674 от метро «Парнас» или на №619 от «Девяткино» доедете быстрее: за полчаса. Вход в «Зубровник» бесплатный.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://zubrovnik.ru/">Официальный сайт «Зубровника»</Link>
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