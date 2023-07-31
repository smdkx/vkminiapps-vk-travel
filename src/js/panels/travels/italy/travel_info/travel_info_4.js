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
                "https://www.architime.ru/specarch/filippo_calendario/2.jpg",
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
                    Дворец Дожей
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Дворец Дожей</Header>}> 
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
                            San Marco 1, piazzetta San Marco, 2 (вход с Riva degli Schiavoni), вапоретто S.Zaccaria
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            1 апреля-31 октября: вс-чт с 8:30 до 21:00, пт-сб с 8:30 до 23:00. <p />
                            1 ноября-31 марта: ежедневно, с 8:30 до 19:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            25 евро (вместе с музеями Сан-Марко), льготный билет — 13 евро
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390412715911">+39 (041) 271 59 11</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://palazzoducale.visitmuve.it">https://palazzoducale.visitmuve.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Дворец Дожей по-итальянски звучит как Палаццо Дукале (Palazzo Ducale). Это одна из главных достопримечательностей Венеции, великий памятник итальянской готики. Расположен на площади Святого Марка. <p />
                            На протяжении многих веков Палаццо Дукале (он же Дворец дожей) служил резиденцией Венецианского правительства, успел побывать местом для заседаний советов республики, Сенатом, Верховным судом, Министерством и даже пристанищем тайной полиции. А на нижнем этаже размещалась еще и канцелярия, морское ведомство, служба цензоров и конторы юристов. <p />
                            Во дворце есть и много других необыкновенных залов — например, Зал Карт, стены которого украшает огромное количество красивейших карт, выполненных лучшими итальянскими мастерами. На верхних этажах находятся два парадных зала, подняться к которым можно по Золотой лестнице, украшенной позолоченной лепниной.
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