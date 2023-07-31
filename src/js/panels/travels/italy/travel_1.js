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
                "https://vestnik.icdc.ru/images/world/2019/2020-02-06-04.jpg",
                "https://vokrug-nas.ru/wp-content/uploads/2017/11/Fontan-Trevi.jpg",
                "https://planetofhotels.com/sites/default/files/ispanskaya_lestnica_restavraciya.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Рим — столица Италии, Вечный город, один из старейших городов мира и древняя столица Римской империи?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Рим
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_1')}
                            image={this.state.images[0]}
                            header="Колизей"
                            subtitle="Амфитеатр, памятник архитектуры Древнего Рима, наиболее известное и одно из самых грандиозных сооружений Древнего мира, сохранившихся до нашего времени."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_2')}
                            image={this.state.images[1]}
                            header="Фонтан Треви"
                            subtitle="Самый крупный фонтан Рима, вместе с фасадом здания, являющимся частью архитектурно-скульптурной композиции, имеет высоту 25,9 м и ширину 49,8 м."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_it_info_3')}
                            image={this.state.images[2]}
                            header="Испанская лестница"
                            subtitle="Парадная лестница в центре Рима, спускающаяся с вершины холма Пинчо и расположенной там церкви Тринита-деи-Монти к Испанской площади."
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
                            Рим — столица Италии, Вечный город, один из старейших городов мира и древняя столица Римской империи. Он из тех городов, в которых просто нельзя не побывать хотя бы раз в жизни. <p />
                            Рим расположен на западе центральной части так называемого «итальянского сапога» — Апеннинского полуострова, неподалеку от места, где река Тибр впадает в Тирренское море. Эта река делит город на две части. Исторический центр Рима стоит на семи холмах: Авентин, Капитолий, Целий, Палатин, Квиринал, Виминал, и Эсквилин, высота которых над уровнем моря колеблется от 13 до 139 метров. <p />
                            На территории Рима расположено два самостоятельных государственных образования — город-государство Ватикан, религиозное сердце христианской Европы на протяжении многих веков, и карликовое государство-анклав — Мальтийский орден. <p />
                            «Город на семи холмах и всей земли повелитель», как назвал Рим древний поэт, является родиной латинского языка, имевшего широкое хождение в массах в античную эпоху и сохранившегося в медицине до наших дней. Законодательство Римской империи послужило основой для создания современного западного права. <p />
                            Нынешний Рим — один из наиболее посещаемых городов мира благодаря огромному количеству исторических и архитектурных памятников различных эпох, его центр (в пределах стены Урбана VIII) — настоящий музей под открытым небом, он полностью входит в список Всемирного наследия ЮНЕСКО. Сквозь толщу веков Рим донёс до нас величие дворцов и соборов, мощь средневековых замков и серебряную музыку фонтанов эпохи барокко. В городе можно увидеть сотни палаццо, церквей, памятников археологии, садов и парков. Здесь расположены лучшие в мире музеи и художественные галереи, привлекающие ежегодно миллионы туристов со всех уголков света. Подробнее о римских достопримечательностях, небанальных, но интересных местах, магазинах и ресторанах — в нашем путеводителе по Вечному городу. <p />
                            Сегодня Рим является важнейшим транспортным узлом, финансовым, торговым и промышленным центром Италии. Промышленные комплексы занимают территории преимущественно на юге и востоке города, включая в себя предприятия таких отраслей, как электроника, книгоиздание, химическая индустрия, производство телефонов, текстиля и продуктов питания. Также город — признанная столица международной моды и национального кинематографа. <p />
                            В календаре Рима нет таких дат, когда бы его улицы не были заполнены туристами. Ни один путешественник не уедет из Вечного города разочарованным, чем бы он ни занимался — осматривал исторические памятники, посещал музеи, совершал покупки, дегустировал блюда итальянской кухни и прекрасные местные вина или просто наслаждался dolce vita. <p />
                            Каждый турист знает, что «все дороги ведут в Рим», и старается хотя бы однажды посетить этот город. Если вы никогда здесь не были — спешите за билетами! Тем же, кто уже успел увидеть Рим, и почувствовал потрясающую атмосферу этого города, здесь всегда найдётся что посмотреть, а возвращение в любимые места станет особенно приятным. <p />
                            Известный актёр Роберт-Де Ниро, сыгравший в одном из кинофильмов сицилийского мафиози дона Корлеоне, однажды сказал: «Италия давно уже изменилась. Но Рим — это Рим». Величие этого города невозможно описать словами, его просто нужно увидеть.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Попасть в Рим туристы могут разными способами — самолётом, поездом, автомобилем и даже паромом. <p />
                            <b>Самолет</b>
                            <p />
                            Добираться из России до Рима удобнее всего самолётами. <p />
                            Регулярное сообщение Москва — Рим осуществляется российскими перевозчиками «Аэрофлот», S7 Airlines, «Уральские авиалинии», лоукостером «Победа» и итальянской авиакомпанией AlItalia. Кроме того, из Москвы в Рим можно улететь с пересадкой в европейских городах рейсами Aegean Airlines, airBaltic, Air France, Brussels Airlines, Wizz Air. <p />
                            Прямые рейсы из Санкт-Петербурга в Рим выполняет «Аэрофлот», а со стыковками в Москве и крупных городах Европы  можно добраться самолётами «Аэрофлота», «Победы», «Уральских авиалиний», S7 Airlines, airBaltic, Air France, Air Moldova, Czech Airlines, Turkish Airlines, Wizz Air. <p />
                            Практически все рейсы прибывают в главный аэропорт Рима — Фьюмичино (L’aeroporto di Roma-Fiumicino). Он находится в 30 км юго-западнее центра города и имеет три терминала: Terminal, А, обслуживает как международные, так и местные авиалинии, Terminal В предназначен для приёма рейсов европейских лоукостеров, а в Terminal С прибывают только международные рейсы, в том числе и из России. Терминал С состоит из двух частей, между которыми курсирует мини-поезд. <p />
                            <b>Поезд</b>
                            <p />
                            Приехать в Рим можно и железнодорожным путём. <p />
                            Поезда из многих столиц Европы и из всех крупных городов Италии прибывают на вокзал Термини (Termini), являющийся одновременно и крупнейшим транспортным узлом города — здесь находится станция пересадки метро Термини (пересадка между линиями, А и В), остановки городских автобусов. Он обслуживает 600 000 пассажиров в день и является одним из крупнейших ж/д вокзалов в Европе. <p />
                            Кроме Термини в Риме есть ещё ряд железнодорожных станций: Остиенсе, Тибуртина, Трастевере, Тусколана, Сан-Пьетро, Фламинио. Поезд Leonardo Express из аэропорта Фьюмичино прибывает на вокзал Термини, поезда дальнего следования чаще всего останавливаются на вокзале Тибуртина. С вокзалов Тибуртина и Остиенсе в аэропорт отправляется электричка FL1. <p />
                            <b>Автобус</b>
                            <p />
                            Поскольку поезда в Европе — достаточно дорогой вид транспорта, в некоторых случаях альтернативой им и самолётам могут стать международные автобусы. <p />
                            Особо актуальными автобусы в Рим являются у жителей Украины и Польши. Из городов этих двух стран в столицу Италии курсируют автобусы компаний Eurolines, Eurores, RegioJet и т. д. <p />
                            Внутри Италии перевозки совершают вышеуказанные международные автобусные компании, а также местные перевозчики. 
                            Из аэропорта Фьюмичино автобусами можно уехать не только по области Лацио (рейсами компании Сotral), но и в другие города Италии — например, в Неаполь, Казерту и Флоренцию (автобусами Fiumicino Express). <p />
                            <b>Водный транспорт</b>
                            <p />
                            Зачастую туристы прибывают в Рим по воде, например, на круизных судах. <p />
                            Морскими воротами Рима является порт Чивитавеккья в 60 км северо-западнее итальянской столицы на берегу Тирренского моря. До порта можно добраться на электричке с вокзала Рима, время в пути чуть более часа. <p />
                            В порту швартуются круизные суда, также отсюда отправляются паромы на Сардинию, на Сицилию, в испанскую Барселону и в Тунис. Линии обслуживают паромные компании Grandi Navi Veloci, Grimaldi Lines и Tirrenia. <p />
                            Также в нескольких километрах к юго-востоку от Рима работает новый порт — Остия, куда из города за полчаса можно добраться на поезде и метро. <p />
                            <b>Автомобиль</b>
                            <p />
                            В Рим россияне могут попасть и на автомобиле. <p />
                            Такое путешествие будет интересным, но сложным, поскольку от Москвы до Рима — 3 047 км. Ехать придется через Белоруссию, Польшу, Чехию/Словакию и Австрию. <p />
                            Туристу понадобятся водительские права международного образца, техпаспорт и страховка на авто. <p />
                            В самом же Риме передвигаться на авто не рекомендуется: движение здесь хаотичное, дороги перегружены, парковки очень дорогие. Кроме того, есть ряд территорий, являющихся зоной ограниченного движения, куда въезд разрешен только по пропускам. <p />
                            Помните, что автобаны в Италии в большинстве своём платные, и поездки на машине из Рима в другие города страны часто могут выйти дороже, чем на региональных поездах.
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