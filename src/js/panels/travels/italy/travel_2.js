import React from 'react';
import {connect} from 'react-redux';

import {goBack, setPage} from "../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    CardScroll,
    ContentCard,
    Button,
    Div
} from "@vkontakte/vkui";

import { 
    Icon24ArticleOutline,
    Icon24PlaceOutline
} from '@vkontakte/icons';

import { ShareInfo, TextButton, ButtonLink } from '../../../components/settings';
import FooterInfo from '../../../components/footer';

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://www.architime.ru/specarch/filippo_calendario/2.jpg",
                "https://picsy.ru/images/photos/1200/1/sobor-svyatogo-marka-338503.jpg",
                "https://allturizm.ru/wp-content/uploads/2020/02/san_marko.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Венеция — исторический город на севере Италии, известный своими каналами, гондолами, палаццо, старинными храмами и музеями?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Венеция
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_4')}
                            image={this.state.images[0]}
                            header="Дворец Дожей"
                            subtitle="Великий памятник итальянской готической архитектуры, одна из главных достопримечательностей города."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_5')}
                            image={this.state.images[1]}
                            header="Собор Святого Марка (Сан Марко)"
                            subtitle="Кафедральный собор Венеции, представляющий собой редкий пример византийской архитектуры в Западной Европе."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_6')}
                            image={this.state.images[2]}
                            header="Площадь Сан Марко"
                            subtitle="Главная городская площадь Венеции, Италия. Логически состоит из двух частей: Пьяцетты — площадки от Гранд-канала до колокольни, и непосредственно Пьяццы."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                <Group header={<Header mode="secondary">Описание места</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Венеция — исторический город на севере Италии, известный своими каналами, гондолами, палаццо, старинными храмами и музеями. Это единственный в своем роде город, где нет автомобилей — их роль выполняет водный транспорт, и один из немногих, чьи линии бесконечно копируют. Венеции более 1500 лет, и все эти столетия она блистает на небосклоне мировых событий. <p />
                            Начиная со средних веков Венецию зовут «Королевой Адриатики». Благодаря мудрому управлению, островной городок сумел стать настолько влиятельным, что получил независимость, множество привилегий и почетный титул Светлейшей республики. Богатство и статус венецианских вельмож можно оценить и в наши дни, посетив один из дворцов-палаццо. <p />
                            Сделать это нужно непременно, эти дворцы на воде — «фирменный знак» Венеции. Многие из них датированы ранним средневековьем, эпохой Крестовых походов, или расцветом Ренессанса. В одних открыты музеи, в других — отели и рестораны. Эти свидетели блистательной эпохи востребованы и популярны и в наши дни. Лучше всего осмотреть их фасады получится «с воды» — прогулка на гондоле или вапоретто обеспечит фантастический вид. <p />
                            Пожалуй, это еще и самый романтичный город на свете. Сюда приезжают молодожены и влюбленные, чтобы признаться в своих чувствах. Присоединяйтесь к этим путешественникам, и вам также захочется рассказать о любви — к Венеции!
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Город на воде привлекает туристов со всего мира. Один из плюсов Венеции — удобная транспортная доступность, сюда можно добраться по воздуху, по суше и даже по воде. Что интересно, здесь востребованы абсолютно все варианты. <p />
                            <b>Самолет</b>
                            <p />
                            Путешественники из России зачастую выбирают самолет. Это быстро, удобно, практично и относительно недорого. Для большего комфорта вам на выбор предоставлены сразу два авиаузла — международный аэропорт Венеции «Марко Поло», и аэропорт Тревизо, расположенный всего в 20 километрах от «Королевы Адриатики». <p />
                            Прямые перелеты в Венецию есть из Москвы и Санкт-Петербурга. В пути проведете примерно 4 часа. <p />
                            Стоимость сильно отличается в зависимости от уровня авиаперевозчика, а также популярности туристического сезона. Билеты на период февральского карнавала нужно бронировать как можно раньше! <p />
                            Всем, кто готов долететь с пересадкой, предоставляется гораздо больше интересных вариантов. <p />
                            Международный аэропорт «Марко Поло» расположен в 12 км от центра Венеции. Чтобы добраться отсюда в город, можно воспользоваться автобусом и аэробусом — обратите внимание, они следуют только до площади Рима; доплыть на вапоретто, катерам «доступны» также центр города и ближайшие острова; доехать на такси, традиционном или водном.  <p />
                            <b>Поезд</b>
                            <p />
                            Не ищите на сайте Российских железных дорог рейсов в Венецию — таких нет. Однако, закоренелым романтикам можно составить длинное путешествие по Европе под стук колес. Удовольствие это не дешевое, и требующее пересадок в одной из европейских столиц, к примеру, в Берлине или Париже. <p />
                            Совсем другое дело — путешествие по Европе. Вы просто обязаны включить Венецию в свой маршрут, отдыхая на севере Италии, в Швейцарии или Австрии. <p />
                            Вариантов проезда множество — от недорогих электричек категории эконом, до современных скоростных поездов. <p />
                            <b>Автобус</b>
                            <p />
                            Еще одно длинное путешествие практически через всю Европу обеспечит автобус. Рейсов Москва — Венеция также не существует, вы можете добраться сюда с пересадкой, например, в Милане. Обратите внимание: международные автобусы следуют на стоянку острова Тронкетто. Добраться отсюда в город удобнее всего на вапоретто, буквально за полчаса катер доставит вас к площади Сан-Марко. <p />
                            <b>Автомобиль</b>
                            <p />
                            Интересная идея — автомобильное путешествие в Венецию. Расстояние между Москвой и Венецией составляет примерно 2500 километров, закладывайте на дорогу несколько дней, если хотите путешествовать с комфортом. Ваш путь пойдет через Беларусь, Польшу, Чехию и Австрию — страны, чрезвычайно богатые на достопримечательности. Венеция может стать конечным пунктом приключения — настоящей «вишенкой на торте»! <p />
                            <b>Водный транспорт</b>
                            <p />
                            Приехать в Венецию можно и более романтично — на морском лайнере или пароме. <p />
                            Регулярное водное сообщение налажено между Венецией и городами Италии, Греции, Хорватии. <p />
                            Морской порт Венеции, помимо грузовых судов, принимает роскошные лайнеры, пассажирские паромы и скоростные катера. Основной терминал называется Мариттима, расположен он очень удачно, в шаговой доступности от центра Венеции.
                    </MiniInfoCell>
                </Group>

                <Div>
                    <Button
                    onClick={this.openShare}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[0]}
                    </Button>

                    <Button
                    target='_blank' href={ButtonLink[0]}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[1]}
                    </Button>

                    <Button
                    target='_blank' href={ButtonLink[1]}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[2]}
                    </Button>
                </Div>

                <FooterInfo />
            
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack,
    setPage
};

export default connect(null, mapDispatchToProps)(Travel);