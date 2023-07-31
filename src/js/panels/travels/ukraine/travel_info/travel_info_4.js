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
                "https://img.tourister.ru/files/1/8/4/0/3/7/0/0/original.jpg",
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
                    Одесский зоопарк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Одесский зоопарк</Header>}> 
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
                            ул. Новощепной Ряд, 25, Одесса, Украина, 65000
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Лето: 9:00 - 19:00 <p />
                            Зима: 9:00 - 17:00 <p />
                            Без выходных
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Разовое посещение: 50 грн — детский билет, 70 грн — взрослый.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:380487225589">+380-48-722-55-89</Link> <p />
                            <Link target="_blank" href="tel:380482326230">+380-482-326-230</Link> <p />
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://zoo.ua">http://zoo.ua</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Мысль открыть зоопарк в Одессе пришла в голову градоначальникам еще в 1880-е годы. Однако дальше бумажной волокиты дело не зашло. Грандиозные планы стали воплощаться лишь в начале XX века, но и им помешала Первая мировая война. Строительство продолжилось в 1922 году, но и здесь его постигла неудача — закончились средства. <p />
                            Только в 1938 году удалось открыть долгожданный стационарный зоопарк на месте уничтоженного большевиками кладбища (сейчас здесь находится Преображенский парк). Руководство Генриха Бейзерта уберегло зоопарк в годы военного лихолетья, ему удалось сохранить всех имеющихся на тот момент животных. В 1920-е годы зоопарк заполучил статус заповедника, что автоматически причислило его к украинскому природно-заповедному фонду. Зоопарк награжден всевозможными премиями и дипломами. <p />
                            На данный момент Одесский зоопарк — одно из самых притягательных мест для туристов и местных жителей. <p />
                            <b>На территории в 5,9 га нашли свой дом животные со всех концов света — более двухсот видов.</b>
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