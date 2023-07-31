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
                "https://incomartour.com.ua/mediafiles/images/places/20170323161722/fiorence3.jpg",
                "https://www.onetwotrip.com/ru/blog/static/images/secrets-of-ponte-vecchio/river-arno-and-famous-bridge-ponte-vecchio.jpg",
                "https://allturizm.ru/wp-content/uploads/2019/10/galereya_yffici_vnytri_2.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Флоренция (по-итальянски Firenze) — итальянский город, столица региона Тоскана, расположенный на холмах по берегам реки Арно. Площадь Флоренции составляет 102,32 км2, в городе проживает 382 347 человек (по данным на 2017 год)?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Флоренция
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_10')}
                            image={this.state.images[0]}
                            header="Санта Мария дель Фьори"
                            subtitle="Кафедральный собор во Флоренции, самое знаменитое из архитектурных сооружений флорентийского кватроченто."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_11')}
                            image={this.state.images[1]}
                            header="Понте Веккьо"
                            subtitle="Мост во Флоренции, расположенный в самом узком месте реки Арно, почти напротив галереи Уффици."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_12')}
                            image={this.state.images[2]}
                            header="Галерея Уффици"
                            subtitle="Музей во Флоренции, один из наиболее старых музеев в Европе."
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
                            Флоренция (по-итальянски Firenze) — итальянский город, столица региона Тоскана, расположенный на холмах по берегам реки Арно. Площадь Флоренции составляет 102,32 км2, в городе проживает 382 347 человек (по данным на 2017 год). <p />
                            По количеству дошедших до нас историко-архитектурных памятников, обширных коллекций произведений искусства Флоренцию по праву считают городом — музеем и называют «Афинами Италии», достопримечательности Италии, расположенные во Флоренции, поражают воображение и очаровывают с первого взгляда. Данте, Макиавелли, Россини, Боттичелли, Микеланджело и Галилей — не счесть имен гениев, живших и творивших во Флоренции. Исторический центр Флоренции включен в список Всемирного наследия. <p />
                            До наших дней во Флоренции сохранилось много древних традиций. Одна из самых интересных — игра в футбол в средневековых костюмах в июне. Не менее колоритны «Скоппио дель карро» — фестиваль горящей повозки и фейерверков, «Праздник сверчка» в парке Кашине на Благовещенье, а также день Иоанна Крестителя — святого покровителя города, отмечаемый 24 июня. <p />
                            Флоренция сегодня — еще и одна из признанных модных столиц. Здесь каждый год проходят такие значительные для мира моды мероприятия, как выставки «Готовое платье», «Трикотаж» и «Галантерея». Нельзя не отметить и тот факт, что Флоренция является одним из популярных направлений так называемого «свадебного туризма» — что может быть романтичнее, чемь свадьба в Италии, да еще и в таком городе, как Флоренция?
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Добраться до Флоренции можно несколькими способами. Первый, самый распространенный и удобный — на самолете. <p />
                            <b>Самолет</b>
                            <p />
                            Прямого рейса до Флоренции из Москвы, как и из других городов России, нет. Есть вариант перелета авиакомпаниями «Аэрофлот» или «AlItalia» до Рима, а уже оттуда ехать поездом. <p />
                            От римского вокзала Термини поезда во Флоренцию отправляются каждый час. Самый быстрый способ — доехать на экспрессе: время в пути — 1,5 часа, цена билета — 21,95 евро. Дешевле обойдется передвижение на электричке (в пути четыре часа, билет стоит 14,30 евро). <p />
                            Можно добраться до Флоренции на самолете со стыковкой в том же Риме. Большинство самолетов со всех концов мира, летящих во Флоренцию, приземляются в международном аэропорту имени Америго Веспуччи, называемом еще Перетола (Peretola). Аэропорт расположен в 5 км к западу от города. <p />
                            Второй международный аэропорт, расположенный неподалеку от Флоренции, в городе Пиза (97 км западнее Флоренции) — аэропорт имени Галилео Галилея. Прибывшие туда пассажиры могут добраться до Флоренции поездом или автобусом. <p />
                            <b>Поезд</b>
                            <p />
                            Флоренция является основным железнодорожным узлом Тосканы. Главный железнодорожный вокзал города — Санта Мария Новелла (Stazione Santa Maria Novella), расположенный на одноименной площади — Piazza della Stazione. Он находится в десяти минутах ходьбы от Флорентийского Собора (Duomo) и в пятнадцати — от Piazza della Signoria и галереи Уффици. Неподалеку от вокзала, в районе улиц Via Faenza и Via Fiume, имеется масса бюджетных отелей. <p />
                            Добраться до Флоренции из Рима можно поездами Итальянской железной дороги, отправляющимися с вокзала Термини. Время в пути — от 1,2 часов на экспрессе до 3–4 часов на рейсовом поезде. От Венеции до Флоренции на поезде 3 часа езды, от Неаполя — 4 часа, от Милана — 2–3 часа, от Генуи — 3 часа. <p />
                            Кроме главного железнодорожного вокзала Санта Мария Новелла, во Флоренции имеется еще несколько станций, к примеру — Кампо ди Марте (Campo di Marte) на северо-востоке города, куда прибывают, в основном, пригородные электропоезда. <p />
                            <b>Автомобиль</b>
                            <p />
                            Многие туристы отправляются в Италию, и во Флоренцию в частности, на автомобиле. От Москвы до Флоренции им придется преодолеть около трех тысяч километров. Водителю необходимо иметь права и техпаспорт международного образца, а также страховку для машины («зеленую карту»). Флоренция связана скоростными автомобильными трассами со многими городами Италии. Скорее всего, туристы въедут в город по шоссе А1 (Autostrada del Sole), соединяющему Милан и Неаполь. <p />
                            Нужно помнить, что проезд частного автотранспорта по историческому центру Флоренции запрещен, поэтому машину необходимо будет оставить в гараже отеля или на стоянке. Парковка во Флоренции дорогая — минимум 3 евро в час, или же от 18 до 30 евро за весь день. Исключение составляют: автостоянка между Крепостью да Бассо (Fortezza da Basso) и вокзалом Санта Мария Новелла (1,55 евро в час, или 10 евро за ночь — при предъявлении документа, подтверждающего вашу остановку в отеле Флоренции минимум на 1 ночь), парковки на набережной и совершенно бесплатная стоянка на площади Микеланджело около обзорной площадки. С последней до центра Флоренции ходит общественный транспорт. Не стоит парковать автомобиль на улицах Флоренции на ночь, так как, вероятнее всего, машину отбуксируют на штрафстоянку и придется выплатить штраф. <p />
                            <b>Автобус</b>
                            <p />
                            Еще один способ добраться до Флоренции — на автобусе. Множество компаний осуществляют десятки автобусных маршрутов со всех концов Италии ежедневно. К примеру, автобус-экспресс от станции Tiburtina в Риме доставит пассажиров во Флоренцию за 4,5 часа. Центральный автовокзал Флоренции расположен рядом с железнодорожным вокзалом Санта Мария Новелла на улице Санта-Катерина-да-Сьена, (via Santa Caterina da Siena, 15). Дальние рейсы осуществляются компаниями SITA (до Сиены, Ареццо, Сан-Джиминьяно), Copit, CAP. Еще один перевозчик — фирма Lazzi, остановка ее автобусов расположена через дорогу от вокзала Санта-Мария-Новелла на Piazza Adua, 17. Этими автобусами можно уехать в Лукку, Пизу, Пистойю и другие соседние города.
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