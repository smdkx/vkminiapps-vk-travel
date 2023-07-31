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
                "https://rosskurort.com/upload/iblock/459/3242034.jpg",
                "https://www.baikal-olkhon.ru/pic/ee5ffe600301cf039f9d98b5c09b1d06/shamanka_leto5.jpg",
                "https://baikal-1.ru/wp-content/uploads/2017/03/territory-Pribaikalsky.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Озеро Байкал является глубочайшим озером на планете, а заодно и крупнейшим «хранилищем» пресной воды, которое занимает площадь 31 722 квадратных километра в Восточной Сибири?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Байкал
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_22')}
                            image={this.state.images[0]}
                            header="Канатная дорога в Листвянке"
                            subtitle="Канатная дорога в Листвянке — поселке, стоящем на берегу озера Байкал, а именно там, где начинается река Ангара, ведет к камню Черского."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_23')}
                            image={this.state.images[1]}
                            header="Мыс Бурхан"
                            subtitle="Мыс Бурхан или Шаман-скала, как его еще называют — это одно из наиболее известных мест Байкала и его визитная карточка. Знаменит этот мыс тем, что в его скале находится пещера Шаманка, в которой камлали и совершали жертвоприношения первые шаманы."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_24')}
                            image={this.state.images[2]}
                            header="Прибайкальский национальный парк"
                            subtitle="Особо охраняемая природная территория федерального значения, созданная для сохранения природы западного побережья озера Байкал."
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
                            Озеро Байкал является глубочайшим озером на планете, а заодно и крупнейшим «хранилищем» пресной воды, которое занимает площадь 31 722 квадратных километра в Восточной Сибири. Максимальный показатель глубины Байкала — 1637 метра. Само же дно Байкала лежит на 1186 метров ниже уровня мирового океана, так что озеро можно считать еще и одной из крупнейших впадин на планете. <p />
                            Средняя глубина у Байкала также довольно внушительная — 744,4 метра, у иных крупных озер даже максимальная глубина далека от этого показателя. Кроме того, озеро славится своей чистой и прозрачной водой, хотя в последние годы «дикого капитализма» озеру стали угрожать выбросы с Байкальского целлюлозно-бумажного комбината. Вода Байкала обладает высокой концентрацией кислорода, так что в ней обитает множество уникальных растений и животных, которых не найти нигде, кроме как на Байкале. <p />
                            Когда захочется драйва, прокатитесь по Кругобайкальской железной дороге, найдите деревянную юрту в музее «Тальцы» и поднимитесь на камень Черского. На закуску оставьте конные прогулки, дайвинг, гонки на квадроциклах и рыбалку. <p />
                            А если рыбак вы еще тот, сразу проложите маршрут к рынку в Листвянке — сюда байкальского омуля привозят совсем свежим и тут же коптят.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Соответственно, чтобы добраться до озера нужно доехать сначала до Иркутска или Улан-Удэ, затем уже на сам берег Байкала или как в нашем случае на единственный обитаемый остров – Ольхон. Из Москвы до Иркутска добраться можно как поездом (за 3 суток), так и самолётом (за 5.5 часов).
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