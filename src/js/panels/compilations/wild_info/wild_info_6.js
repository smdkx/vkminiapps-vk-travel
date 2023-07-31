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
                "https://content.skyscnr.com/m/3e8444d43a4f0c45/original/Vicunas-10.jpg?resize=1800px:1800px&quality=100",
                "https://img.lookmytrips.com/images/look7eds/image-5938d4d6ff936779d30b5197-594a0bc36545b-1ckk2u3-lbcvr.jpg",
                "https://lh3.googleusercontent.com/proxy/aQdHRGtGy1AwQvYldfeIakJ9Q33TPaatM22gY-aP2qCJurswKbegKFtqWZ8jkTiH0OdqUjVgH-JBRXnylsxRjOJ2cwQEzQ",
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
                    Дорога Инков
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
                            Лучше того момента, когда своими глазами видишь Мачу-Пикчу, может быть только путешествие к древнему городу инков по живописной тропе. Есть несколько вариантов маршрута, от однодневного похода до полного пути в 82 километра с переправой через бурные реки, прогулкой по субтропическим лесам и ночевками в горах. Какой бы ни выбрали, неизменно одно: на Тропе Инков и сам путь, и цель одинаково легендарны.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Горный хребет Кордильера-Бланка балует сногсшибательными видами и разнообразием маршрутов для трекинга. Из самых впечатляющих — Санта-Круз на 3-5 дней. <p />
                            <b>У всех свои причины лететь в Перу, но альпаки, викуньи и ламы возглавляют список каждого путешественника.</b>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Озеро Титикака, река Амазонка, плато Наска, каньон Колка, соль на террасах Салинас-де-Марас, серф-споты поселка Манкора, острова Бальестас, колоритный городок Арекипа, круговые террасы Морай, зернохранилища на склоне горы в Ольянтайтамбо.
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