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
                    Италия
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://vestnik.icdc.ru/images/world/2019/2020-02-06-04.jpg"
                        header="Рим"
                        subtitle="Столица Италии, огромный многонациональный город, история которого насчитывает почти три тысячи лет."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_it_1')}
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
                        image="https://wantsee.world/wp-content/uploads/2019/04/Venice-Italy.jpg"
                        header="Венеция"
                        subtitle="Столица одноименной области на севере Италии. Город расположен на более чем 100 небольших островах в лагуне Адриатического моря."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_it_2')}
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
                        image="https://34travel.me/media/upload/images/2016/march/milan_guide/new/IMG_6944.jpg"
                        header="Милан"
                        subtitle="Крупный город на севере Италии, расположенный в Ломбардии, мировая столица дизайна и моды."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_it_3')}
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
                        image="https://cdn2.tu-tu.ru/image/pagetree_node_data/2/efc8050ea08e91974facaa7569feb09e/?f=2"
                        header="Флоренция"
                        subtitle="Столица итальянского региона Тоскана, славится произведениями искусства и архитектурой эпохи Возрождения."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_it_4')}
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