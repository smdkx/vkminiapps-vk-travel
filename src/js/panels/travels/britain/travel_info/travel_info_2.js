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
                "https://img.gazeta.ru/files3/846/10784846/upload-shutterstock_457813381-pic4_zoom-1500x1500-51560.jpg",
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
                    Букингемский дворец
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Букингемский дворец</Header>}> 
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
                            SW1A 1
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Июля-август: 9:30-18:30. Последний вход в 17:15. <p />
                            Сентябрь-октябрь: 9:30-18:30. Последний вход в 16:15.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            £26.50, студенты и пенсионеры - £24, дети до 17 лет - £14,50, дети до 5 лет - бесплатно, семейный (2 взрослых и 3 детей до 17 лет лет) - £67,50.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+4402079304832">(+44) (0)20 7930 4832</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.royal.uk">https://www.royal.uk</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Букингемский дворец (на английском — Buckingham palace) — один из самых важных символов Лондона и одна из его известнейших достопримечательностей. Это официальная резиденция монархов Великобритании, где сейчас живет действующая королева Соединенного Королевства Елизавета II, а также принц Филипп, герцог Йорский Эндрю и граф и графиня Уэссекские. Помимо этого, здесь проводятся официальные приемы и церемонии и банкеты, и количество гостей дворца за лето достигает числа в 50000. <p />
                            Несмотря на то, что дворец располагается в центре Лондона, в Вестминстере, каждый год его посещает не более 30000 туристов. Разумеется, дело не в отсутствии интереса, а в том, что посещение дворца разрешено лишь в августе и сентябре, когда Королева уезжает отсюда. Поэтому далеко не всем гостям Лондона удается побывать в Букингемском дворце. Круглый год к посещению открыты действующие королевские конюшни.
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