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
                "https://lifeglobe.net/media/entry/9655/1.jpg",
                "https://lh3.googleusercontent.com/VMhEyOhz5kXCjok_K6aNoO0eYtiR17JCPBv20dIQX3U=w1000-h646-no",
                "https://st.planeta.turtella.ru/3/l3506.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Марсель — город на юго-востоке Франции, префектура департамента Буш-дю-Рон и главный город региона Прованс-Альпы-Лазурный берег?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Марсель
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_10')}
                            image={this.state.images[0]}
                            header="Замок Иф"
                            subtitle="Фортификационное сооружение на острове Иф Фриульского архипелага в Средиземном море, в 4 км от города Марселя."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_11')}
                            image={this.state.images[1]}
                            header="Национальный парк Каланк"
                            subtitle="Французский национальный парк, расположенный в Буш-дю-Рон, на юге Франции."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_fr_info_12')}
                            image={this.state.images[2]}
                            header="Дворцово-парковый ансамбль Лоншан"
                            subtitle="Католический храм в центре Парижа, один из символов французской столицы."
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
                            Марсель — город на юго-востоке Франции, префектура департамента Буш-дю-Рон и главный город региона Прованс-Альпы-Лазурный берег. Его жители называются марсельцами. Город, второй во Франции по численности населения в коммуне и в агломерации, а также третий по численности жителей города согласно l'INSEE – самый старый город во Франции и один из самых старых в Европе. <p />
                            Расположенный на юго-востоке Франции (по скоростным путям в 775 км от Парижа, в 316 км от Лиона, в 204 км от Ниццы, в 521 км от Милана и в 506 км от Барселоны), он граничит с со Средиземным морем на западе, заключен между массивом л'Эстак на севере, л'Этуаль и Гарлабан на востоке и Каланке на юге. <p />
                            Марсель часто называют Фокейский город, так как был основан около 600г. греческим моряками из Фокеи в Малой Азии под именем Массалия, это самое старое французское поселение. Также это первый порт во Франции и в Средиземноморье.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С осени 2011 года из Москвы в Марсель летает прямой регулярный рейс авиакомпании «Air France» с частотой 4 раза в неделю. Также до Марселя можно добраться этой же авиакомпанией, но со стыковкой в Париже (аэропорт «Шарль де Голль»). Кроме того, есть стыковочные перелеты других европейских авиакомпаний, в том числе из различных городов России.
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