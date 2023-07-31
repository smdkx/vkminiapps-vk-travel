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
    CardGrid,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://lh3.googleusercontent.com/VMhEyOhz5kXCjok_K6aNoO0eYtiR17JCPBv20dIQX3U=w1000-h646-no",
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
                    Национальный парк Каланк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Национальный парк Каланк</Header>}> 
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
                            Bât A4, Parc Valad, Impasse Paradou, 13009 Marseille, Франция
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+33420105000">+33 4 20 10 50 00</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.calanques-parcnational.fr">http://www.calanques-parcnational.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Национальный парк Каланки, настоящий рай в самом сердце региона Прованс-Альпы-Лазурный берег, славится красотой ландшафтов, исключительным биологическим разнообразием и культурным наследием. Имея обширную площадь в 8500 га, его земное сердце распределено по трем коммунам, а именно: Марсель, Кассис и Ла-Сиота, а его морское ядро ​​составляет 43 500 га. Единственный национальный парк в Европе, который является как наземным, морским, так и пригородным, он является домом для невероятного биологического разнообразия, состоящего из почти 140 охраняемых видов наземных животных и растений, а также более 60 видов морского наследия! <p />
                            Мозаика украшений, которыми обладает эта великолепная территория, привлекает посетителей, которые любят открытия и походы. Его пейзажи абсолютно уникальны, с его массивной береговой линией, изрезанной ручьями, его подводным каньоном и многочисленными островами, включая тот, на котором находится знаменитый Шато д'Иф, крепость шестнадцатого века, прославленную Александром Дюма в его романе Граф Монте-Кристо.
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