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
                "https://edem-v-gosti.ru/upload/iblock/cdf/gallery_promo20788854.jpg",
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
                    Гора Церковка
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Гора Церковка</Header>}> 
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
                            Алтайский край. Гора находится в Белокурихе. Вернее, курорт расположен у ее подножья. От вершины до города около 4 км.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Церковка — это отличная площадка для обзора. Именно здесь вы сможете насладиться захватывающим дух видом на курорт и гребни гор Чегинского хребта. Прогуляйтесь пешком и вы сможете детально рассмотреть все интересные подробности, не спеша понаблюдать за окружающей вас красотой. На подъемнике можно забраться еще выше и оценить все красоты природы с высока — прекрасные пейзажи Дуняшкиного лога, сосновый бор, наверху вам обязательно запомнится прогулка по самому гребню горы. <p />
                            Для туристов здесь организовано кафе, где можно вкусно пообедать за столиком с видом на горы. Рядом находится скульптура, схожая по форме с рогатым колоколом. По широкой тропе можно пройти к скале «Церковка». Если по пути вы устанете, то удобные скамеечки дадут вам возможность отдохнуть и насладиться пейзажами.
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