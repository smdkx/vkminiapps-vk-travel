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
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://paris-life.info/wp-content/uploads/2018/10/Kak-zai--ti-v-Luvr-byistro-i-bez-ocheredi.jpg",
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
                    Лувр
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Лувр</Header>}> 
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
                            Rue de Rivoli, 75001 Paris
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Пн, чт, сб, вс с 09:00 до 18:00. <p />
                            Ср, пт с 09:00 до 21:45. <p />
                            Вт — выходной. <p />
                            Закрыто 1 января, 1 мая, 25 декабря
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            17 евро, посетители до 18 лет – бесплатно. Бесплатное посещение в День взятия Бастилии (14 июля). Подробнее о стоимости – на оф.сайте (вкладка Admission).
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.louvre.fr">http://www.louvre.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ни один музей мира не может сравниться по популярности с Лувром, который ежегодно посещают порядка 10 млн человек. В первую очередь посетители стремятся увидеть загадочную «Джоконду», легендарный эталон античной красоты — Венеру Милосскую и мраморную фигуру богини победы Ники Самофракийской. Но если у скульптур можно спокойно встать и погрузиться в созерцание, то у подлинника портрета Моны Лизы это сделать невозможно. Чтобы оказаться у защитного ограждения, придется протискиваться сквозь толпу туристов, делающих селфи. Небольшое полотно (размер — 77×53 см) размещено под пуленепробиваемым стеклом, дающим отблески, поэтому разглядеть черты с расстояния нескольких метров будет проблематично. Тех, кто рассчитывал испытать эстетический восторг, ждет неминуемое разочарование. Однако в Лувре есть и другие картины Леонардо да Винчи, и их можно рассмотреть вблизи: «Мадонна в гроте», «Благовещение», «Прекрасная Ферроньера», «Иоанн Креститель», «Вакх», «Святая Анна с Мадонной и младенцем Иисусом».
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