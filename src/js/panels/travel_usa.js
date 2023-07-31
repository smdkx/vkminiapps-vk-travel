import React from 'react';
import {connect} from 'react-redux';

import {setPage, goBack} from "../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Button,
    Div,
    ContentCard
} from "@vkontakte/vkui";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    США
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://wantsee.world/wp-content/uploads/2019/06/New-York-City-USA.jpg"
                        header="Нью-Йорк"
                        subtitle="Крупнейший город США, входящий в одну из крупнейших агломераций мира."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_us_1')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://prousa.info/images/cities/los_angeles/la_cityscape.webp"
                        header="Лос-Анджелес"
                        subtitle="Огромный город на юге Калифорнии, столица американской киноиндустрии и телевидения."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_us_2')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://prousa.info/images/cities/washington_dc/washington_dc_skyline.webp"
                        header="Вашингтон"
                        subtitle="Это небольшой город в округе Колумбия, между штатами Мэриленд и Виргиния."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_us_3')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://triplinks.ru/wp-content/uploads/2019/03/chicago.jpg"
                        header="Чикаго"
                        subtitle="Город на берегах озера Мичиган в штате Иллинойс."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_us_4')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);