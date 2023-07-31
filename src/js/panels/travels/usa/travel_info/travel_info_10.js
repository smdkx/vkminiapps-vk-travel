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
                "https://img.tourister.ru/files/2/5/1/8/5/5/5/3/clones/870_490_fixedwidth.jpg",
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
                    Уиллис-тауэр
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Уиллис-тауэр</Header>}> 
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
                            233 S Wacker Dr, Chicago, IL 60606, США
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С марта по сентябрь с 9:00 до 22:00; <p />
                            С октября по февраль с 10:00 до 20:00, по субботам с 09:30 утра до 21:00. <p />
                            Последняя запись за 30 минут до закрытия.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослые (от 12 лет) — 26-30 $, дети от 3 до 11 лет — 14-18 $, дети до 3 лет — бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+13128759447">+1 312-875-9447</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://theskydeck.com">https://theskydeck.com</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Уиллис-тауэр (Willis Tower, бывш. Сирс-тауэр) — главное офисное здание в Чикаго, в котором сосредоточено более 100 разных компаний. Но всемирную известность сооружение приобрело по другой причине — с 1973 года до 1999 считалось самым высоким небоскрёбом в мире. В настоящее время 442,1-метровое сооружение (без учёта телевизионной антенны) сместилось на 24-ю позицию. В Западном полушарии уступает только Башне Свободы, Central Park Tower в Нью-Йорке и Си-Эн тауэр в Канаде. Впрочем, на туристическом потоке такие изменения ничуть не отразились — ежегодно Уиллис-тауэр посещает 1,7 миллиона человек. <p />
                            <b>Уиллис-тауэр — это не только важный туристический объект, но ещё и своего рода архитектурный шедевр, спроектированный американским инженером Фазлуром Ханом. При строительстве сооружения использовался инновационный в то время метод.</b> <p />
                            Особенность конструкции заключалась в использовании «связанных труб»: девять «труб» образуют квадратное основание и поднимаются до 50-го этажа. 66-го этажа достигают уже семь труб, самого верхнего 110-го — только две. Эта система впоследствии нашла отражение в строительстве многих небоскрёбов, в том числе и самого высокого в мире здания Бурдж-Халифа в ОАЭ. <p />
                            В феврале 1982 года к сооружению были добавлены две телевизионные антенны, что увеличило его общую высоту до 520,3 метра. Западная антенна в июне 2000 года «выросла», и общая высота здания составила 527 метров. <p />
                            Ещё одно важное событие произошло в 2009 году: чикагский небоскрёб получил своё текущее название. До этого был известен как Сирс-Тауэр — в честь первого крупного арендатора. Жителям Города ветров изменение не понравилось. Против выступил и известный журнал Time. Тем не менее, текущее название будет действительно до 2024 года.
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