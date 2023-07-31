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
                "https://vokrug-nas.ru/wp-content/uploads/2017/11/Fontan-Trevi.jpg",
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
                    Фонтан Треви
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Фонтан Треви</Header>}> 
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
                            Piazza di Trevi Rome 00187 Italy
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Круглосуточно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+390667103238">+390667103238</Link> <p />
                            <Link target="_blank" href="tel:+390667103238">+390667103238</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.sovraintendenzaroma.it">http://www.sovraintendenzaroma.it</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Фонтан Треви — это одна из самых известных достопримечательностей во всей Италии, и, конечно, в Риме <p />
                            На скульптуре изображена мощная фигура морского бога Нептуна, окруженного скульптурами шторма и штиля, здоровья и богатства, лета, весны, зимы и осени. Рассматривать скульптуру фонтана можно бесконечно — неспроста архитекторы и культурологи защищают целые диссертации по одному этому фонтану. <p />
                            Говорят, что звучание падающей в фонтан воды дарит вдохновение писателям и поэтам. Может, это и слухи, но даже Н. В. Гоголь нередко прогуливался по площади Треви, любуясь амфитеатром зданий и мощной скульптурой с пенистыми струями воды. <p />
                            <b>Фонтан просто гигантский — 26 метров в высоту, и 20 метров в ширину. Эти размеры равны девятиэтажке на 4 подъезда!</b> <p />
                            Но самое удивительное в нем не размеры, и не удивительные скульптуры, а акведук, по которому в фонтан поступает вода: его построили наши потомки 19 г. до нашей эры, и он до сих пор работает (в отличии от современных водопроводов).
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