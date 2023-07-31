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
    CardGrid
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/6/6f/Les_hospices_de_Beaune_%2821%29.jpg",
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
                    Отель-Дьё
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Отель-Дьё</Header>}> 
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
                            Place de l’Hopital, 1.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Здание Отеля-Дьё можно считать одной из наиболее броских достопримечательностей Лиона. Ещё бы, с учётом 50 тыс. с лишним кв. м площади и фасада длиной в 400 м, вытянутого вдоль берега Роны! Оказавшись в центре города, нельзя упустить возможность полюбоваться этим великолепным зданием. Изначально лионский Отель-Дьё был лечебницей огромного исторического значения. Выстроенное в Средние века на западном берегу Роны здание использовалось первоначально как место встреч понтификов и приют для путешествующих и местных представителей духовенства. Но после того, как в 1454 г. на работу поступил первый врач, Отель-Дьё превратился в полнофункциональный госпиталь, один из наиболее серьёзных в стране. Поскольку Лион был известен как торговый город с крупными сезонными ярмарками, множество первых пациентов больницы были иностранцами или жителями других городов. <p />
                            <b>Здание Отеля-Дьё можно считать одной из наиболее броских достопримечательностей Лиона. Ещё бы, с учётом 50 тыс. с лишним кв. м. площади и фасада длиной в 400 м!</b> <p />
                            В 17 веке, во время правления Людовика XIII и Ришелье, здание было существенно расширено, а веком спустя — ещё больше. В результате оригинальная конструкция обогатилась грандиозными крыльями и двориками, которые можно увидеть сегодня. В более позднее время, вплоть до 2010 г., в здании находился Музей гражданских хосписов с постоянной выставкой, которая рассказывала об истории и практическом применении медицины начиная со Средних веков и до наших дней. <p />
                            Отель-Дьё продолжал служить университетской больницей вплоть до 2010 г. С 2010 г. здание выведено из использования для долгосрочного реставрационного проекта, который должен закончиться в 2017 г. Отель-Дьё планируется превратить в шикарный отель. <p />
                            Часовня Отеля-Дьё полностью восстановлена, и великолепие её отделки уже открыто для глаз. Это одна из трёх барочных достопримечательностей города, которые были отреставрированы после 2000 г. Эта капелла отличается удивительно богатой отделкой, уникальной в силу использования обманных рельефов и позолоты, которая отражает свет. В часовню можно было напрямую пройти из больницы. В часовне Св. Иоанна-Крестителя есть купель, где не менее 40 тыс. лионцев были крещены с 1940 г. по 1970 г.
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