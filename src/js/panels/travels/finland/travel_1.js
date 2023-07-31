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
    Div,
    Link
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
                "https://theplacement.ru/wp-content/uploads/2018/03/1-3.jpg",
                "https://fs.tonkosti.ru/6q/uf/6qufs1dq5sg8kwkoso888wsso.jpg",
                "https://fs.tonkosti.ru/at/mf/atmfw0nj4h4ogc80w8soc4ogo.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Хельсинки — столица Финляндии и ее главный город, занимающий площадь 715,48 кв. км на юге страны, в том числе и территории 315 островов вдоль побережья Финского залива?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Хельсинки
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fi_info_1')}
                            image={this.state.images[0]}
                            header="Сенатская площадь Хельсинки"
                            subtitle="Площадь в центральной части города Хельсинки в районе Круунунхака, «визитная карточка» города."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fi_info_2')}
                            image={this.state.images[1]}
                            header="Памятник Сибелиусу"
                            subtitle="Известнейший финский композитор и ключевая фигура всей европейской музыки — пользовался громадной популярностью ещё при жизни."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fi_info_3')}
                            image={this.state.images[2]}
                            header="Церковь в скале"
                            subtitle="Увенчанная обширным медным куполом, с воздуха она смотрится как огромная летающая тарелка, приземлившаяся на вершину скалы и наполовину в нее погрузившаяся."
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
                            Хельсинки — столица Финляндии и ее главный город, занимающий площадь 715,48 кв. км на юге страны, в том числе и территории 315 островов вдоль побережья Финского залива. Различают собственно город Хельсинки и Большой Хельсинки — столичный регион, в который входит и сам Хельсинки (с 643 272 жителями — данные на 2017 год), и его города-спутники Эспоо, Вантаа и Кауниайнен. Население Большого Хельсинки составило 1 299 541 человек. <p />
                            На территории Большого Хельсинки располагается 12 коммун, 30% площади города отведено под парки и открытые площади.
                            Сегодняшний Хельсинки — сосредоточение большей части головных предприятий и компаний страны, центр образования, культуры и науки в Финляндии. Город находится на развилке транспортных сетей Финляндии и является самым оживленным портом страны, но, не взирая на это, остается очень чистым городом.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Попасть в Хельсинки легко из любой точки мира благодаря удобному воздушному и наземному транспортному сообщению. Из Хельсинки же, заслуженно именуемого «воротами Европы», можно добраться в любой город и Финляндии, и любой другой европейской страны. Из России в Хельсинки можно добраться различными видами транспорта: автомобилем, автобусом (микроавтобусом), поездом или самолетом. <p />
                            <b>Самолет</b>
                            <p />
                            Ежедневные прямые рейсы из Москвы и Санкт-Петербурга в Хельсинки осуществляют авиакомпании «Аэрофлот», Finnair и Пулковские авиалинии. Продолжительность полета из Северной Столицы — около часа. Также до Хельсинки можно напрямую добраться из Екатеринбурга на крыльях финского перевозчика Finnair, который осуществляет три рейса в неделю из столицы Урала в столицу Финляндии. Из остальных регионов можно добраться до Хельсинки с пересадкой в Москве, Санкт-Петербурге и Екатеринбурге. <p />
                            <b>Водный транспорт</b>
                            <p />
                            Если вы хотите новых впечатлений, путешествие по Скандинавии на пароме — для вас. У такого вида отдыха есть множество достоинств. Во-первых, это экономия денег. Например, каюта на четверых стоит чуть больше 100 €, так что путешествовать так не только выгоднее, но и веселее. На палубе парома скучать не придется точно. На судне есть все: рестораны, бары, игровые автоматы, интернет-кафе, ТВ-зона и даже финская баня-сауна. Также не стоит обходить вниманием магазин беспошлинной торговли, где можно купить в дорогу бутылочку качественного и недорогого алкоголя. В Хельсинки на пароме можно попасть из Санкт-Петербурга. <p />
                            Еще один способ попасть в столицу Финляндии, ставший популярным в последние годы, — прибыть на собственной яхте или катере. Обычно частные суда швартуются в гостевом порту в Суоменлинне, но в случае, когда гости города желают стоять на якоре поближе к центру, можно остановиться в гостевому порту на мысе Катаянокка (Katajanokka) за Торговой площадью. Несколько мест для недолгой стоянки судна можно также найти на набережной Хаканиеменранта (Hakaniemenranta) и у береговой линии Торговой площади. <p />
                            <b>Поезд</b>
                            <p />
                            Многие туристы из России предпочитают добираться до Хельсинки на поезде. Из Москвы в Хельсинки ежедневно ходит один поезд — «Лев Толстой» NN32/31. Между Санкт-Петербургом и Хельсинки ранее курсирували два поезда — «Сибелиус» и «Репин», однако сейчас они заменены скоростным поездом «Аллегро». Таким образом, время в пути сократилось с шести до трех с половиной часов. <p />
                            <b>Автобус</b>
                            <p />
                            Добравшись до Санкт-Петербурга, можно заказать индивидуальный трансфер в Финляндию на автомобиле или микроавтобусе в одной из транспортных компаний. Такой услугой пользуются туристы, отправляющиеся на отдых небольшой компанией (в аквапарк, на рыбалку и т. д.), любители шоппинга, корпоративные клиенты или люди, которым необходим индивидуальный трансфер. <p />
                            В настоящий момент наиболее дешевым способом добраться из Санкт-Петербурга в Хельсинки является туристический автобус, совершающий шоп-туры. Проезд в обе стороны обойдется в 20–25 евро. <p />
                            Микроавтобусы, предлагающие услугу «от дома до дома», довезут туристов до Хельсинки дороже — за 25–35 евро в один конец. Но скорость такого транспортного средства больше, да и довезет оно непосредственно до дома. Правда, микроавтобусы также проходят границу в общей очереди. <p />
                            Между Хельсинки и Санкт-Петербургом также курсируют и рейсовые автобусы, преимущество которых в том, что ходят они точно по расписанию, границу же проходят вне очереди. Каждый пассажир несет ответственность за самого себя и свой багаж. Если на границе у пассажира возникают какие-либо проблемы с визой или с паспортом, автобус его не ждет. Цена билета на такой рейс в одну сторону — 35–40 евро. <p />
                            <b>Автомобиль</b>
                            <p />
                            Чтобы попасть из России в Хельсинки на автомобиле, нужно двигаться по трассе «Скандинавия» (Е18) через Торфяновку — Ваалимаа (Vaalimaa) до Хельсинки, что составит примерно 400 км из Санкт-Петербурга. <p />
                            Водитель должен иметь действительные водительские права международного образца со стажем вождения не менее года. На автомобиль необходимо оформить «Зеленую карту». Перед поездкой в Финляндию стоит ознакомиться с информацией, представленной на сайте <Link target="_blank" href="http://www.tiehallinto.fi/">Администрации Финских дорог</Link>. Тут может быть много полезных и актуальных сведений о состоянии финских дорог, имеются карты, прогнозы погоды на дорогах, работают web-камеры, можно получить информацию о плотности трафика и дорожных работах, о расстояниях между городами и населенными пунктами. Помните, что в Финляндии бензин несколько дороже, поэтому имеются ограничения на его ввоз.
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