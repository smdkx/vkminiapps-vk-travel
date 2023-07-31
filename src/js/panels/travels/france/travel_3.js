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
                "https://st.planeta.turtella.ru/2/l2998.jpg",
                "https://cms.enjourney.ru/upload/Jana/Frankreich/Lyon/The-Tony-Garnier-Urban-Museum.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/6/6f/Les_hospices_de_Beaune_%2821%29.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Лион (Lyon) — французкий город, расположенный на юго-востоке Франции, в междуречье Роны и Соны?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Лион
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_7')}
                            image={this.state.images[0]}
                            header="Базилика Нотр-Дам-де-Фурвьер"
                            subtitle="Церковь на вершине холма Фурвьер, возвышающегося над Лионом, рядом с металлической башней на Фурвьере."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_8')}
                            image={this.state.images[1]}
                            header="Городской музей Тони Гарнье"
                            subtitle="Городской музей под открытым небом."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_9')}
                            image={this.state.images[2]}
                            header="Отель-Дьё"
                            subtitle="Здание Отеля-Дьё можно считать одной из наиболее броских достопримечательностей Лиона." //blin
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
                            Лион (Lyon) — французкий город, расположенный на юго-востоке Франции, в междуречье Роны и Соны. Это главный город департамента Роны и региона Рона-Альпы (Rhône-Alpes). Жителей города называют лионцы (лионки). <p />
                            Лион расположен на пересечении транспортных путей: на севере лежит долина Роны (простирается от Лиона до Марселя), Находитя между Центральным массивом (Massif central) на западе и Альпийским массивом (massif alpin) на вотоке. Город занимает важную стратегическую транспортную позицию в Европе. <p />
                            Бывшая столица Галлии, во времена расцвета Римской Империи. В Лионе заседало архиепископство, главное во всей Галлии. В Средневековье Лион становится торговым городом, потом финансовым центром с эпохи Возрождения до конца XIX в. Его экономическое процветание во многом объяснялось монополией на шелк, последующим появлением развитой текстильной и химической индустрии. <p />
                            Исторически Лион — индустриальный город, с многочисленными видами нефтехимической промышленности на всей протяженносты Соны и Роны. После спада в текстильной промышленность, Лион становится центром высоких технологий, таких как фармацевтика и биотехнологии. Кроме того, Лион — второй студенческий город во Франции, здесь расположено три университета и многочисленные строительные учебные заведения. Наконец, город сохранил важное архитектурное наследие с римской эпохи до ХХ в., в том числе эпохи Возрождения, а потому назван ЮНЕСКО Мировым Наследием. <p />
                            По численности населения Лион второй город во Франции и третье городское сообщество (после Парижа и Марселя), также третий по численности жителей коммуны. Префектура региона Рона-Альпы, Лион является важным национальным и европейским гордом, за последние двадцать лет наблюдается значительный прирост населения.
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
                            Прямые авиаперелеты из Москвы в Ниццу организуют компании «Аэрофлот» и «Россия». Самолеты вылетают из Внуково, Шереметьево и Домодедово и приземляются в аэропорту Ницца Лазурный Берег. Средняя продолжительность полета — около 4 часов. <p />
                            <b>Поезд</b>
                            <p />
                            Еще один способ добраться из Москвы в Ниццу — прямой фирменный поезд РЖД № 017/018. Это отличная альтернатива для тех, кто не любит самолеты. Продолжительность поездки — 1 день 23 часа. За время пути поезд проходит 8 европейских стран. Расписание составлено таким образом, чтобы пассажиры прибывали в Ниццу рано утром, а уезжали поздно вечером: это и экономия средств на гостиницу, и дополнительное время для отдыха.
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