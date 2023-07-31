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
                    Франция
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://7daytravel.ru/wp-content/uploads/2018/10/paris-eiffel-tower-and-river-seine-at-sunset-in-paris-france.jpg"
                        header="Париж"
                        subtitle="Один из главных европейских городов и мировой центр культуры, искусства, моды и гастрономии."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_fr_1')}
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
                        image="https://img.lookmytrips.com/images/look4u5e/big-56f9515cff93671d160453a5-56f952c9bd006-1bfikm9-lbcvr.jpg"
                        header="Ницца"
                        subtitle="Столица департамента Приморские Альпы на Лазурном берегу Франции, лежащая на галечных берегах залива Ангелов."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_fr_2')}
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
                        image="https://cdn5.vedomosti.ru/crop/image/2017/40/17cp50/original-1k6o.jpg?height=609&width=1082"
                        header="Лион"
                        subtitle="Город во французском историческом регионе Рона – Альпы, расположенный в месте слияния рек Рона и Сона."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_fr_3')}
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
                        image="https://turizm.world/wp-content/uploads/2018/08/gorod-marsel-franciya.jpg"
                        header="Марсель"
                        subtitle="Портовый город на юге Франции, важный транзитный и торговый центр с момента своего основания греками около 600 года до нашей эры."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_fr_4')}
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