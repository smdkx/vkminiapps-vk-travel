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
                    Украина
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://cdni.rt.com/russian/images/2021.01/article/600d412fae5ac904513a05c0.jpg"
                        header="Киев"
                        subtitle="Город известен памятниками религиозной архитектуры и историческими музеями."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ua_1')}
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
                        image="https://all.accor.com/magazine/imagerie/kartinka-1-9438.jpg"
                        header="Одесса"
                        subtitle="Портовый город на Черном море в южной части Украины."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ua_2')}
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