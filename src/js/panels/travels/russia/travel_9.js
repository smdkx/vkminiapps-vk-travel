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
                "https://images.spasibovsem.ru/catalog/original/salbykskij-kurgan-rossiya-respublika-hakasiya-otzyvy-1535909544.jpg",
                "https://img.tourister.ru/files/2/2/4/7/2/0/4/9/original.jpg",
                "https://img.tourister.ru/files/2/3/9/6/2/9/0/1/original.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Хакасия отличается от других регионов России особым климатом, совершенно своеобразным рельефом, уникальным растительным и животным миром, которые придают этим местам неповторимый колорит, притягивающий фанатов активного туризма и людей, ищущих свежих впечатлений в своих путешествиях?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Хакасия
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_25')}
                            image={this.state.images[0]}
                            header="Большой Салбыкский курган"
                            subtitle="Крупнейший мегалитический курган бассейна Среднего Енисея. Памятник тагарской культуры. Охраняется государством, работает музей «Древние курганы Салбыкской степи»."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_26')}
                            image={this.state.images[1]}
                            header="Абаканский зоопарк"
                            subtitle="Зоологическое учреждение в Абакане, столице Республики Хакасия."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_27')}
                            image={this.state.images[2]}
                            header="Краеведческий музей в Абакане"
                            subtitle="Хакасский национальный краеведческий музей имени Л. Р. Кызласова — ведущий музей, государственное автономное учреждение культуры Республики Хакасия."
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
                            Хакасия отличается от других регионов России особым климатом, совершенно своеобразным рельефом, уникальным растительным и животным миром, которые придают этим местам неповторимый колорит, притягивающий фанатов активного туризма и людей, ищущих свежих впечатлений в своих путешествиях. <p />
                            Территория Хакасии отличается ярко выраженным характером биосферных процессов, в силу чего здесь представлены почти все ландшафтно-природные зоны земли: полупустыни, степи, лесостепи, тайга, высокогорные альпийские луга, высокогорные тундры и ледники. <p />
                            Территория Хакасии по праву считается «археологической Меккой» Сибири. Это край с богатой историей и древней культурой, сохранившей более 30 тысяч памятников - каменных изваяний и курганов, каждый из которых неповторим и имеет огромную историческую ценность; наскальные рисунки, руины древних зданий из сырцового кирпича, оборонительные укрепления, древние курганные могильники и захоронения <p />
                            Если хотите подлечиться, остановитесь в санатории на озере Шира. Там знают, куда намазать иловую грязь и сколько прописать минералки, чтобы пациенты стали бодрее коньков-горбунков. <p />
                            Рыбачить отправляйтесь на пресное озеро Иткуль. Уха из окуня и леща будет еще вкуснее, если сварите ее на костре у палатки.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Самолетом до Абакана, дальше до озер на поезде, машине или автобусе.
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