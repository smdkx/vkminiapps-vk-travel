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
                "https://content.skyscnr.com/m/2014aa8557aa1a93/original/field_lavender_tasmania_australia.jpg?resize=1800px:1800px&quality=100",
                "https://incomartour.com.ua/mediafiles/images/places/20190521174936/thumbs/2%20(2)-tmb-1200x628xfill.jpg",
                "https://lh3.googleusercontent.com/proxy/X0_M08meSxEKSvuEsLuvOhRYj_U5oOv9Jv76L4Q4kxwwX47rWbpl1K4M1k83-JC683-Dv8rozUWvEpg72aao",
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
                    Тасмания
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
                            Австралия славится на весь мир оригинальностью животного и растительного мира, но Тасмания — диковинка даже по австралийским меркам. Больше трети этого острова покрывают дождевые леса, половина из них относится к национальным паркам, а среди тасманийских животных и растений невероятно количество эндемиков — видов, которых нет больше нигде на целом свете. <p />
                            <b>Австралия, где есть все, от кенгуру до тасманийского дьявола, от пустынь до цветущих полей, — одна из самых ярких идей, куда поехать на природу!</b> <p />
                            Оверленд Трек — роскошная возможность с головой погрузиться в великолепный мир Тасмании. Маршрут рассчитан на 5-6 дней и охватывает все контрасты острова, от горы Крейдл до озера Сент-Клэр, от эвкалиптовых рощ и альпийских лугов до дождевых лесов и извилистых рек. <p />
                            При этом на тропе есть место импровизации: например, можно между делом покорить высочайшую вершину Тасмании Оссу или продлить трек до залива Синтия — если повезет, повстречаете утконоса.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Альтернативный красивый маршрут</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Трек Биббулмун в Западной Австралии — менее популярная, но тоже очень красивая тропа, где можно полюбоваться заповедными лесами, идиллическими пляжами и увидеть дельфинов, китов и тюленей.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Что еще посмотреть на Камчатке</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ViewOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Сиднейская опера, хипстерский Мельбурн, Голубые горы в часе езды от Сиднея, Большой Барьерный риф, винодельни Аделаиды, пустыня Пиннаклс, музей тюрьмы Порт-Артура, серф-споты Золотого побережья.
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