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
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://img.tourister.ru/files/2/3/9/6/2/9/0/1/original.jpg",
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
                    Краеведческий музей в Абакане
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Краеведческий музей в Абакане</Header>}> 
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
                            ул. Пушкина, 28 а, стр.1, Абакан, Респ. Хакасия, 655012
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Понедельник — выходной. <p />
                            Вторник — с 11:00 до 18:00 <p />
                            Четверг — с 10:00 до 19:00 <p />
                            Среда, пятница, суббота, воскресенье — с 10:00 до 18:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослые — 200 руб., школьники — 50 руб., студенты и пенсионеры — 60 руб.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+73902306411">+7 (3902) 30-64-11</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://nhkm.ru">http://nhkm.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Хакасский национальный краеведческий музей имени Л. Р. Кызласова — государственный музей, посвященный истории и культуре Республики Хакасия. Без преувеличения на сегодняшний момент это один из самых богатых региональных музеев страны. Его коллекция насчитывает больше сотни тысяч экспонатов, представляющих историю Хакасии от эпохи палеолита до XX столетия. <p />
                            В 2016 году музей переехал в новое большое здание, находящееся рядом с городским парком. Здание выполнено в виде традиционного хакасского жилища — юрты. Но внутри — это современная площадка, которая по уровню технической оснащенности может соревноваться со многими федеральными музеями. Хакасский краеведческий музей разрушает стандартное представление о том, что история и археология — это скучно. Здесь найдутся экспозиции и отдельные экспонаты, которые заинтересуют даже самых скептично настроенных посетителей.
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