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
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://fs.tonkosti.ru/a7/7m/a77mkfzcjew44soc4cw8gcccc.jpg",
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
                    Голливудская «Аллея славы»
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Голливудская «Аллея славы»</Header>}> 
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
                            Hollywood Blvd. and Vine St. Hollywood, Los Angeles
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.walkoffame.com">http://www.walkoffame.com</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Лос-Анджелес ассоциируется прежде всего с Голливудом, а Голливуд — со звёздами, так что нет ничего удивительного в том, что Аллея звёзд по праву считается самой популярной достопримечательностью города. Ежегодно более 10 миллионов туристов прогуливаются по Аллее звёзд, с восторгом и третепом читая имена кумиров, увековеченные в каменных плитах тротуара во славу индустрии развлечений. Как и положено любой достопримечательности «с именем», у Аллеи звёзд — длинная, разнообразная и весьма интересная история, продолжающая твориться и по сей день: новые «звёзды» закладываются здесь примерно дважды в месяц. <p />
                            Звезды на Аллее славы в Голливуде снабжены именем лауреата и эмблемой, показывающей, в какой из областей искусств человек, ее получивший, достиг успеха. Так, на табличке может быть изображение кинокамеры, телевизионного экрана, фонографа, микрофона, театральных масок. Самой первой табличкой, вмонтированной в аллею в 1960-м году, стала звезда Джоанн Вудвард, популярной актрисы из США, режиссера и продюсера, награжденной многими кинематографическими премиями. <p />
                            Вручение таблички со звездой инициирует менеджер или фан-клуб знаменитой личности путем подачи соответствующего заявления в Торговую палату Голливуда. Если решение палаты будет положительным, знаменитость обязана заплатить сумму в 25 тысяч долларов США — за установку, обслуживание и охрану мемориала. <p />
                            На аллее имеется несколько звезд, врученных не реальным людям, а компаниям или персонажам из индустрии кино, в частности имеется звезда Диснейленда и звезды мультипликационных героев — Симпсонов, Дональда Дака, Микки Мауса.
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