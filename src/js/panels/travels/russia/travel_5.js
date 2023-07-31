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
                "https://www.visit-petersburg.ru/media/uploads/album/195/1121_detail_page.jpg",
                "https://peterburg2.ru/uploads/19/05/15/ga11_1-29_0.jpg",
                "https://walkday.ru/upload/iblock/1bf/1bfb4c97c5b5ce7775a3bd8c41ed821d.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Карельский перешеек — участок суши между Финским заливом и Ладожским озером?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Карельский перешеек
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_13')}
                            image={this.state.images[0]}
                            header="Зеленогорский парк культуры и отдыха"
                            subtitle="Сосновые и еловые леса, заросли можжевельника и вереск."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_14')}
                            image={this.state.images[1]}
                            header="Выборгский замок"
                            subtitle="Выборгский замок был возведён на небольшом острове в Финском заливе."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_15')}
                            image={this.state.images[2]}
                            header="Парк Монрепо"
                            subtitle="Монрепо — бывшая усадьба шведских баронов. Это один из красивейших пейзажных парков в Европе. Его отличают густые леса с заповедными тропинками, серые отвесные скалы над морем, мысы и гроты, озера и заводи."
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
                            Карельский перешеек — участок суши между Финским заливом и Ладожским озером. На юго-востоке границей Карельского перешейка является Нева, а на северо-западе — Выборгский залив и от её дна Бухта Защитная и Залив Новинский, линия до самой западной точки Ладоги — Пеконлахти. <p />
                            В Выборге не пропустите средневековый замок, гранитные пещеры и парк Монрепо, а еще поучаствуйте в рыцарском фестивале. В Приозерске заберитесь в пороховой погреб крепости Корела. <p />
                            Но главный повод съездить на Карельский перешеек — активный отдых. Испытайте трекинговые сандалии, сплавьтесь по реке Вуокса, поймайте к ужину окуня или заберитесь на скалы у Ястребиного озера.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            На электричке с Финляндского вокзала Санкт-Петербурга до Выборга или Приозерска.
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