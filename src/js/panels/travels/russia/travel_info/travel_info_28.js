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
                "https://cdni.rbth.com/rbthmedia/images/2017.11/original/5a02d6ba15e9f930e73cdf3e.jpg",
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
                    Мечеть «Кул-Шариф»
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Мечеть «Кул-Шариф»</Header>}> 
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
                            Белокуриха-2, Белокуриха, Алтайский край, 659900
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            среда 09:00–18:00 <p />
                            четверг	09:00–18:00 <p />
                            пятница	09:00–21:00 <p />
                            суббота	09:00–18:00 <p />
                            воскресенье	09:00–18:00 <p />
                            понедельник	Закрыто <p />
                            вторник	09:00–18:00 <p />
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

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:88435678077">8 (843) 567-80-77</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.kul-sharif.com/">http://www.kul-sharif.com/</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Мечеть Кул-Шариф в Казани — главная мечеть Татарстана, один из самых крупнейших мусульманских храмов в Европе, который располагается на территории Казанского Кремля. <p />
                            Строительство мечети, а точнее, её воссоздание, велось на протяжении почти десяти лет — с 1996 по 2005 годы. Красивейший архитектурный комплекс был возведён вместо легендарной мечети Казанского ханства, которая была разрушена в ходе штурма Казани войсками Ивана Грозного в 1552 году. <p />
                            <b>Своё название мечеть получила в честь Кул-Шарифа — последнего имама сеида разрушенного храма.</b> <p />
                            Если быть точным, то до покорения Казани Иваном Грозным в Кремле было пять мечетей, про Кул-Шариф же было известно, что она имела восемь минаретов (больше, чем любая другая мечеть Земли).
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