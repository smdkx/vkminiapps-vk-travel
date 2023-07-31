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
    CardGrid
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ClockOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://st.planeta.turtella.ru/2/l2998.jpg",
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
                    Базилика Нотр-Дам-де-Фурвьер
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Базилика Нотр-Дам-де-Фурвьер</Header>}> 
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
                            Лион, Place de Fourviere, 8.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Базилика открыта ежедневно: 8:00 — 19:00. Музей сокровищницы открыт ежедневно 10:00-12:30 и 14:00-17:30.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Изумительная церковь на холме Фурвьер видна издалека и с любого расстояния притягивает взгляд. Эта неовизантийская постройка с элементами готики была возведена в конце 19 века и разительно отличается от привычных глазу церквей средневековых французских городов. Архитектурным стилем, местоположением на вершине холма над городом и историей строительства после прусского вторжения базилика напоминает Сакре-Кёр в Париже. Строительство церкви продолжалось более 10 лет. <p />
                            Напротив базилики находится часовня, построенная в конце 12 века. Здание было разорено во время религиозных войн в 16 веке и перестроено в 18 веке. Сейчас на вершине часовни можно увидеть золочёную статую Богоматери 19 века. <p />
                            В 1643 г., во время чудовищной эпидемии чумы, главы города в часовне Фурвьер вознесли молитву Богоматери о защите города. Странным образом Лион действительно почти не пострадал. Спустя 200 лет, 8 декабря 1843 г., в память об этом событии на вершине часовни была установлена статуя Девы Марии. С тех пор в городе проходит ежегодный Праздник света. Аналогичная история произошла в 1870 г., когда городские власти молили Богородицу об избавлении от нашествия пруссаков. Деве Марии была обещана новая церковь, и войска Бисмарка не подошли к Лиону. Как только окончилась война, жители города стали собирать деньги на строительство новой церкви Нотр-Дам. А на вершине башни в благодарность Деве Марии была установлена статуя Богоматери. <p />
                            При церкви открыт музей религиозного искусства с постоянной экспозицией предметов из сокровищницы базилики. В их числе — работы парижских ювелиров и художников, золотые предметы, богатое шитьё и драгоценные камни. Некоторые из экспонатов до сих пор используются в особенно торжественных богослужениях. Также в музее проходят и временные выставки, где представляют сокровища христианского наследия, не только французского.
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