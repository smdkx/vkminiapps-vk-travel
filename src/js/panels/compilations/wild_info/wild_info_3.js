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
                "https://content.skyscnr.com/m/16290b261e01a04d/original/GettyImages-514632226.jpg?resize=1800px:1800px&quality=100",
                "https://www.rgo.ru/sites/default/files/styles/head_image_article/public/img_1953.jpg?itok=aL0oPuk-",
                "https://androssov.com/images/big/wt1.jpg",
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
                    Тихоокеанская тропа
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
                            В США нет проблем с идеями, куда поехать на природу — сложнее выбрать из десятков красивейших национальных парков мира. Чтобы оказаться в диких условиях, достаточно приехать в один из заповедников и выйти на трекинговую тропу. <p />
                            <b>Чтобы найти потрясающие маршруты для трекинга, в США достаточно отправиться в любой национальный парк. А еще интереснее — пройти сразу через несколько заповедников.</b> <p />
                            Если душа жаждет великих свершений, присоединяйтесь к смельчакам на Маршруте тихоокеанского хребта. Популярность треку принесла голливудская экранизация книги «Дикая», но и без того маршрут легендарный. Тропа тянется по горам вдоль тихоокеанского побережья США от границы с Мексикой до самой границы с Канадой и проходит вдали от крупных населенных пунктов — только вы и дикая природа. <p />
                            Чтобы полюбоваться красотами Тихоокеанской тропы, необязательно одолевать все четыре с лишним тысячи километров. На маршруте есть участки для коротких вылазок на природу и даже треки выходного дня.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Тропа Хейдьюк пролегает через два штата и шесть национальных парков, взбирается на гору Эллен и спускается на дно Гранд-Каньона. Можно одолеть все 1307 километров или один из 14 отрезков пути. Cамым-самым считается второй участок вдоль реки Колорадо. <p />
                            <b>Еще один легендарный маршрут для трекинга США — Аппалачская тропа через 14 штатов.</b> <p />
                            Не столь грандиозные, но не менее живописные идеи для походов — горные маршруты в национальном парке Роки-Маунтин, каньоны парка Зайон дикая природа Гранд-Титона.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Кинематографичные места Нью-Йорка, казино и огни Лас-Вегаса, Белый дом в Вашингтоне, фестиваль Burning Man в Неваде, «Аллея звезд» в Лос-Анджелесе, Ниагарский водопад, Французский квартал в Новом Орлеане, «Диснейленд», природа Гавайских островов, пляжи Калифорнии и Флориды, Золотые ворота Сан-Франциско.
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