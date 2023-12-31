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
    Banner,
    Separator,
    Button,
    Div
} from "@vkontakte/vkui";

import { 
    Icon28PinOutline,
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
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d9/2f/2b/photo0jpg.jpg?w=1000&h=600&s=1",
                "https://img.tourister.ru/files/1/5/8/8/0/0/7/9/original.jpg",
                "https://www.amigo-s.ru/content-images/026b188de0d5948294c282be042c9972.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Кисловодск входит в состав эколого-курортного региона Кавказские Минеральные Воды?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Кисловодск
                </PanelHeader>

                <Banner
                    before={<Icon28PinOutline />}
                    header="Важная информация"
                    subheader={
                    <React.Fragment>
                        Канатная дорога в Кисловодске в 2020 году закрылась на капитальный ремонт, но в 2021-м должна снова заработать.
                    </React.Fragment>
                    }
                />

                <Separator style={{ margin: '5px 0' }} />
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_1')}
                            image={this.state.images[0]}
                            header="Нарзанная галерея"
                            subtitle="Нарзанная галерея — памятник архитектуры XIX века, расположенный в курортном парке города Кисловодска."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_2')}
                            image={this.state.images[1]}
                            header="Долина Роз"
                            subtitle="Долина Роз в Кисловодске является одним из любимейших мест посещения как приезжих, так и местных жителей."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_3')}
                            image={this.state.images[2]}
                            header="Кисловодский национальный парк"
                            subtitle="Кисловодский национальный парк — особо охраняемая природная территория в городе Кисловодске. Крупнейший в Европе городской парк. Площадь Кисловодского курортного парка, составляет 965,8 га."
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
                            Кисловодск — город-курорт федерального значения, входящий в состав экологического курортного региона Кавказские Минеральные Воды и второй там по численности населения. В те времена, когда путевки «выдавали» нуждающимся в лечении работникам на предприятиях, получить путевку в Кисловодск считалось большой удачей. Чем же так славится этот курортный город? <p />
                            Кисловодск — второй в стране бальнеологический и климатический курорт, а по количеству санаториев и других лечебных учреждений на Кавказских Минеральных Водах — крупнейший. Еще в начале XX века определился главный лечебный профиль Кисловодска — кардиологический, город был признан курортом для лечения сердечно-сосудистых заболеваний. Помимо этого, здесь лечат заболевания органов дыхания и нервной системы. <p />
                            Главный лечебный фактор курорта — это кисловодские нарзаны, которые используют в питьевых целях и для бальнеолечения — нарзанных ванн. Свойства доломитного и сульфатного нарзанов позволяют лечить в Кисловодске также заболевания органов пищеварения и желудочно-кишечного тракта как сопутствующих основному профилю курорта. <p />
                            Второй лечебный фактор Кисловодска — его замечательный климат, это один из лучших климатических курортов страны. В Кисловодске лечат прогулками, так как дозированная по расстоянию, темпу и углу наклона ходьба оказывает на мышечную, сердечно-сосудистую и дыхательную системы тренирующее воздействие. Это универсальное средство укрепления здоровья, первые маршруты терренкуров были проложены в Кисловодском парке еще в 1901 году, а позже появились в других городах Кавказских Минеральных Вод. <p />
                            Применяется в санаториях Кисловодска также аппликационное грязелечение целебными грязями озера Тамбукан, расположенного неподалеку от Пятигорска. <p />
                            Уже два века многолетний опыт и методы лечения и профилактики заболеваний, применяемые в санаториях и пансионатах города, позволяют поддерживать здоровье миллионов людей.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Представляете, как сложно было добираться в Кисловодск двести лет тому назад первым заезжим курортникам? С тех пор изменилось многое, но по-прежнему эти места привлекают к себе гостей, как нуждающихся в лечении, так и простых любознательных туристов. Главное, выбрать самый удобный способ перемещения. <p />
                            <b>Самолет</b>
                            <p />
                            Район Кавказских Минеральных Вод обслуживает международный аэропорт города Минеральные Воды, крупнейший авиационный узел, который называют воротами Северного Кавказа. Он находится в 53 километрах от Кисловодска. <p />
                            Из разных аэропортов Москвы в Минеральные Воды более десятка рейсов в день совершают самолеты авиакомпаний «Аэрофлот», «Победа», Россия», Utair, S7, «Уральские авиалинии»; в пути в среднем 2 часа 20 минут. <p />
                            От Санкт-Петербурга можно долететь за 3 часа 10 минут рейсами авиакомпаний «Россия» и «Победа». <p />
                            Из городов Западной Сибири — Новосибирска, Тюмени, Сургута — можно добраться самолетами авиакомпаний Utair и S7 за 3,5–4 часа; перелет из Норильска потребует 7,5 — 10 часов, так как рейсы выполняются с пересадкой в Москве. <p />
                            Связаны Минеральные Воды воздушными линиями и с другими крупными городами страны: за 3 часа можно долететь из Екатеринбурга, Челябинска или Перми, за 2,5 часа из Казани, Нижнекамска, Череповца и Оренбурга. <p />
                            Постоянное международное воздушное сообщение существует с Нур-Султаном и Ереваном, Баку и Ташкентом, выполняются рейсы в Дубай, Тель-Авив, Стамбул, Анталью, Ларнаку, Салоники и Монастир. <p />
                            Подробнее о возможных направлениях вылета и прилета из аэропорта Минеральные Воды можно узнать на сайте аэропорта. <p />
                            Прилетев в Минеральные Воды, в Кисловодск можно добраться на электричке с железнодорожного вокзала, куда от аэропорта идут маршрутные такси № 10 и № 11, или междугородними рейсовыми автобусами от автовокзала «Руслан». <p />
                            Возможно также воспользоваться официальными службами такси в аэропорту, сделав заказ у стоек в зоне прилета внутренних авиалиний, либо позвонив по телефонам. <p />
                            <b>Поезд</b>
                            <p />
                            Дважды в день на железнодорожный вокзал Кисловодска прибывают поезда из Москвы, отправляющиеся с Казанского вокзала столицы и следующие через Рязань, Воронеж, Ростов-на-Дону. Фирменным поездом «Кавказ» можно добраться за сутки, фирменным поездом «Эльбрус» за 33 часа. <p />
                            Также ежедневный и поезд из Санкт-Петербурга, от Северной столицы он в пути 44 часа. <p />
                            Кисловодск — круглогодичный курорт, однако большинство жителей нашей страны любят отдыхать летом. В летний период в Кисловодск отправляются дополнительные поезда из сибирских городов — Тынды, Иркутска, Новокузнецка, уральской столицы Екатеринбурга, следовательно, добраться на кавказский курорт смогут жители всех городов по маршруту этих поездов. <p />
                            <b>Автобус</b>
                            <p />
                            Автобусное сообщение неплохо развито на территории Ставропольского края. Помимо соседних населенных пунктов, Кисловодск связан также с крупными городами близлежащих областей и республик. Пользуются спросом рейсы в Астрахань, Волгоград, Краснодар, Сочи, Адлер, Анапу, Махачкалу и Владикавказ. Ежедневно от станции метро «Орехово» в Кисловодск отправляется автобус из Москвы, время в пути 20,5 часов. <p />
                            <b>Автомобиль</b>
                            <p />
                            Можно добраться до Кисловодска и на автомобиле. Например, расстояние от Москвы по картам автодорог составит чуть более 1600 километров, основная часть маршрута проходит по федеральной трассе М4 «Дон». Расчетное время в пути порядка 20 часов.
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