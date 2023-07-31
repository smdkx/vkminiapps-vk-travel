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
                "https://cdni.rbth.com/rbthmedia/images/2017.11/original/5a02d6ba15e9f930e73cdf3e.jpg",
                "https://fs.tonkosti.ru/13/tj/13tj9u0b8k1wcck8g8g8ggk0w.jpg",
                "https://upload.wikimedia.org/wikipedia/ru/thumb/d/d2/%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%BD%D0%B0%D1%8F_2.jpg/2560px-%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%BD%D0%B0%D1%8F_2.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что с июля до начала осени в дельте Волги цветут лотосовые поля?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Волга
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_28')}
                            image={this.state.images[0]}
                            header="Мечеть «Кул-Шариф»"
                            subtitle="Главная соборная джума-мечеть республики Татарстан и города Казани; расположена на территории Казанского кремля; одна из главных достопримечательностей города."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_29')}
                            image={this.state.images[1]}
                            header="Дворец Земледельцев"
                            subtitle="Здание в историческом центре Казани, Вахитовском районе. Расположен на Дворцовой площади вблизи северной стены Казанского кремля и набережной Казанки."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_30')}
                            image={this.state.images[2]}
                            header="Кремлёвская набережная"
                            subtitle="Пешеходная набережная реки Казанка в центре города Казань. Имеет длину около полутора километров и пролегает от стен Казанского Кремля до Национального культурного центра «Казань». Одна из современных городских достопримечательностей и одно из мест массового посещения в городе."
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
                            C июля до начала осени в дельте Волги цветут лотосовые поля — и тут уж рука тянется к фотоаппарату у всех, независимо от пола, возраста и степени романтичности. <p />
                            Ну и на сладкое: где, как не в Астрахани, ставить рекорды по числу съеденных за лето сахарных арбузов? <p />
                            Летом можно устроить прогулку на теплоходе, откуда открывается потрясающие панорамные виды на леса с обитающими животными, что стоят вдоль берега. Город отправки и места посещения, время в пути и спектр услуг можно выбрать самостоятельно. Также доступны прогулки на катере, катамаране, водном велосипеде, возможно организовать развлечения типа дайвинга, катание на водных лыжах и доске."
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Поездом или самолетом прямо до Астрахани.
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