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
                "https://autotravel.ru/phalbum/91372/101.jpg",
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
                    Парк Имени И.М. Поддубного
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Парк Имени И.М. Поддубного</Header>}> 
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
                            Первомайская ул., 189, Ейск, Краснодарский край, 353690
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Парк открыт для посещения круглосуточно в течение всего года. Аттракционы в парке работают: <p />
                            в мае — с 14:00 до 20:00; <p />
                            летом — с 10:00 до 22:00; <p />
                            в сентябре — с 14:00 до 20:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход бесплатный
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+78613250268">+7 (86132) 5-02-68</Link> <p />
                            <Link target="_blank" href="tel:+78613250269">+7 (86132) 5-02-69</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://park-poddubnogo.ru/">https://park-poddubnogo.ru/</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Парк им. И.М. Поддубного является одним из старейших парков города Ейска и Кубани. Назван в честь Великого Борца, многократного чемпиона мира по классической борьбе, Заслуженного артиста РСФСР, Заслуженного мастера спорта СССР Ивана Максимовича Поддубного (1871 — 1949 гг.). <p />
                            Парк находится на первом месте по посещаемости среди учреждений культуры города Ейска. Жителям и гостям города предлагаются бесплатные концерты творческих коллективов (художественной самодеятельности и профессиональных артистов), конкурсные и игровые программы для всех возрастных категорий, организация различных праздников, зрелищ, мероприятий и народных гуляний с вручением призов и памятных подарков.
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