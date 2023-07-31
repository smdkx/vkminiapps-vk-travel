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
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1200px-Statue_of_Liberty%2C_NY.jpg",
                "https://wantsee.world/wp-content/uploads/2019/06/Central-Park-NYC.jpg",
                "https://i.archi.ru/i/144896.jpg",
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
                    Нью-Йорк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_1')}
                            image={this.state.images[0]}
                            header="Статуя Свободы"
                            subtitle="Колоссальная скульптура в cтиле Наполеона III, или стиле Второй империи, расположенная в США на острове Свободы, находящемся в Верхней Нью-Йоркской бухте примерно в 3 километрах к юго-западу от южной оконечности острова Манхэттен."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_2')}
                            image={this.state.images[1]}
                            header="Центральный Парк Нью-Йорка"
                            subtitle="Центральный парк в Нью-Йорке является одним из крупнейших в США и известнейших в мире."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_3')}
                            image={this.state.images[2]}
                            header="Эмпайр Стейт Билдинг"
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
                            Нью-Йорк — город, о котором, кажется, знают все на планете. Если кто-то вдруг упоминает словосочетание «столица мира», то первым в голове образованного человека наверняка всплывет имя этого мегаполиса на восточном побережье Соединенных Штатов. Нью-Йорк Сити, как его часто именуют дабы избежать путаницы со штатом Нью-Йорк, давно и, похоже, надолго утвердился в звании финансового и экономического центра земного шара, который вызывает у многих как лютую ненависть, так и жгучую зависть. Недаром на сегодняшний день Нью-Йорк представляет собой огромный котел, в котором переплавлены всевозможные расы и нации, так что ни об одном из пяти районов (borough) Нью-Йорка уже толком и не скажешь — белый он или черный. <p />
                            Люди стекались и продолжают стекаться сюда со всей Америки и всего земного шара, так что неудивительно, что долгое время Нью-Йорк был одним из самых опасных и неблагополучных мегаполисов мира. В последние десять лет ситуация значительным образом изменилась в лучшую сторону, но при этом за Нью-Йорком закрепилась репутация самого дорогого города США, так что приезжающий сюда турист, желающий лично увидеть достопримечательности США, должен иметь в виду — его кошельку придется очень и очень несладко. Но это ни в коем случае не отменяет того, что Нью-Йорк — это город, который просто-напросто сводит с ума, очаровывает, шокирует, влюбляет в себя, порой ужасает, в общем, делает все, что угодно, но никак не оставляет равнодушным. Если кто-то вам говорит, что к Нью-Йорку он безразличен, значит, этот человек не выходил за пределы терминалов аэропорта имени Джона Фитцджеральда Кеннеди.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Крупнейший город Соединенных Штатов Америки находится от России довольно далеко — расстояние от Москвы до Нью-Йорка более 7 500 километров. На маршруте Москва — Нью-Йорк время полета составляет примерно 10 часов. Однако прямые перелеты не всегда выгодны в финансовом плане, или же не подходят по расписанию, в таком случае имеет смысл воспользоваться стыковочными перелетами, которые занимают больше времени за счет смены самолета в аэропорту пересадки. Так что сколько лететь до Нью-Йорка — решать вам. <p />
                            <b>Самолет</b>
                            <p />
                            Самолет — удобный, логичный и почти единственный способ попасть из России в Нью-Йорк. Беспосадочные рейсы из Москвы в Нью-Йорк осуществляют авиакомпании Delta и Аэрофлот. <p />
                            Кроме очевидного варианта добраться до Нью-Йорка из различных городов России со стыковкой в Москве, есть другие способы: как из российской столицы, так и из регионов в «Большое Яблоко» летают различные авиакомпании со стыковкой в своих аэропортах базирования. <p />
                            <b>Водный транспорт</b>
                            <p />
                            Такой город, как Нью-Йорк, не мог не стать популярным круизным направлением, несмотря на то, что тут не растут пальмы, а пляжам, мягко говоря, далеко до Карибских или Калифорнийских. Всемирно известные музеи, Таймс-сквер, Статуя Свободы, Бродвей, Пятая авеню, Централ парк — в этом городе сосредоточено слишком много всего, чтобы его можно было вычеркнуть из своего путешествия. Так что немудрено, что лайнеры крупнейших круизных компаний постоянно швартуются у двух Нью-Йоркских терминалов, один из которых расположен на Манхэттене, а другой в Бруклине.
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