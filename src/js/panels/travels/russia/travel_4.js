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
                "https://autotravel.ru/phalbum/91372/101.jpg",
                "https://img.tourister.ru/files/1/6/9/4/5/0/9/5/original.jpg",
                "https://img.tourister.ru/files/2/3/4/2/5/4/2/5/original.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Ейск официально является не просто городским образованием, но и городом-курортом?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Ейск
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_10')}
                            image={this.state.images[0]}
                            header="Парк Имени И.М. Поддубного"
                            subtitle="Парк им. Поддубного считается одной из визитных карточек Ейска. Туристы и местные жители приходят сюда в любое время года."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_11')}
                            image={this.state.images[1]}
                            header="Аквапарк «Немо»"
                            subtitle="Безмятежный, комфортный и безопасный отдых в единственном на всём Азовском побережье вам гарантирован!"
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_12')}
                            image={this.state.images[2]}
                            header="Таганрогская набережная"
                            subtitle="Таганрогская набережная в Ейске — это главная прогулочная зона города-курорта."
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
                            Ейск официально является не просто городским образованием, но и городом-курортом. Также он популярен среди той категории туристов, которые другим видам отдыха предпочитают санаторное лечение. Кроме того, город имеет довольно богатое прошлое и будет интересен любителям истории, а не только пляжей и санаториев. <p />
                            Расположен он в прибрежном районе возле Азовского моря и начала Ейской косы меж Ейским лиманом моря и Таганрогским заливом. По численности населения (которая составляет 83 665 человек) он входит в 5 лидеров среди населенных пунктов всего Краснодарского края. Город является важным административном центром Ейского района. Что следует знать, если вы собрались ехать на отдых в Ейск? Вам наверняка интересно, откуда произошло название данного города. Получил он его от имени местной реки Ея. Также любому туристу нужно знать, что местное население именуется ейчанами. <p />
                            С первого дня своего основания Ейск получил статус Черноморского портового города. Сегодня это город-курорт, имеющий большую популярность среди жителей России. На данный момент Ейск продолжает развиваться именно как курорт и значительную часть доходов местного населения составляет прибыль, получаемая от туристов. Сегодня Ейск составил довольно мощную конкуренцию известному городу-курорту Сочи. Кстати, цены здесь гораздо ниже. Если сравнивать Ейск с Сочи по другим показателям, необходимо отметить, что данный город является более спокойным. Данное качество делает Ейск отличным вариантом для санаторно-курортного лечения и семейного отдыха, а близость к морю обеспечивает его популярность среди любителей купания и пляжных игр. Кстати, море здесь достаточно мелкое, что позволит родителям не волноваться о безопасности своих детей — утонуть они попросту не смогут. <p />
                            Также неоспоримым плюсом для туристов является отсутствие в Ейске предприятий промышленного типа, так как именно такие предприятия способствуют загрязнению воздуха. А вот развлечений для людей всех возрастов и достопримечательностей здесь хватит на всех. Отправляясь на городской рынок, обязательно побалуйте себя овощами, фруктами и морепродуктами. Стоят они здесь совсем недорого. <p />
                            В 1777—1778 гг. на будущей территории нынешнего курортно-оздоровительного города возвели небезызвестный ныне Ханский городок. Именно ему предполагалось присвоить титул столицы княжества. Здесь же, согласно плану, должна была располагаться и главная резиденция ставленника России, коим в то время являлся Шагин-Гирей — хан Крыма. Спустя 5 лет Крым, Тамань и частично — Кубань официально стали частью России. <p />
                            В 1847 г. была высказана мысль об основании портового города на вышеуказанной территории. Ожидалось, что данный проект принесет большую пользу для Российской империи со стратегической и торговой точки зрения. Автором идеи был Г. Рашпиль — главный атаман казачьего войска Черноморья. Проект получил поддержку со стороны князя Воронцова, который также получил протекцию от Николая I, а вместе с ней — и указ об основании Ейска. Официальным днем открытия города считается 19.08.1848 (31.09.1848 по новому стилю). Пост главы города занял П. Литовский, а затем — князь А. Голицын. <p />
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Существует несколько вариантов при выборе способа путешествия до вышеуказанного города. Вы можете прилететь сюда самолетом, приехать на автобусе или поезде. Как вариант — можно использовать авто. <p />
                            <b>Самолет</b>
                            <p />
                            Первый вариант является наиболее быстрым и отнимает меньше сил, а вместе с ними — и нервов. Если конечно, вы не боитесь летать. Прилететь в Ейск можно через аэропорты Ростова-на Дону и Краснодара. Расстояние от первого пункта составляет 200 км, а от второго — 250. Различия в стоимости билетов из Москвы не слишком значительны. <p />
                            <b>Автобус</b>
                            <p />
                            Во втором случае придется потратить на дорогу порядка 20 часов. Однако необходимо отметить, что автобусы, осуществляющие данный тип перевозок, оборудованы комфортабельными креслами и кондиционерами. Так что поездка, скорее всего, не доставит вам особого дискомфорта. По дороге предусмотрено несколько остановок, необходимых для того, чтобы пассажиры могли отдохнуть и поесть. Уехать в Ейск можно из Москвы со станции Должанской, ежедневно в 13:00 по летнему времени. Кроме того, в летний период автобус на Ейск отправляется также от метро «Красногвардейская». Однако уходит он только при достижении 50% нагрузки. Это очень важно знать, если вы собираетесь совершить путешествие на автобусе. <p />
                            <b>Поезд</b>
                            <p />
                            Отправляясь в путешествие по Ростовской ЖД, придется дождаться транзитного поезда, идущего через Москву в летнее время года. Ехать придется порядка 30 часов. Билет необходимо приобретать заранее — за полтора месяца. Из Краснодара прямых маршрутов не предусмотрено. <p />
                            <b>Автомобиль</b>
                            <p />
                            Что касается поездки в Ейск на авто, то доехать можно за 21 час. Расстояние от Москвы составляет 1300 км.
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