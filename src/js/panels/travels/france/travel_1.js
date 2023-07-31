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
                "https://slon.fr/wp-content/uploads/2020/07/393721-svetik.jpg",
                "https://paris-life.info/wp-content/uploads/2018/10/Kak-zai--ti-v-Luvr-byistro-i-bez-ocheredi.jpg",
                "https://incomartour.com.ua/mediafiles/images/places/20170606175127/thumbs/noterdampari3-tmb-1200x628xfill.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Париж — один из самых привлекательных для туристов городов в мире, каждый год Парижский регион посещает 45 миллионов туристов, 60% процентов которых — иностранцы?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Париж
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_1')}
                            image={this.state.images[0]}
                            header="Эйфелева башня"
                            subtitle="Металлическая башня в центре Парижа, самая узнаваемая его архитектурная достопримечательность."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_2')}
                            image={this.state.images[1]}
                            header="Лувр"
                            subtitle="Один из крупнейших и самый популярный художественный музей мира."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_3')}
                            image={this.state.images[2]}
                            header="Собор Парижской Богоматери"
                            subtitle="Католический храм в центре Парижа, один из символов французской столицы."
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
                            Париж — столица Франции и крупнейший город страны. Он расположен на реке Сена в северной части Франции, в центре региона Иль-де-Франс (также известного под названием «Парижский регион»). Границы самого города мало изменились с 1860 года, его население составляет 2 233 818 человек (по состоянию на 2010 год), так что прогулка по Парижу займет не так много времени, если сравнивать город с Лондоном или Римом. Однако в городском округе (Paris unité urbaine), где сам Париж составляет лишь центральную часть, проживает 10 142 977 человек (данные 2006 года). Парижская метрополия, или Парижская агломерация вместе с пригородами имеет население 12 672 000 человек и является одной из самых населенных метрополий в Европе. <p />
                            Важный населенный пункт возрастом более двух тысячелетий, Париж сегодня — один из ведущих деловых и культурных центров, а его влияние в политике, образовании, досуге, средствах массовой информации, моде, науке и искусстве придают ему статус одного из главных городов планеты. По данным 2005 года, Большой Париж с экономической точки зрения является крупнейшим городским регионом в Европе и занимает пятое место в списке ведущих городов мира по производству валового внутреннего продукта. Время в Париже центральноевропейское, то есть опережает Гринвич на один час и отстает от московского на два часа. <p />
                            Париж — один из самых привлекательных для туристов городов в мире, каждый год Парижский регион посещает 45 миллионов туристов, 60% процентов которых — иностранцы. Среди его достопримечательностей — знаменитые на весь мир места, заведения, популярные парки и даже просто улицы Парижа. Все эти места, их красота вкупе с богатой историей каждого квадратного метра делает отдых в Париже по-настоящему незабываемым. А наш путеводитель по Парижу поможет вам не заблудиться в этом городе.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <b>Самолет</b>
                            <p />
                            Самолет — наиболее удобный и логичный способ попасть в столицу Франции. Беспосадочные рейсы из Москвы в Париж осуществляют авиакомпании Air France, Transaero и Аэрофлот, из Санкт-Петербурга — Россия и опять же Air France. <p />
                            Кроме очевидного варианта добраться до Парижа из различных городов России со стыковкой в Москве или Санкт-Петербурге, есть другие способы: как из российской столицы, так и из регионов в столицу Франции летают различные европейские авиакомпании со стыковкой в своих аэропортах базирования. <p />
                            <b>Поезд</b>
                            <p />
                            Поездка из России в Париж и обратно на поезде по стоимости может быть сопоставима со стоимостью авиаперелёта, а иной раз и выйти дороже. Так, несколько раз в неделю (частота зависит от сезона) от Белорусского вокзала отправляется прямой поезд № 23. Время отправления — 8:42, прибытие в Париж — в 20:42 на следующие сутки. Время в пути составляет 39 часов. Поезд идет транзитом через Берлин. Обратный поезд № 24 отправляется в 8:28 и прибывает в Москву в 00:38. <p />
                            Также ежедневно с Белорусского вокзала в 8:00 в Париж отправляется скорый поезд с беспересадочным вагоном, который в Берлине цепляют к ночному поезду немецких железных дорог № 242/243 Берлин — Париж. При этом во время стыковки вагонов у пассажиров в Берлине появляется 12 часов свободного времени в направлении на Париж, и в обратном направлении — около 7 часов. <p />
                            Пользоваться железной дорогой всё же имеет смысл, если вы отправляетесь в Париж из какого-либо европейского города. Практически все европейские столицы связаны с Парижем железнодорожными экспрессами. <p />
                            <b>Автобус</b>
                            <p />
                            Поездка на автобусе — один из бюджетных способов добраться до Парижа, однако весьма затратный по времени. <p />
                            <b>Автомобиль</b>
                            <p />
                            Чтобы добраться от Москвы до Парижа на автомобиле, придётся преодолеть расстояние около 3000 км, при этом пересечь границы нескольких стран: Беларуси, Польши (или Чехии), Германии. Виза для автомобилистов оформляется точно так же, как и для других туристов. Кроме того, автотуристам понадобятся техпаспорт и водительские права международного образца, страховка для машины («зеленая карточка»), медицинский полис.
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