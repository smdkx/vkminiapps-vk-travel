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
                "https://content.skyscnr.com/m/6751c681078c708a/original/Duderhof-Hills.jpg?resize=1800px:1800px&quality=100",
                "https://annawwts.com/wp-content/uploads/2019/10/IMG_0772.jpg",
                "https://cs10.pikabu.ru/post_img/big/2018/09/24/12/153782216116282410.jpg",
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
                    Дудергофские высоты
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
                            Поселок Можайский в Ломоносовском районе Ленобласти и Красносельский район Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Подняться на холмы ледникового происхождения в часе езды от идеально ровного Питера
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Дудергофские высоты, или Tuutarin mäet по-фински, — памятник природы из нескольких холмов, которые образовались еще в палеозое. Самая высокая точка гряды — 176-метровая Ореховая гора с Петровским родниковым источником — расположена на юго-западе Петербурга. Там же находится Воронья гора. А вот холм Кирхгоф уже входит в Ломоносовский район Ленинградской области. <p />
                            На склонах Дудергофских высот раскинулся полудикий Нагорный парк. Холмы защищают его от северных ветров, поэтому кое-где сохранились даже реликтовые заросли орешника. Сюда здорово приехать, когда хочется полюбоваться живописными просторами, уходящими за горизонт, и погулять среди старинных лип и 150-летних сосен, отключив звук на телефоне.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://oopt.spb.ru/protected_area/dudergofskiye-visoti/">Официальный сайт памятника природы «Дудергофские высоты»</Link>
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