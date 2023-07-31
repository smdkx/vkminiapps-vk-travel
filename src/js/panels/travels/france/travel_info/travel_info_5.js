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
    Icon24ClockOutline,
    Icon24MoneyCircleOutline,
    Icon24PhoneOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://st.planeta.turtella.ru/3/l3831.jpg",
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
                    Вилла Массена
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Вилла Массена</Header>}> 
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
                            65 Rue de France, Palais Massena
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно, с 10:00 до 18:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+33493911910">+33 4 93 91 19 10</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Дворец Массена — довольно известная в Ницце достопримечательность, представляющая из себя старинный особняк в неоклассическом стиле с размещенной внутри экспозицией Музея истории и искусства. Он располагается на Английской набережной рядом с известным отелем «Негреско». Когда-то дворец Массена являлся зимней резиденцией принца, после — стал музеем коллекций. В 2021 году его посещает огромное количество туристов, которые желают познакомиться поближе с французским бытом XX века и ценными предметами, представленными в экспозиции. Кроме того, рядом с дворцом Массена в Ницце располагается великолепный сад, спланированный садовником Эдуардом Андре. Он также является неотъемлемой частью достопримечательности. <p />
                            Дворец Массена располагается на Английской набережной в Ницце, в окружении множества других местных достопримечательностей. Во-первых, рядом находится знаменитый отель Негреско и множество других мест, в которых можно поселиться. Во-вторых, помимо музея Массена в этом районе есть несколько других культурных достопримечательностей. Это и художественная галерея DZ Galerie, и сад Альберта I. Также рядом можно найти казино и кинотеатр.
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