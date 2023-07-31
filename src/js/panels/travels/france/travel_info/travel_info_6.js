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
                "https://st.planeta.turtella.ru/4/l4019.jpg",
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
                    Музей Марка Шагала
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Музей Марка Шагала</Header>}> 
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
                            36 Avenue Docteur Ménard
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С ноября по апрель: с 10:00 до 17:00; с мая по октябрь: с 10:00 до 18:00. Вторник — выходной, а также 1 января, 1 мая и 25 декабря.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Посетителям до 26 лет — бесплатно. Полный тариф — 8 €, льготный (студенты и пенсионеры старше 65 лет) — 6 €. Группам от 10 человек — 6,50 € на каждого.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+330493538720">+ 33 (0) 493 53-87-20</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.musees-nationaux-alpesmaritimes.fr">http://www.musees-nationaux-alpesmaritimes.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Музей выдающегося живописца XX столетия — Марка Шагала находится в Ницце и является популярной туристической достопримечательностью. Родившись в белорусском Витебске, Марк Шагал вскоре переехал в Париж, где и провел самую творческую и значимую часть своей жизни. В старости художник поселился в деревне Сен-Поль-де-Ванс в пригороде Ниццы, где и умер в 1985 году. <p />
                            В своем творчестве Марк Шагал касался и библейской тематики, в следствие чего на свет появилась целая серия картин на сюжеты из Евангелия. Они были непохожи на остальные полотна, художник хотел создать для них отдельную выставку. После передачи коллекции библейских картин Франции, власти задумались о создании музея. В 1972 году он был построен в Ницце и получил название «Национальный музей Библейского послания Марка Шагала». <p />
                            Сам художник, скончавшийся в возрасте 97 лет, до последнего принимал участие в работе музея. <p />
                            <b>Помимо знаменитого цикла из 17 картин в собрание музея Шагала в Ницце входит множество других работ Шагала — гравюр, этюдов, эскизов, скульптур, витражей и др. Всего в музее размещено около 250 работ художника.</b> <p />
                            Для удобства посетителей на территории музея Марка Шагала есть кафе, где можно перекусить и выпить кофе, и книжно-сувенирный магазин с широким ассортиментом брошюр об искусстве, включая творчество Шагала, и разнообразными памятными подарками.
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