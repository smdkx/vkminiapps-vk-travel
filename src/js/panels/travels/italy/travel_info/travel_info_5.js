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
                "https://picsy.ru/images/photos/1200/1/sobor-svyatogo-marka-338503.jpg",
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
                    Собор Святого Марка (Сан Марко)
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Собор Святого Марка (Сан Марко)</Header>}> 
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
                            Piazza San Marco, Venice, Italy
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            29 октября - 15 апреля: вход в собор с 09:30 до 17:00 по будням; с 14:00 до 16:30 по выходным и праздникам. <p />
                            16 апреля - 28 октября: вход в собор с 09:30 до 17:00 по будням; с 14:00 до 17:00 по выходным и праздникам.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в собор бесплатный. <p />
                            Соборный музей — 5 евро, дети 6-18 лет — 2,50 евро <p />
                            Пала д`Оро — 2 евро, дети 6-18 лет — 1 евро <p />
                            Сокровищница — 3 евро, дети 6-18 лет — 1,50 евро <p />
                            Кампанила — 8 евро, дети 6-18 лет — 4 евро
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390412708311">+39 041 2708311</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.basilicasanmarco.it">http://www.basilicasanmarco.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Собор Святого Марка, он же Базилика Сан-Марко — главный собор Венеции и, возможно, один из самых известных соборов Италии. Он находится на площади Сан-Марко в южной части города. Собор Святого Марка представляет собой редкий пример византийской архитектуры в Старом Свете. Впрочем, он настолько уникален, что его собственный архитектурный стиль вышел далеко за рамки одного стиля. В 1987 году ЮНЕСКО включила собор Сан-Марко в перечень охраняемых объектов наравне с другими достопримечательностями Венеции. <p />
                            История Собора Святого Марка началась в 829 году, когда мощи евангелиста Марка были перевезены в Венецию из Александрии. Дело в том, что в то время в Александрии мусульмане начинают сносить христианские церкви для того, чтобы построить на их месте мечети. Венецианские купцы, узнав об этом, крадут мощи святого Марка и тайно вывозят их в Венецию. <p />
                            После перенесения мощей святой Марка замещает святого Федора на «должности» небесного покровителя города и на гербе Венеции с тех пор красуется крылатый лев — знак апостола Марка. <p />
                            Самая первая базилика, построенная для хранения мощей, была уничтожена пожаром в IX веке. В 1094 году был достроен и освящен новый собор, который мы видим и сейчас. С тех пор он несколько раз достраивался, вносились изменения во внешнюю отделку, богато украшались внутренние своды собора, однако, в своем плане он не перестраивался. <p />
                            <b>Размеры собора Святого Марка — 76,5 метров в длину, 62,5 метра в ширину. Высота собора (центрального купола) — 43 метра</b> <p />
                            Собор Святого Марка играл огромную роль в жизни Венецианской республики. Здесь короновали дожей Венеции, отсюда же они выступали перед горожанами. На площади перед собором благословляли войска и проносили стяги поверженных врагов. <p />
                            Сегодня собор Сан Марко — действующий религиозный центр не только Италии, но и всей Европы, благодаря расположенным здесь христианским реликвиям: мощам Святого Марка, главе апостола Иакова Младшего и мощам мученика Исидора.
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