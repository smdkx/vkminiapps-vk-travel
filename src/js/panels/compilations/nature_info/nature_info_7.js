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
                "https://content.skyscnr.com/m/1ce10d8c22dabcf2/original/Radon-springs-Lopukhinka-Unsplash.jpg?resize=1800px:1800px&quality=100",
                "https://4traveler.ru/sites/default/files/user_images/travel/St.pt/radon/DSC06439.jpg",
                "https://4traveler.ru/sites/default/files/user_images/travel/St.pt/radon/DSC06445.jpg",
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
                    Радоновые источники
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
                            Деревня Лопухинка, Ломоносовский район, Ленинградская область. 78 км от Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Подышать свежим воздухов среди чудесного леса
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Своим необычным цветом водоемы у деревни Лопухинки обязаны радону: это из-за него Лопухинские озера такие прозрачные и в них никто не водится. <p />
                            Местные воды издавна считаются целебными — раньше здесь даже была больница для моряков под руководством адмирала Фаддея Фаддеевича Беллинсгаузена и легендарного хирурга Николая Ивановича Пирогова. Сейчас в этом здании деревенская школа. <p />
                            Добраться до радоновых источников в Ленобласти можно на машине или на электричке: сначала до Cтарого Петергофа, потом на автобусе до Лопухинки. Какой бы способ вы ни выбрали, уже через минуту среди завораживающих пейзажей озера и каньона вы забудете о существовании автомобилей, поездов и пыльных дорог с пробками. <p />
                            <b>У радоновых источников в Лопухинке природоохранный статус, а значит, всем приезжающим сюда нужно быть осознаннее и ответственнее. Большое количество желающих погулять по берегам радоновых озер — серьезная нагрузка на природный комплекс.</b>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://ooptlo.ru/radonovyie-istochniki-i-ozera-u-derevni-lopuxinka.html">Официальный сайт памятника природы «Радоновые источники и озера у деревни Лопухинка»</Link>
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