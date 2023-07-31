import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardGrid,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ClockOutline,
    Icon24MoneyCircleOutline,
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://lifeglobe.net/media/entry/9655/1.jpg",
            ],
        };
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Замок Иф
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Замок Иф</Header>}> 
                    <CardGrid size="l">
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        />
                    </CardGrid>
                </Group>

                <Group header={<Header mode="secondary">Адрес местонахождения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Embarcadère Frioul If, 1 Quai de la Fraternité, 13001 Marseille
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С 16 июня 2020 по 31 марта 2021: с 10:30 до 17:00 (пн - выходной). Выходные дни:1 января, 1 мая и 25 декабря
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            6 €
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+33603062526">+33 6 03 06 25 26</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.chateau-if.fr">http://www.chateau-if.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Одна из самых популярных морских прогулок среди туристов французского Марселя — по-прежнему экскурсия к загадочному Замку Иф, расположенном на одноименном острове в Средиземном море вблизи западного побережья города. <p />
                            Остров, на котором построен замок, является одним из самых маленьких среди Фриульского архипелага, площадь его составляет 3 га. Здание было построено с 1524 по 1531 гг. по приказу короля Франции Франциска I и служило в качестве форта для обороны береговой линии Марселя, но в боях оно так и не использовалось. Сооружение представляет собой квадратное трехэтажное здание, ширина которого составляет 28 м. Окружено оно тремя башнями с орудийными амбразурами, которые на данный момент являются смотровыми площадками. <p />
                            Остров окружают опасные течения и он весьма удален от материка, поэтому, с конца XVI в. замок стал использоваться в качестве тюрьмы. Здесь можно увидеть как содержались бедные и богатые заключенные. Для низших слоев населения был выделен подземный этаж, здесь они находились по двадцать и более человек в камере без окон. Богатые люди могли позволить себе частные камеры с окнами, гардеробом и камином. Одним из узников был Гастон Кремье — лидер Парижской коммуны, позже застреленный в 1871 г. <p />
                            К концу XIX в. здание перестало быть тюрьмой и стало использоваться в новом качестве. 23 сентября 1890 г. здесь был открыт музей. А благодаря роману А. Дюма, это место стало популярным у туристов. В 1926 г. замку присвоен статус архитектурного памятника. <p />
                            Таинственный остров стал участником множества художественных произведений, с его упоминанием было снято 23 фильма.
                    </MiniInfoCell>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(TravelInfo);