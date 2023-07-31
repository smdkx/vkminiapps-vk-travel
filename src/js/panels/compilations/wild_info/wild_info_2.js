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
                "https://content.skyscnr.com/m/4eb9d2243e0dcafa/original/GettyImages-162233569.jpg?resize=1800px:1800px&quality=100",
                "https://nicko.ru/wp-content/uploads/2016/12/108.jpg",
                "https://sport-marafon.ru/upload/iblock/b0c/0162-001.jpg",
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
                    Гималаи
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
                            Разноцветные молитвенные флажки и крутящиеся барабанчики, дал-бат, яблочный пирог и горячий лимонный напиток с имбирем и медом — после любого трека в Непале эти образы рождают в душе особый трепет. <p />
                            Если чувствуете, что после закалки карантинным годом вам и трек к Эвересту по плечу, самое время пойти по маршруту к базовому лагерю. Редкая возможность оказаться на одном из самых популярных походных путей мира без толп туристов. Тем более что хоть трек в Гималаях и требует доли выносливости, жить в палатке и готовить на костре не придется. На маршруте останавливаются в гестхаусах-лоджах, где найдутся и термос с травяным чаем, и теплая печь, и одеяло. <p />
                            <b>Непал — один из проверенных вариантов, куда поехать на природу, чтобы вернуться из путешествия новым человеком.</b>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            трек в Верхний Мустанг точно входит в список самых загадочных маршрутов мира. До 1992 года долина была закрыта, а сейчас для посещения территории иностранцам нужно получить специальное разрешение непальского правительства и уплатить сбор. До 2008 года Верхний Мустанг был отдельным государством, так что кроме потрясающей природы здесь сохранилась самобытная культура.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ступа Боднатх и храм Пашупатинатх в Катманду, озеро Фева (Пхева) в Покхаре, поселок Лумбини, храм Джанаки-Мандир в Джанакпуре, национальный парк Читван, городок Бхактапур.
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