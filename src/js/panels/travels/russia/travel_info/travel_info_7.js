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
                "https://img.tourister.ru/files/2/1/1/8/6/1/0/3/original.jpg",
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
                    Сочи Парк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Сочи Парк</Header>}> 
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
                            г. Сочи, Адлерский район, Имеретинская низменность, Олимпийский проспект, 21
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Режим работы уточняйте перед посещением на официальном сайте.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Стоимость меняется в течение года, уточняйте перед посещением на сайте.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:88001003339">8-800-100-33-39</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.sochipark.ru">http://www.sochipark.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Сочи Парк — один из наиболее популярных тематических парков Сочи, расположенный в Имеретинской низменности. Парк известен своими необыкновенными аттракционами, изготовленными европейскими компаниями, и многообразием площадок для отдыха. Однако главной особенностью Сочи Парка является его стилистика — аттракционы и развлекательные зоны оформлены в стиле русских народных сказок и былин. Сочи Парк известен по всей России — с момента открытия парка, 2014 года, он успел стать одной из наиболее популярных туристических достопримечательностей города. Именно по этой причине ежегодно парк посещает огромное количество отдыхающих и местных жителей. <p />
                            <b>Площадь Сочи Парка составляет 20,5 гектаров. Своей площадью он примыкает к не менее известной в Сочи достопримечательности — Олимпийскому парку.</b> <p />
                            Задумка построить в Сочи своеобразный «Диснейленд» существовала давно. В 2011 году макет Сочи Парка в Адлере был представлен на многочисленных конкурсах, вскоре началась постройка. Над сказочными декорациями и потрясающими аттракционами трудились известные эксперты, архитекторы и мировые компании. <p />
                            В 2014 году состоялось неофициальное открытие Сочи Парка. Первыми его посетителями стали спортсмены-участники Олимпийских игр и зрители спортивного праздника. В этот период парк посетило около 140 тысяч человек. Официальное открытие состоялось 28 июня этого же года, оно сопровождалось выступлением цирка Дю Солей и фейерверками. Спустя несколько лет после открытия парка, в 2021 году, Сочи Парк является одной из наиболее популярных туристических достопримечательностей развлекательного плана. Также внутри Сочи Парка располагается знаменитый отель «Богатырь», что делает парк еще более посещаемым.
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