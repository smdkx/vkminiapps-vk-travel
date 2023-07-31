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
                "https://st.planeta.turtella.ru/4/l4043.jpg",
                "https://st.planeta.turtella.ru/3/l3831.jpg",
                "https://st.planeta.turtella.ru/4/l4019.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Ницца (Nissa на ниццском, Nizza на итальянском), — город на юго-востоке Франции, префектура департамента Альпы-Маритим (Alpes-Maritimes) и второй город региона Прованс-Альпы-Лазурный берег (Provence-Alpes-Côte d’Azur)" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Ницца
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_4')}
                            image={this.state.images[0]}
                            header="Английская набережная"
                            subtitle="одна из крупнейших набережных в Ницце. Начинается от моста Наполеона III и заканчивается переходом в улицу Quai des États-Unis."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_5')}
                            image={this.state.images[1]}
                            header="Вилла Массена"
                            subtitle="Один из крупнейших и самый популярный художественный музей мира."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_6')}
                            image={this.state.images[2]}
                            header="Музей Марка Шагала"
                            subtitle="Музей художника в Ницце, Франция."
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
                            Ницца (Nissa на ниццском, Nizza на итальянском), — город на юго-востоке Франции, префектура департамента Альпы-Маритим (Alpes-Maritimes) и второй город региона Прованс-Альпы-Лазурный берег (Provence-Alpes-Côte d’Azur). Расположенный на юго-восточном побережье Франции, в тридцати километрах от итальянской границы, он был основан на берегах Средиземного Моря, рядом с бухтой Ангелов (la baie des Anges) и в устье реки Пеллон (Paillon). <p />
                            С 343 895 жителями в 2014 г., он занимает пятое место во Франции по численности населения (после Парижа, Марселя, Лиона и Тулузы). Город расположен в центре городской области и является городским центром Ницца- Лазурный берег (Nice-Côte-d’Azur). Город является цетром городского сообщества Ницца- Лазурный берег, в состав которого входят 24 коммуны. <p />
                            Город является одним из крупнейших туристческих центров Лазурного берега, привлекая ежегодно до четырех миллионов туристов, из-за чего городской аэропорт занимает по пассажиропотоку третье место во Франции. Развитая инфраструктура позволяет городу быть очень удобным местом для туристов, а богатая история поспособствовала появлению многочисленных достопримечательностей. Кроме того, Ницца является одним из главных образовательных центров Франции с огромным количеством институций. <p />
                            Город долгое время принадлежал к генуэзцам, а впоследствии входил в состав Савойского графства. Ницца вошла в состав Франции только в 1680 году во время правления Людовика XIV. А уже в XIX веке Ницца начала развиваться как центр туризма, благодаря своему мягкому климату превратившаяся в один из лучших европейских курортов.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Прямые авиарейсы из России в Ниццу выполняются в летний сезон авиакомпаниями "Аэрофлот" (из Москвы) и "Россия" (из Санкт-Петербурга). До города также можно добраться авиакомпанией «Air France» со стыковкой в Париже (аэропорт «Шарль де Голль»). Кроме того, есть стыковочные перелеты других европейских авиакомпаний, в том числе из различных городов России.
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