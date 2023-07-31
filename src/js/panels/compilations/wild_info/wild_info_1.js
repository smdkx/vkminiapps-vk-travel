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
    CardScroll
} from "@vkontakte/vkui";

import { 
    Icon24ArticleOutline,
    Icon24CarOutline,
    Icon24ViewOutline
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/69974f316b75f5f6/original/Landscape-of-Kamchatka.jpg?resize=1800px:1800px&quality=100",
                "https://minvr.gov.ru/upload/iblock/70c/kamchatka.jpg",
                "https://pkgo.ru/upload/iblock/3e2/3e2de0881c5dc89ea28f7da3af72a974.jpg",
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
                    Камчатка
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

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            На Камчатке необычно все: в полях бурлят и пузырятся гейзеры, в озерах рыбачат медведи, а вулканам дают «домашние» прозвища. <p />
                            Из самых доступных для близкого знакомства — Авача, Авачинский вулкан. Подъем на вершину займет 5-6 часов и по плечу даже начинающему походнику. На спуске заодно полюбуетесь соседом Горелой сопки, Корякским вулканом. <p />
                            Закаленные походной жизнью искатели приключений покоряют Ключевской — самый высокий активный вулкан Евразии. Если чувствуете себя неуверенно, лучше пойти с инструктором: даже в групповом походе на диких просторах Камчатки нет ощущения скученности.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Толбачинское кольцо — отличная возможность полюбоваться Ключевским парком и самыми красивыми вулканами без сложных подъемов и перепадов высот. Даже в пик сезона в августе здесь меньше туристов, чем у домашней группы вулканов и в Долине гейзеров. А в сентябре велики шансы не встретить на маршруте никого, кроме росомах, лис, зайцев, медведей и евражек.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Долина гейзеров, термальные источники, Халактырский пляж с черным песком, Курильское озеро, этнографический музей и «Вулканариум».
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

export default connect(null, mapDispatchToProps)(TravelInfo);