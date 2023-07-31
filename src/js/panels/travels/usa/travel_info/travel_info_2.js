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
                "https://wantsee.world/wp-content/uploads/2019/06/Central-Park-NYC.jpg",
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
                    Центральный Парк Нью-Йорка
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Центральный Парк Нью-Йорка</Header>}> 
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
                            Central Park Conservancy, 14 E. 60th St, New York, NY, 10022
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно с 6:00 до 01:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход свободный
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+12123106600">+1 (212) 310-6600</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.centralparknyc.org">http://www.centralparknyc.org</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Центральный парк в Нью-Йорке — это одна из визитных карточек «Большого Яблока» и крупнейшее городское лесонасаждение не только в Америке, но и во всем мире. В каждом голливудском фильме, действия которого происходят в Манхэттене, есть целые эпизоды, снятые здесь. Расположена парковая зона между 59-й и 110-й улицами, в самом сердце деловых кварталов, застроенных небоскрёбами, банками и правительственными зданиями. По всей площади встречаются рукотворные природные уголки, которые и создают этот величественный и прославившийся на весь мир образ «бьющегося сердца Манхэттена». <p />
                            <b>Площадь центрального парка Нью-Йорка — 341 гектар. По самым скромным подсчётам туроператоров, ежегодно сюда приезжают 25 миллионов человек, и это лишь иностранцы, что делает достопримечательность одним из самых посещаемых мест земного шара. Туристов и жителей города притягивает не только буйная растительность, окружённая каменными джунглями, но и богатейшая культурная жизнь с ежегодными фестивалями, концертами и спортивными соревнованиями.</b>
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