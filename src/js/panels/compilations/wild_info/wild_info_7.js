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
    CardScroll
} from "@vkontakte/vkui";

import { 
    Icon24ArticleOutline,
    Icon24CarOutline,
    Icon24ViewOutline
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/1be5ec967a5f625b/original/GettyImages-480928205.jpg?resize=1800px:1800px&quality=100",
                "https://incomartour.com.ua/mediafiles/images/places/20190521174936/thumbs/2%20(2)-tmb-1200x628xfill.jpg",
                "https://lh3.googleusercontent.com/proxy/X0_M08meSxEKSvuEsLuvOhRYj_U5oOv9Jv76L4Q4kxwwX47rWbpl1K4M1k83-JC683-Dv8rozUWvEpg72aao",
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
                    Гренландия
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

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Маршрут полярного круга — само название трека обещает приключения, суровую величественную природу и множество испытаний. Но тяготы пути растворяются в небывалой красоте окружающего: в Гренландии соседствуют пестрые цветы и громады айсбергов, диковинные ягоды и мерцающие льды. <p />
                            На маршруте можно увидеть северное сияние, а еще китов и тюленей. Ночевать вы можете в хижинах для походников, в палатках или просто под звездным небом. <p />
                            Главная особенность Маршрута полярного круга в его полной оторванности от цивилизации. Ни машин, ни людей, ни высоток — тот случай, когда выражение «наедине с природой» не фигуральное. <p />
                            <b>Если ищете неизведанные маршруты для трекинга в диких условиях, присмотритесь к Гренландии.</b>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Агорье Исуннгуа — еще одна гренландская идея для любителей походов в диких условиях. Ледники, тундра, талые озера и северные олени — декорации захватывающие, но условия не для новичков.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Королевский Копенгаген, завод «Лего», остров Фанё, замок Кронборг, родина Андерсена Оденсе, Ютландия, Фарерские острова.
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

export default connect(null, mapDispatchToProps)(TravelInfo);