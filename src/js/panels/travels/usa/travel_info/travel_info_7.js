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
                "https://cdn24.img.ria.ru/images/07e4/0c/03/1587547637_0:275:3072:2003_1920x0_80_0_0_3f188b869354d747ae1339bdd79168c9.jpg",
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
                    Белый дом
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Белый дом</Header>}> 
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
                            г. Вашингтон, Pennsylvania Avenue, 1600
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+2024567041">202 456–7041</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.whitehouse.gov">http://www.whitehouse.gov</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            В столице США трудно найти место известнее, чем Белый дом. Это здание знаменито на весь мир. Наверняка мало людей на нашей планете, кто бы о нем не слышал. Находится он в Вашингтоне, в его северо-западном районе. Именно в нем и находится президент страны. Возведение резиденции главы США берет свой отсчет с 1792 года. Уже с того времени было известно о том, что это и будет главное здание страны. <p />
                            Построен Белый дом был по проекту, разработанному архитектором Джеймсом Хобаном, в стиле неоклассицизма. В качестве строительного материала был использован песчаник из Вирджинии. Поскольку он имел пористую структуру, было принято решение о покрытии стен здания смесью извести с добавлением туда рисового клея, свинца, а также, казеина. Вот это и дало сооружению нынешний его оттенок. Возведение президентского дома заняло восемь лет, при этом затраты составили порядка 233 000 долларов, по современным меркам эта сумма равна 3 млн. американских денег. <p />
                            Первым, кто заселился в Белый дом, стал второй президент Соединенных Штатов Джон Адамс, который пришел в невероятный восторг от увиденного. Это знаменательное событие пришлось на окончание 1800 года. Выдержка из его письма своей жене по этому поводу высечена на камине, находящемся в парадной столовой здания. <p />
                            В самом начале, у этого сооружения были разные названия, но спустя 11 лет и по настоящее время он именуется не иначе, как Белый дом. Официально такое название было произнесено Теодором Рузвельтом, 26-м Президентом государства.
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