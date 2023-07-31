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
                "https://wantsee.world/wp-content/uploads/2019/04/Valley-of-Geysers-Russia.jpg",
                "https://enjoykamchatka.ru/upload/iblock/92f/enjoykamchatka-_-klyuchevskaya-sopka-_2_.jpg",
                "https://img.tourister.ru/files/2/1/5/3/0/7/8/9/original.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Камчатка — дальний уголок нашей страны, географические особенности и первозданная природа которого привлекает отважных путешественников, не боящихся столкнуться с трудностями?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Камчатка
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_19')}
                            image={this.state.images[0]}
                            header="Долина гейзеров"
                            subtitle="Это одно из наиболее крупных гейзерных полей в мире и единственное в Евразии. Долина гейзеров расположена на Камчатке в Кроноцком государственном биосферном заповеднике."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_20')}
                            image={this.state.images[1]}
                            header="Ключевская Сопка"
                            subtitle="Действующий стратовулкан на востоке полуострова Камчатка. Является самым высоким активным вулканом на Евразийском материке."                         
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_21')}
                            image={this.state.images[2]}
                            header="Стела «Здесь начинается Россия»"
                            subtitle="Скульптурная композиция «Здесь начинается Россия» на въезде в город Елизово на Камчатке."
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
                            Камчатка — дальний уголок нашей страны, географические особенности и первозданная природа которого привлекает отважных путешественников, не боящихся столкнуться с трудностями. Путеводитель по Камчатке раскроет основные места и события, которые непременно стоит посетить, оказавшись в этой местности. <p />
                            Территория региона состоит из полуострова Камчатка, прилегающей к нему на севере части материка, Карагинского острова и Командорских островов. Западный берег полуострова омывает Охотское море, восточный — Тихий океан. Столицей края является город Петропавловск-Камчатский, в котором проживает больше половины населения Камчатки. <p />
                            В этой местности вы не найдете поражающих воображение архитектурных шедевров, нет, ее прелесть как раз в нетронутой, удивительной и разнообразной природе. На территории Камчатки находятся гейзеры и вулканы (часть из них действующие), живописные реки и озера, термальные источники. Край богат полезными ископаемыми, здесь находятся залежи золота, нефти, газа, угля. Разнообразен животный и растительный мир Камчатки, многие виды даже занесены в Красную книгу. <p />
                            Ну как ее потенциал мог не привести к развитию туризма? Путешествие на Камчатку просто рекомендовано тем, кто любит активный отдых, незабываемые впечатления и всевозможные приключения. Многочисленные пешие маршруты, сплавы по рекам, восхождения на вулканы — только часть того, что может предложить край. Но и тем, кто просто хочет вырваться из рутины и густонаселенных мегаполисов стоит тоже обратить внимание на этот край, ведь здесь так приятно почувствовать единение с природой, гармонию и внутреннее спокойствие. <p />
                            Здесь можно порыбачить, понаблюдать за животными в их естественной среде обитания и, наконец, увидеть океан — могущественный, загадочный и бескрайний. Интересным и познавательным будет и знакомство с коренными народами Севера, их древней культурой и традициями. Фотографии путешественников поражают своей выразительностью, но лучше своими глазами увидеть этот неповторимый край, так что смело отправляйтесь на Камчатку!
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Железнодорожное сообщение между полуостровом и материком отсутствует, поэтому добраться на Камчатку на поезде не получится. На машине можно доехать только до Владивостока. Что остается путешественнику, жаждущему попасть на край Земли? Только воздушный путь. Изредка путешественники посещают Камчатку в рамках круизных туристических туров. <p />
                            <b>Самолет</b>
                            <p />
                            Самолеты из России и других стран приземляются в аэропорту «Елизово», который расположен примерно в 27 км от Петропавловска-Камчатского. Нынешний аэропорт имеет довольно скромные размеры, часто туристам приходится долго ждать свой багаж, но к 2021 году обещают построить новый аэровокзальный комплекс. <p />
                            <b>Когда лететь?</b>
                            <p />
                            Собираясь на Камчатку, лучше планировать поездку заранее, так можно сэкономить на билетах, которые часто составляют значительную часть бюджета путешествия. Высокий туристический сезон на полуострове начинается в летний период, что отражается на цене авиабилетов, они резко возрастают, особенно на август. В связи с этим стоит приобретать их за полгода до планируемой даты поездки.
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