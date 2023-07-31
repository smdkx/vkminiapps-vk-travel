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
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/d9/2f/2b/photo0jpg.jpg?w=1000&h=600&s=1",
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
                    Нарзанная галерея
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Нарзанная галерея</Header>}> 
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
                            Курортный б-р, 4, Кисловодск, Ставропольский край, 357744
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно: с 7:00 до 9:00, с 11:00 до 14:00, с 16:00 до 19:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+78793720352">+7(87937)2-03-52</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Нарзанная галерея по праву считается основным питьевым центром курорта. Она входит в число архитектурных памятников и является одной из самых популярных достопримечательностей Кисловодска среди туристов. Внутри галереи расположен источник Нарзана в колодце под куполом из стекла. <p />
                            Подходить и набирать воду в источнике можно неограниченное количество раз и бесплатно, единственное условие — строго запрещено набирать в бутылки, только в кружки. Если вы не прихватили емкость для питья с собой, на месте можно приобрести одноразовые стаканчики. Вода в колодце бурлит словно гейзер — это результат действия углекислого газа. <p />
                            Виды нарзана отличаются не только на вкус, но и по своим лечебным свойствам. Какую именно воду и в каких количествах пить подскажут врачи, которые бесплатно консультируют всех отдыхающих прямо в зале галереи. Помимо врачей, около бюветов на стенах также висят подробные инструкции и общие схемы лечения.
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