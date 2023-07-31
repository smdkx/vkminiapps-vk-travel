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
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://www.tourprom.ru/site_media/images/upload/2016/3/31/poiphoto/kuznya_1.jpg",
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
                    Музей кузнечного дела
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Музей кузнечного дела</Header>}> 
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
                            ул. Строителей, 72, Белокуриха, Алтайский край, 659900
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно, 10:00 – 19:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            100 руб.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+79609659486">+7 (960) 965-94-86</Link> — Анна Билецкая
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Летом 2016 года в курортном городе Белокуриха Алтайского края открылся единственный в сибирском регионе музей кузнечного дела. Зачинателем нового культурного объекта стала молодая девушка — кузнец Анна Билецкая. <p />
                            Музей располагается недалеко от курортной зоны Белокурихи на территории дома, в котором проживает семья Билецких. В отдельном одноэтажном помещении разместились экспонаты. Рядом находится кузница, в которой проходят мастер-классы по ковке. <p />
                            <b>Анна Билецкая</b> <p />
                            Ее приход в профессию и освоение нелегкого мужского ремесла был во многом случайным. Она выросла в Астрахани, получила юридическое образование, но в возрасте 26 лет вместе с семьей перебралась на Алтай. Здесь, помимо основной работы, занималась в художественной школе и пела в местном ансамбле. Однажды по творческой надобности она попала в кузнечную мастерскую, где и влюбилась в новое ремесло, хотя долгое время строила планы стать гончаром. Через неделю уволилась с работы и начала новый путь, став уникальным кузнецом с женским лицом. <p />
                            Анна быстро училась, выковывая из грубого металла оригинальные красивые изделия. Ее работы мгновенно покорили жителей Алтайского края, а затем России и всего мира. Чтобы посмотреть, как женщина-кузнец делает очередное чудо, приезжают поклонники из Европы и Америки.
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