import React from 'react';
import {connect} from 'react-redux';

import {setPage} from "../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    Snackbar,
    Avatar,
    Banner,
    Div,
    ContentCard
} from "@vkontakte/vkui";

import {
    Icon28BusOutline,
    Icon16ErrorCircleOutline
} from "@vkontakte/icons";


class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
            images: [
                "https://static-cse.canva.com/blob/249699/pexels-vierro-3629813.jpg", //Россия
                "https://cdn22.img.ria.ru/images/07e4/08/1b/1576383811_175:94:3058:1716_1920x0_80_0_0_d506fb4ba7e476a65bc5e1eba946066c.jpg", //Украина
                "https://www.viziteurope.ru/upload/resize_cache/iblock/866/1310_680_2/8663661abbf5666a80dcf89c2a795f1a.jpg", //Франция
                "https://cms.enjourney.ru/upload/Jana/Italia/itperv.jpg", //Италия
                "https://horeca-ukraine.com/wp-content/uploads/2021/01/gb.jpg", //Великобритания
                "https://sport-marafon.ru/upload/iblock/ac3/1307-001.jpg", //Финляндия
                "https://thebell.io/wp-content/uploads/2020/04/usa.jpg", //США
                "https://img.gazeta.ru/files3/82/13477082/2020-01-27T000000Z_2136751089_RC2HOE9GYKHM_RTRMADP_3_TURKEY-DAILYLIFE-pic4_zoom-1500x1500-72428.jpg", //Турция
            ],
            countries: [
                "Россия", //1
                "Украина", //2
                "Франция", //3
                "Италия", //4
                "Великобритания", //5
                "Финляндия", //6
                "США", //7
                "Турция" //8
            ],
        };

        this.openSnackbar = this.openSnackbar.bind(this);
    }

    openSnackbar () {
        bridge.send("VKWebAppTapticNotificationOccurred", {"type": "error"}); //вибро
        if (this.state.snackbar) return;
        this.setState({ snackbar:
          <Snackbar
            layout='vertical'
            onClose={() => this.setState({ snackbar: null })}
            before={<Avatar size={24} style={{ background: 'red' }}><Icon16ErrorCircleOutline fill="#fff" width={14} height={14} /></Avatar>}
          >
              Страна станет доступна совсем скоро..
          </Snackbar>
        });
      }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Путешествия</PanelHeader>

                <Banner
                    before={<Icon28BusOutline />}
                    subheader={
                    <React.Fragment>
                        Выберите страну, чтобы просмотреть все возможные места для путешествия или отдыха.
                    </React.Fragment>
                    }
                />

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_russia')}
                    image={this.state.images[0]}
                    header={this.state.countries[0]}
                    subtitle="Ландшафт России крайне разнообразен: на ее территории есть и тундра, и леса, и субтропические пляжи."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_ukraine')}
                    image={this.state.images[1]}
                    header={this.state.countries[1]}
                    subtitle="Это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_france')}
                    image={this.state.images[2]}
                    header={this.state.countries[2]}
                    subtitle="Cтрана в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_italy')}
                    image={this.state.images[3]}
                    header={this.state.countries[3]}
                    subtitle="Средиземноморское государство в Южной Европе с длинной береговой линией, которое оказало огромное влияние на западную культуру и кухню."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_britain')}
                    image={this.state.images[4]}
                    header={this.state.countries[4]}
                    subtitle="Островное государство на северо-западе Европы, состоящее из Англии, Шотландии, Уэльса и Северной Ирландии."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_finland')}
                    image={this.state.images[5]}
                    header={this.state.countries[5]}
                    subtitle="Страна великолепных густых лесов, национальных парков с первозданной природой, десятков тысяч островов и сотен тысяч озер с чистейшей водой."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('travel', 'travel_usa')}
                    image={this.state.images[6]}
                    header={this.state.countries[6]}
                    subtitle="Государство, состоящее из 50 штатов, занимает значительную часть Северной Америки."
                    maxHeight={150}
                    />
                </Div>

                {this.state.snackbar}

            </Panel>
        );
    }

}

/*
<Div>
    <ContentCard
    //onClick={() => setPage('travel', 'travel_turkey')}
    onClick={this.openSnackbar}
    image={this.state.images[7]}
    header={this.state.countries[7]}
    subtitle="Государство на юго-востоке Европы и юго-западе Азии, культура которого сочетает древнегреческие, персидские, римские, византийские и османские традиции."
    maxHeight={150}
    />
</Div>
*/

const mapDispatchToProps = {
    setPage
};

export default connect(null, mapDispatchToProps)(Travel);