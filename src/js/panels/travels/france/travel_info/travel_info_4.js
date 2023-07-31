import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardGrid
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://st.planeta.turtella.ru/4/l4043.jpg",
            ],
        };
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Английская набережная
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Собор Парижской Богоматери</Header>}> 
                    <CardGrid size="l">
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        />
                    </CardGrid>
                </Group>

                <Group header={<Header mode="secondary">Адрес местонахождения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Promenade des Anglais
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Английская набережная в Ницце считается одной из главных достопримечательностей города. Длинная пешеходная аллея отделяет жилые массивы от Лазурного побережья. Вдоль всей улицы установлены небольшие лавочки, высажены пальмы, устроены тенистые зоны для отдыха. Набережная считается самым популярным местом у приезжих. Здесь туристы могут насладиться морским отдыхом, полюбоваться историческими памятниками и средневековой архитектурой города. <p />
                            Сегодня Английская набережная — популярный променад в курортном городе Франции. Вдоль аллеи с северной стороны расположены старинные дома, здания отелей, дворцы, казино, музеи, парковые зоны и множество других интересных архитектурных объектов. По всей набережной стоят уютные кафе и рестораны. Вечером улица вдоль побережья подсвечена светом фонарей.
                    </MiniInfoCell>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(TravelInfo);