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
                "https://www.amigo-s.ru/content-images/026b188de0d5948294c282be042c9972.jpg",
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
                    Кисловодский национальный парк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Кисловодский национальный парк</Header>}> 
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
                            г. Кисловодск, бульвар Курортный, д. 21
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Круглосуточно, канатная дорога - 10:00-13:00, 14:00-17:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в парк - бесплатно. Проезд по канатной дороге: 200 рублей для взрослого, 120 рублей для ребенка (5-10 лет).
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:78793731995">+7 879 373-19-95</Link> <p />
                            <Link target="_blank" href="tel:78652257708">+7 865 225-77-08</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://kispark.ru">http://kispark.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Парк является уникальным, редчайшим по красоте памятником ландшафтной архитектуры, подлинным лечебно-оздоровительным дендрарием. Здесь собраны местные и экзотические виды деревьев и кустарников. Зеленые насаждения парка, наряду с гидроминеральными и климатическими ресурсами, создают необходимый уровень комфортности для лечения и оздоровительного отдыха. <p />
                            Парк был основан в 1823 году. Наличие в нём минеральных вод привлекало отдыхающих и желающих поправить здоровье, однако место не было достаточно красивым для прогулок. В связи с этим было решено озеленить участок. Со временем территория парка разделилась на Верхний, Средний и Нижний парки. <p />
                            Кисловодский парк весьма популярен для прогулок не только среди отдыхающих на курорте, но и среди местного населения. В летнее время здесь можно спрятаться от сильного зноя, полюбоваться красотой цветов в Долине Роз, расположенной в центре парка.
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