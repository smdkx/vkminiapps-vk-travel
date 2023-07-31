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
    Icon24PlaceOutline,
    Icon24CarOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class NatureInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/7dd4333ad49dd22c/original/Komarovo-Lenoblast-Unsplash.jpg?resize=1800px:1800px&quality=100",
                "https://peterburg.center/sites/default/files/1024px-park_byvshey_villy_reno_v_komarovo.jpg",
                "https://peterburg.center/sites/default/files/komarovskiy_bereg7.jpg",
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
                    Экологическая тропа «Комаровский берег»
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
                            Вдоль Приморского шоссе между Морской и Спортивной улицами поселка Комарово в Курортном районе СПБ. 50 км от центра города
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Выйти через лес к Финскому заливу другим человеком
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Экотропа в Комарово — настоящий «зеленый музей» под Питером, где все экспонаты создала сама природа. <p />
                            Трехкилометровая тропинка петляет между вековыми елями, мимо причудливых северных муравейников ростом с человека, литоринового уступа и каскадных прудов, оставшихся от старинного пейзажного парка. Дорога выстлана деревянными настилами, есть лавочки и беседка для отдыха, а истории о местной флоре и фауне рассказываются на лесных инфостендах по пути. <p />
                            Вход на бесплатную экотропу в Комарово — с Морской улицы, выход — на романтичный берег Финского залива.
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