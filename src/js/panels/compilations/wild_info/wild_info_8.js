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
                "https://content.skyscnr.com/m/7e50b575104f1727/original/GettyImages-99438229.jpg?resize=1800px:1800px&quality=100",
                "https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63222968_3xl.jpg?impolicy=HomeHero",
                "https://www.aerotur.travel/assets/images/countries/armeniya/armeniya.jpg",
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
                    Армения
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
                            В Армении самой природой созданы идеальные условия для трекинга: на местных горных маршрутах всегда малолюдно и очень красиво. Величие природы не покидает даже в городе — из окон столичных высоток виден Арарат, а искупаться в горной речке или устроить пикник с шикарным видом легко в шаге от храма в Гарни и монастыря Гегард. <p />
                            Для тех, кто любит более серьезные походы, маршрут к вершине потухшего вулкана Аждаак, высшей точке Гегамского хребта. Несколько дней живописного путешествия — и вы любуетесь чистейшим озером и видом на горы Ара, Атис, Арагац и озеро Севан. <p />
                            <b>На горных маршрутах Армении всегда просторно и как будто легче дышится.</b>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Подъем на Арагац посложнее, но тоже доступен даже непрофессиональным альпинистам. У этой горы четыре вершины: выбирайте Северный Арагац, если не ищете легких путей, или Южный, если хочется трек поспокойнее. В любом случае сможете гордиться собой: Арагац самая высокая гора на территории Армении.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Сиднейская опера, хипстерский Мельбурн, Голубые горы в часе езды от Сиднея, Большой Барьерный риф, винодельни Аделаиды, пустыня Пиннаклс, музей тюрьмы Порт-Артура, серф-споты Золотого побережья.
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