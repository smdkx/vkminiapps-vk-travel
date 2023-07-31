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
                "https://edem-v-gosti.ru/upload/iblock/cdf/gallery_promo20788854.jpg",
                "https://www.tourprom.ru/site_media/images/upload/2016/3/31/poiphoto/kuznya_1.jpg",
                "https://img.tourister.ru/files/2/4/2/7/5/8/6/6/original.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что привлекательность Белокурихе, как курорту, создает сочетание трех факторов: живописная природа, целебные свойства здешних вод и хорошо развитая инфраструктура размещения и досуга?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Белокуриха
                </PanelHeader>

                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_16')}
                            image={this.state.images[0]}
                            header="Гора Церковка"
                            subtitle="Церковка — это отличная площадка для обзора. Именно здесь вы сможете насладиться захватывающим дух видом на курорт и гребни гор Чегинского хребта."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_17')}
                            image={this.state.images[1]}
                            header="Музей кузнечного дела"
                            subtitle="Туристическая, экскурсионная и музейная деятельность."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_18')}
                            image={this.state.images[2]}
                            header="«Андреевская слобода»"
                            subtitle="Историко-архитектурный комплекс «Андреевская слобода» позволяет вам окунуться в атмосферу жизни и быта Сибири 19 века."
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
                            Тишина, горный воздух и пантовые ванны — все это включено в отдых на курорте Белокуриха в двух часах езды от Горно-Алтайска. Еще этот городок, уютно запрятанный между лесами и горами, прославился термальными источниками и тропками-терренкурами. <p />
                            После пары дней горных прогулок вы из Атланта со вселенским грузом на плечах превратитесь в Гермеса на крылатых сандалиях. <p />
                            Привлекательность Белокурихе, как курорту, создает сочетание трех факторов: живописная природа, целебные свойства здешних вод и хорошо развитая инфраструктура размещения и досуга. <p />
                            Бодрость и хорошее самочувствие людям, отдыхающим здесь, придает воздух, богатый отрицательными аэронами. Их среднее содержание в верхней части курорта и на склонах гор превосходит знаменитый швейцарский курорт Давос более чем в два раза. Помимо лечения в Белокурихе отлично развивается индустрия отдыха и развлечений. <p />
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            На самолете до Горно-Алтайска, Барнаула или Новосибирска, оттуда из аэропорта можно доехать до автовокзала Новосибирска на автобусе №111э, затем пересесть на автобус до Белокурихи. В пути вы проведёте от 7 до 9 часов.
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