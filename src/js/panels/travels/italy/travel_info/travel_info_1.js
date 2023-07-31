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
                "https://vestnik.icdc.ru/images/world/2019/2020-02-06-04.jpg",
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
                    Колизей
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Колизей</Header>}> 
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
                            Piazza del Colosseo, 1
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно — с 8:30-10:30 до 16:30-19:15 (в зависимости от сезона) <p />
                            Кассы закрываются за час до окончания работы Колизе
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            - для взрослых — 16 евро, общий для посещения Колизея и Палатина, действует в течение суток на одно посещение; <p />
                            - для взрослых — 22 евро, общий для посещения Колизей + Арена + Форум + Палатин, действителен в течении двух дней на одно посещение; <p />
                            - льготный — 2 евро, действителен для членов Европейского Союза от 18 до 25 лет; <p />
                            - бесплатно — дети до 18 лет.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390639967700">+39 06 399 67 700</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.il-colosseo.it">https://www.il-colosseo.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Колизей является одной из самых известных и посещаемых достопримечательностей Апеннинского полуострова. Монументальное сооружение античных времен располагается в историческом центре Рима, в самом сердце Вечного города. Оно поражает своим величием и сильнейшей энергетикой, вызывает желание притронуться к массивным травертиновым стенам и просто завораживает. <p />
                            Наверное самое сильное впечатление получают туристы, выходящие из метро. Перед их глазами внезапно вырастает огромная каменная глыба с зияющими арочными проемами. Но те, кто приближается к Колизею по упирающимся в Piazza del Colosseo улицам, испытывают не меньший восторг от постепенно раскрывающейся панорамы.
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