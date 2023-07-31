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
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rodeo_Drive%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg/1200px-Rodeo_Drive%2C_Beverly_Hills%2C_LA%2C_CA%2C_jjron_21.03.2012.jpg",
                "https://fs.tonkosti.ru/a7/7m/a77mkfzcjew44soc4cw8gcccc.jpg",
                "https://wikiway.com/upload/iblock/f6c/hollywood2.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Лос-Анджелес, известный также как Эл Эй (L.A.) или Город Ангелов, является одним из излюбленных туристами мест в Соединённых Штатах?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Лос-Анджелес
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_4')}
                            image={this.state.images[0]}
                            header="Родео-Драйв"
                            subtitle="Улица протяжённостью в две мили в городе Беверли-Хиллз, штат Калифорния, США."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_5')}
                            image={this.state.images[1]}
                            header="Голливудская «Аллея славы»"
                            subtitle="Ряд тротуаров по обеим сторонам улицы на протяжении пятнадцати кварталов на Голливудском бульваре и на протяжении трёх кварталов на Вайн-стрит, в Голливуде, Лос-Анджелес, Калифорния, США, которые служат постоянным и общественным памятником достижений в индустрии развлечений."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_6')}
                            image={this.state.images[2]}
                            header="Los Angeles, CA 90068"
                            subtitle="Памятный знак на Голливудских холмах в Лос-Анджелесе, Калифорния."
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
                            Лос-Анджелес, известный также как Эл Эй (L.A.) или Город Ангелов, является одним из излюбленных туристами мест в Соединённых Штатах. Это самый крупный город в штате Калифорния и второй по численности населения в стране. По недавним статистическим данным в Лос-Анджелесе проживает около 4 миллионов человек, в то время как население агломерации Большой Лос-Анджелес составляет 17 775 322 миллионов жителей. <p />
                            Днём основания Лос-Анджелеса считается 4 сентября 1781 года. Именно в этот день по приказу губернатора Фелипе де Неве группа испанских колонистов, состоящая из 46 человек, основала поселение, вскоре ставшее самым крупным в Калифорнии. Уже к 1820 году здесь проживало 650 человек. Недолгое время Лос-Анджелес входил в состав Мексики. Однако после американо-мексиканской войны по мирному договору от 1848 года поселение перешло к США. Официальный статус города был получен в 1850 году. <p />
                            Территориально Лос-Анджелес расположен на юге Калифорнии у берегов Тихого океана. Город окаймлён горами Санта-Моника, Санта-Ана и Сан-Габриель. Благоприятное расположение, субтропический климат и обилие привлекательных природных зон сделали Лос-Анджелес популярным местом для любителей пляжного отдыха, а яркие городские кварталы ежегодно притягивают сюда поклонников шумных вечеринок, шоппинга и охотников за «звёздами». К наиболее популярным пляжам относятся Малибу, Санта-Моника и Венис-бич. <p />
                            Лос-Анджелес входит в число крупнейших научно-культурных, образовательных и экономических центров в мире. Помимо этого, город является крупнейшим центром в индустрии развлечений, кино, музыки и компьютерных игр. Именно здесь расположен всемирно известный район, центр американской индустрии — Голливуд со своей Аллеей славы, Вестсайдом, кинокомпаниями «Paramount Pictures» и «Warner Bros.», фешенебельными барами и отелями. <p />
                            Особый колорит Лос-Анджелесу придает многонациональность населения. Пожалуй, ни в один другой город не приезжает так много иммигрантов, как в Лос-Анджелес. Здесь проживают представители более 140 стран мира, говорящие на 224 различных языках. Наибольшими по численности являются латиноамериканская и азиатская диаспоры города. Также в городе много жителей немецкого, итальянского, русского, армянского, британского и ирландского происхождения. Важная часть культуры Лос-Анджелеса — это разделение на этнические районы, среди которых Маленькая Армения, Чайнатаун, Корея-таун, Маленький Токио, Маленькая Эфиопия, Таиландский квартал. <p />
                            Не менее разнообразны и религиозные общины Лос-Анджелеса. По последним данным здесь уживаются около ста христианских конфессий, наиболее крупной из которых является римская католическая церковь. К другим конфессиям округа относятся иудеи, евангелисты, мормоны, мусульмане и армянская апостольская церковь. <p />
                            Современный Лос-Анджелес — это стремительно развивающийся мегаполис, где расположены штаб-квартиры ведущих компаний мира: City National Bank, CBRE Group, Occidental Petroleum, Twentieth Century Fox, The Walt Disney Company, Hilton Hotels, Guess, Paul Hastings, Herbalife, The Cheesecake Factory и многие другие. Также здесь ежегодно проходят крупные международные выставки, церемонии кинопремий и различные фестивали. В 1932 и 1984 году в Лос-Анджелесе проводились Летние Олимпийские игры.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Добраться до Лос-Анджелеса из России на сегодняшний день не так проблематично, как раньше. Ведущие российские авиалинии начинают прямые перелеты до крупнейшего города Калифорнии. Также есть множество удобных вариантов стыковочных рейсов. Все перелеты осуществляются в Международный аэропорт Лос-Анджелеса. <p />
                            <b>Прямые перелеты</b>
                            <p />
                            На данный момент прямые перелеты до Лос-Анджелеса могут осуществляться только из Москвы, регулярные рейсы выполняются российскими авиакомпаниями «Аэрофлот» и «Трансаэро», а также американской «Delta». Время в пути без пересадок — от 12 до 13 часов. <p />
                            <b>Стыковочные перелеты</b>
                            <p />
                            Из многих крупных городов России можно добраться до Лос-Анджелеса через Москву. Стыковочные перелеты предоставляют все те же «Аэрофлот» и «Трансаэро». Помимо того, большое количество европейских авиалиний осуществляют рейсы со стыковками в своих аэропортах.
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