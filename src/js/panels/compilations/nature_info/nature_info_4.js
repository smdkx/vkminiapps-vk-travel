import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardScroll,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24CarOutline,
    Icon24ArticleOutline,
    Icon24LinkCircle
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class NatureInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/45f533110987feba/original/Sablino-Caves-Rock-Painting.JPG?resize=1800px:1800px&quality=100",
                "https://radioiskatel.ru/wp-content/uploads/2018/12/sablinskie-peschery-4.jpg",
                "https://educlub.pro/images/004/287/873/4287873/original/137508.jpg",
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
                    Саблинские пещеры
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Фотографии</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[1]] })}
                        image={this.state.images[1]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[2]] })}
                        image={this.state.images[2]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                <Group header={<Header mode="secondary">Где располагается</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            У поселка Ульяновка Тосненского района Ленинградской области. 40 км от Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Очутиться в таинственных пещерах среди красных скал и голубых водопадов
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Саблинская заповедная зона находится совсем рядом с Питером, а кажется, будто на другой планете или как минимум в другой эпохе. Говорят, место окунает в атмосферу ледникового периода, — и в это легко верится. На территории в почти 330 гектаров сверкают кембрийскими и ордовикскими породами каньоны рек Саблинка и Тосна, серебрятся водопады и манят путешественников пещеры и древние курганы. <p />
                            Когда-то люди вырыли Саблинские гроты для добычи кварца, теперь сюда водят туры выходного дня. Местные дали пещерам забавные названия: кроме «Жемчужной» и «Левобережной», можно залезть в «Штаны» и исследовать «Веревку». Еще есть малые пещеры — «Трехглазка», «Графский грот», «Пляжная», «Мечта», «Санта-Мария» и «Лисьи норы». <p />
                            <b>Посмотреть Саблинские пещеры можно только по предварительной записи.</b> <p />
                            Кроме загадочных гротов с копиями наскальных рисунков из башкирской Каповой пещеры и французской пещеры Ляско, вы увидите подземное озеро Капитана Немо, парк древних обитателей Земли, ночниц из Красной книги Ленобласти и спящих бабочек с бриллиантами росы на крылышках. Другие интересности — место стоянки Александра Невского перед битвой со шведами и бывшая усадьба графа Алексея Константиновича Толстого «Пустынька», где «родился» Козьма Прутков.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://sablino.net/index.php">Официальный сайт Саблино</Link>
                    </MiniInfoCell>
                </Group>

                <FooterInfo />

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(NatureInfo);