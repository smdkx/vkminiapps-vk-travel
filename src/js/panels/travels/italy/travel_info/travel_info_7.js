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
                "https://planetofhotels.com/sites/default/files/attracrions/sobor_duomo_v_milane-2.jpg",
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
                    Миланский собор Дуомо
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Миланский собор Дуомо</Header>}> 
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
                            Piazza del Duomo, 20123
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Собор — по сезонам: в высокий с 9:00 до 19:00; низкий — будни с 9:30 до 16:30, в субботу-воскресенье и праздники — с 9:00 до 17:00. 
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Собор — 3€ (дети — 2€). Террасы на крыше при подъеме пешком — 10€ (дети — 5€), на лифте — 14€ (дети — 7€). Комплексный билет (собор+музей+террасы+археологическая зона) — 17€ (дети — 9€). Fast-Track — от 25€ (дети — 13€).
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390286463456">+39 (02) 86 46 34 56</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.duomomilano.it">http://www.duomomilano.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Миланский собор (Дуомо) — действующий храм Рождества Пресвятой Богородицы, где проходят богослужения как для католиков, так и для прихожан русской православной церкви. Грандиозное сооружение, облицованное белым кандолийским мрамором, поражает архитектурным великолепием. Строительство началось в эпоху Средневековья и продолжалось 600 лет, официально завершившись лишь в 1965 году. <p />
                            <b>Здание способно вместить одновременно 40 000 человек.</b> <p />
                            Под арочным сводом над алтарем хранится христианская святыня — гвоздь с распятия Иисуса. Реликвию демонстрируют верующим раз в году, 14 сентября. В этот день миланский архиепископ поднимается к кресту на платформе в виде облака с ангелами. По легенде, подъемный механизм придумал и расписал Леонардо Да Винчи.
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