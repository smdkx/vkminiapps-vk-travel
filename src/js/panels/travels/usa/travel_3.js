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
                "https://cdn24.img.ria.ru/images/07e4/0c/03/1587547637_0:275:3072:2003_1920x0_80_0_0_3f188b869354d747ae1339bdd79168c9.jpg",
                "https://img.tourister.ru/files/2/5/1/5/1/1/7/5/clones/870_653_fixedwidth.jpg",
                "https://www.fabrika.travel/files/lions/20.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Вашингтон является столицей США. Город был назван именем Джорджа Вашингтона, ставшего первым президентом страны, и который стал его основателем?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Вашингтон
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_7')}
                            image={this.state.images[0]}
                            header="Белый дом"
                            subtitle="Официальная резиденция президента США, расположенная в Вашингтоне."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_8')}
                            image={this.state.images[1]}
                            header="Международный музей шпионажа"
                            subtitle="Первый в мире музей, посвящённый шпионской деятельности, который охватывает все аспекты этой профессии."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_9')}
                            image={this.state.images[2]}
                            header="Капитолий"
                            subtitle="102-этажный небоскрёб, расположенный в Нью-Йорке на острове Манхэттен, на Пятой авеню между Западными 33-й и 34-й улицами. Является офисным зданием."
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
                            Вашингтон является столицей США. Город был назван именем Джорджа Вашингтона, ставшего первым президентом страны, и который стал его основателем. <p />
                            У Вашингтона особый статус, он не принадлежит к какому-либо штату и образует федеральный округ, называющийся Колумбия. Располагается город на северо-востоке США на берегу реки Потомак. Граничит с двумя штатами: Вирджинией на юго-западе и Мэрилендом со всех других сторон. На 2010 год численность населения составляла 601 723 человек. Как главный город страны, Вашингтон имеет огромное значение и влияние в политической и административной системе государства. <p />
                            Американская столица была спроектирована П. Ланфаном с таким расчетом, чтобы она могла на равных соперничать с лучшими столицами европейских государств, и заняла свое достойное место в списке красивейших городов не только страны, но и мира. <p />
                            Здесь находится резиденция главы государства — Белый Дом, здание главного военного ведомства — Пентагон, на Капитолийском холме в шикарном парке находится Капитолий, в котором проходят заседания американского конгресса. Он является коллегиальным законодательным органом США и входит в число пяти знаменитых архитектурных памятников Соединенных Штатов. Поблизости расположено и здание Верховного суда. В столице сосредоточено большое количество различных правительственных зданий. Свыше 170 посольств иностранных государств, штаб-квартиры которых также расположены здесь. <p />
                            В отличие от других американских городов, в нем нет небоскребов. Объяснение этому простое: на законодательном уровне закреплена норма о запрете возведения любых зданий и сооружений, превышающих по высоте здание Капитолия. <p />
                            Помимо весомой политической и административной роли, Вашингтон считается не менее важным центром культуры и образования. Порядка 80 000 студентов проходят обучение в 15 университетах. Есть на территории города и огромная библиотека Конгресса. Ее книжный фонд насчитывает более 65 миллионов книг, рукописей и других материалов. <p />
                            Столица страны — уникальный в некотором роде город. В нем прекрасно сочетаются грандиозные монументы и просторные ландшафты. Вашингтон не страдает от засилия высотных зданий, на его территории много парков, авеню широкие и просторные, есть много памятников архитектуры. Вся его территория разбита на части, которые сходятся у здания Капитолия. <p />
                            Не обделен мегаполис и достопримечательностями. Большинство их располагаются вокруг так называемого Молла — это парковая зона, окруженная зданиями Смитсоновских музеев. На ее территории есть Сад скульптур, галерея искусств и многое другое. Самые известные вашингтонские достопримечательности — это музей восковых фигур мадам Тюссо, музей космонавтики и аэронавтики, музей американских индейцев и другие памятники и монументы. Одним словом, туристам есть на что здесь посмотреть.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Столица Соединенных Штатов Америки находится от России довольно далеко — расстояние от Москвы до Вашингтона около 8 000 километров. На маршруте Москва — Вашингтон время полета составляет примерно 10 часов 30 минут (обратно - 9 часов 50 минут). Однако прямые перелеты не всегда выгодны в финансовом плане, или же не подходят по расписанию, в таком случае имеет смысл воспользоваться стыковочными рейсами, которые занимают больше времени за счет смены самолета в аэропорту пересадки. Так что сколько лететь до Вашингтона — решать вам. <p />
                            Большинство международных рейсов принимает аэропорт имени Даллеса, также самолеты приземляются в аэропорту имени Рейгана, или же в аэропорту Таргудда Маршалла, что в соседнем Балтиморе.
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