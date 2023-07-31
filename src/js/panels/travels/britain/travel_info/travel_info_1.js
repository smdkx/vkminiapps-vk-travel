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
    Link,
    Banner
} from "@vkontakte/vkui";

import { 
    Icon28PinOutline,
    Icon24PlaceOutline,
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://london-life.ru/uploads/posts/49/preview.webp",
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
                    Биг-Бен
                </PanelHeader>

                <Banner
                    before={<Icon28PinOutline />}
                    header="Важная информация"
                    subheader={
                    <React.Fragment>
                        Биг-Бен на реставрации! Завершение реставрационных работ намечено на 2021 год.
                    </React.Fragment>
                    }
                />
                
                <Group header={<Header mode="secondary">Биг-Бен</Header>}> 
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
                            Palace of Westminster, London, SW1A 2PW
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+442072193000">+44 20 7219 3000</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.parliament.uk">https://www.parliament.uk</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Биг-Бен — это 96 метровая башня с часами, расположенная в северо-восточной части Британского Парламента в Вестминстере. Достопримечательность включена в список Всемирного наследия ЮНЕСКО. Хотя фактическое название башни — Часовая башня, ее часто называют Биг-Бен, Большой Том или Башня Биг-Бен. Часовая башня является одним из самых узнаваемых сооружений в Лондоне и является его визитной карточкой, точно так же, как Эйфелева башня в Париже. С момента своего создания, в 1859 году, башня служила самым надежным часовым механизмом в Лондоне, а также была задействована в праздновании любого события государственного масштаба. Весь город сходится к башне, чтобы отпраздновать Новый год, а все радио и телевизионные станции сверяют время именно с Биг-Беном. Так же бой часов транслируется каждый год в День памяти жертв Первой и Второй мировой войны ровно в в одиннадцать часов одиннадцатого дня одиннадцатого месяца в знак наступившего мира. Колокол слышно на расстоянии до 12 километров. <p />
                            Биг-Беном зачастую ошибочно называют саму башню. На самом деле это прозвище носит колокол, а сама башня официально называется «Башней Елизаветы». Она была переименована в честь Бриллиантового юбилея Ее Величества Елизаветы II в. 2012 году. Башню с часами также ошибочно называют башней Святого Стефана. Тем не менее, последней фактически является небольшая башня во дворе Дворцового комплекса, которая служит главным пунктом входа для участников дебатов Палаты Лордов и Палаты Общин. В настоящее время Биг-Бен выглядит не очень эстетично, потому что в связи с реконструкцией он обтянут строительными лесами. Вестминстерский дворец закрыт от взора туристов только наполовину, небольшая реконструкция коснулась и его. Стоит отметить, что это совершенно не останавливает туристов. <p />
                            <b>Факты и цифры:</b> <p />
                            Высота: 96 метров; <br />
                            Площадь: 12 квадратных метров; <br />
                            Количество ступеней: 334; <br />
                            Количество использованного камня: 850 кубических метров; <br />
                            Количество использованных кирпичей: 2600 кубических метров; <br />
                            Число этажей: 11; <br />
                            Башня накренена к северо-западу на 8,66 дюйма.
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