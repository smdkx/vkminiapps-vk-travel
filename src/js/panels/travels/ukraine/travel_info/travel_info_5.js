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
                "https://img.tourister.ru/files/2/4/2/2/7/6/8/9/original.jpg",
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
                    Театр оперы и балета
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Театр оперы и балета</Header>}> 
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
                            ул. Чайковского пер., 1, Одесса, Украина, 65000
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Касса: вт-вс – с 11:00 до 19:30 (тех. перерыв – с 15:00 до 15:30). Пн - выходной. За 1 час до начала представления (с 17:30 до 18:30 – вечернего и с 11:00 и до 12:00 – дневного) билеты продаются только на ближайший спектакль.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            На репертуарные постановки от 40 грн.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:3800487801509">+380(048)780-15-09</Link> — справочная <p />
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://opera.odessa.ua">http://opera.odessa.ua</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Одесский национальный академический театр оперы и балета стал первым городским театром по времени создания и значимости. Театральная площадка появилась в начале XIX века. В 1873 году ее здание было полностью уничтожено пожаром, однако уже в 1887 году театр обрел новый дом: здание в стиле венского барокко и сегодня является одним из архитектурных украшений Одессы. На его сцене выступали такие знаменитые артисты, как Энрико Карузо, Федор Шаляпин, Леонид Собинов, Анна Павлова, Айседора Дункан, Сара Бернар. Современный репертуар богат и разнообразен. <p />
                            Увидеть интерьеры театра можно не только перед спектаклем, но и отдельно — в рамках экскурсии, в которую входит посещение небольшой музейной экспозиции. Она знакомит с историей развития театра, в коллекции собраны фотографии, афиши, программки спектаклей, эскизы декораций, костюмов и другие интересные предметы.
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