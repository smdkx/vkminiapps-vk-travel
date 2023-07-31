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
                    Великобритания
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://cdn24.img.ria.ru/images/155635/45/1556354505_0:438:2000:1563_1920x0_80_0_0_64fb6d242c6240d9e44e5de1a31a7d6f.jpg"
                        header="Лондон"
                        subtitle="Один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_gb_1')}
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