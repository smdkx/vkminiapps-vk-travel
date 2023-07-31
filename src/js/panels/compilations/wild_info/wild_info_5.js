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
                "https://content.skyscnr.com/m/684f44a47fafa002/original/GettyImages-162999093.jpg?resize=1800px:1800px&quality=100",
                "https://vislandii.ru/images/guide/laugavegur-trail-iceland/laugavegur_00.JPG",
                "https://tripmydream.cc/travelhub/travel/block_gallery/90/802/default_90802.jpg?",
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
                    Лёйгавегюр
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
                            Исландия из тех редких стран, достопримечательности которой сплошь природные. Да какие! Тут и черные скалы, и лавовые поля, и ледяные пещеры, и геотермальные источники, и ошеломляющие своей мощью водопады. Кажется, здесь можно не искать, куда поехать на природу: вся Исландия — это дикая стихия и нетронутые красоты. <p />
                            <b>Термальные источники и гейзеры — визитная карточка Исландии. Мощь стихии во всем своем величии!</b> <p />
                            Предельной концентрацией природных чудес можно насладиться на маршруте Лёйгавегюр. Трек из самых популярных в стране, но известность не делает его менее особенным. Горячие источники местности Ландманналаугар, черные пески и разноцветные горы, прогулка меж двух ледников и ночевки в палатках или колоритных хижинах — все это даже звучит космически!
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Долина Ландманналаугар служит отправной точкой для маршрута Лёйгавегюр, но и сама по себе достойна подробного изучения. Идеальный план единения с природой здесь — всласть нагуляться по горам, а после отмокать в горячих источниках. <p />
                            Маршрут для любителей экстрима — восхождение на пик Хваннадальсхнукюр, высшую точку острова. Он расположен на западном краю кальдеры вулкана Эрайвайёкюдль: если не вскарабкаетесь на вершину, но запомните названия этих гор, уже можете собой гордиться.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Горячие источники озера Миватн, водопады Скоугафосс, Сельяландсфосс и Деттифосс, столичный Рейкьявик, «отец» всех гейзеров Гейсир, айсберги в лагуне Йёкюльсаурлоун, северное сияние.
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