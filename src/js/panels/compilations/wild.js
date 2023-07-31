import React from 'react';
import {connect} from 'react-redux';

import {setPage, goBack} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Banner,
    Div,
    ContentCard
} from "@vkontakte/vkui";

import {
    Icon28LotusOutline
} from "@vkontakte/icons";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Дикие условия
                </PanelHeader>

                <Banner
                    before={<Icon28LotusOutline />}
                    subheader={
                    <React.Fragment>
                        Собрали идеи, куда поехать на природу, чтобы приблизиться к себе и первозданной красоте — на социальной дистанции от толп и стресса.
                    </React.Fragment>
                    }
                />

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_1')}
                    image="https://content.skyscnr.com/m/69974f316b75f5f6/original/Landscape-of-Kamchatka.jpg?resize=1800px:1800px&quality=100"
                    header="Камчатка"
                    subtitle="Дикая природа во всей красе: Камчатка, Россия"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_2')}
                    image="https://content.skyscnr.com/m/4eb9d2243e0dcafa/original/GettyImages-162233569.jpg?resize=1800px:1800px&quality=100"
                    header="Гималаи"
                    subtitle="Легендарные маршруты для трекинга: Гималаи, Непал"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_3')}
                    image="https://content.skyscnr.com/m/16290b261e01a04d/original/GettyImages-514632226.jpg?resize=1800px:1800px&quality=100"
                    header="Тихоокеанская тропа"
                    subtitle="Куда поехать на природу: Тихоокеанская тропа, США"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_4')}
                    image="https://content.skyscnr.com/m/2014aa8557aa1a93/original/field_lavender_tasmania_australia.jpg?resize=1800px:1800px&quality=100"
                    header="Тасмания"
                    subtitle="Где искать нетронутую природу: Тасмания, Австралия"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_5')}
                    image="https://content.skyscnr.com/m/684f44a47fafa002/original/GettyImages-162999093.jpg?resize=1800px:1800px&quality=100"
                    header="Лёйгавегюр"
                    subtitle="Куда выбраться на природу за границей: Лёйгавегюр, Исландия"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_6')}
                    image="https://content.skyscnr.com/m/3e8444d43a4f0c45/original/Vicunas-10.jpg?resize=1800px:1800px&quality=100"
                    header="Дорога Инков"
                    subtitle="Где искать дикую природу: Дорога Инков, Перу"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_7')}
                    image="https://content.skyscnr.com/m/1be5ec967a5f625b/original/GettyImages-480928205.jpg?resize=1800px:1800px&quality=100"
                    header="Гренландия"
                    subtitle="Где искать нетронутую природу: Гренландия, Дания"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'wild_info_8')}
                    image="https://content.skyscnr.com/m/7e50b575104f1727/original/GettyImages-99438229.jpg?resize=1800px:1800px&quality=100"
                    header="Армения"
                    subtitle="Куда поехать на природу: горы Армении"
                    maxHeight={150}
                    />
                </Div>

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);