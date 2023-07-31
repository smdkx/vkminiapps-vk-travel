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
    Icon24MoneyCircleOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://img.tourister.ru/files/2/2/5/8/5/2/0/7/original.jpg",
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
                    Потемкинская лестница
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Потемкинская лестница</Header>}> 
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
                            Одесса, Одесская область, Украина, 65000
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Потемкинская лестница — бульварный спуск в Одессе, ведущий к морю. Лестница является одним из самых узнаваемых символов «жемчужины у моря», нередко ее называют «восьмым чудом света». Потемкинская лестница выполнена в стиле классицизм, это не просто приятное место для прогулок, но и настоящий памятник архитектуры позапрошлого столетия. С вершины лестницы (у памятника Дюку Ришелье) открывается одна из самых красивейших панорам Одессы — вид на морской порт и Одесский залив. <p />
                            <b>В 2015 году Европейская киноакадемия присвоила объекту статус «Сокровище европейской кинокультуры».</b> <p />
                            В современной Одессе Потемкинская лестница — это центр культурной жизни. Ежегодно проводится забег вверх по ступеням. Рекордное время подъема — 22 секунды. В летнее время ступени превращаются в трибуны для наблюдения за концертами и праздничными салютами, для просмотра фильмов на открытом воздухе.
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