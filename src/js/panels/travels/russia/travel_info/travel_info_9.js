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
                "https://www.yuga.ru/media/a0/4f/26ee6749dba8d54484d62e3af50e8e72__3oowujb.jpg",
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
                    Парк «Ривьера»
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Парк «Ривьера»</Header>}> 
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
                            ул. Егорова, 1, Сочи, Краснодарский край, 354000
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно с 10:00 до 22:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход бесплатный, стоимость аттракционов от 30 рублей.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:78793731995">+7 (862) 264-33-77</Link> — администрация <p />
                            <Link target="_blank" href="tel:88007700723">8 800 770-07-23</Link> — дельфинарий <p />
                            <Link target="_blank" href="tel:78622644343">+7 (862) 264-43-43</Link> — океанариум <p />
                            <Link target="_blank" href="tel:+78622645561">+7 (862) 264-55-61</Link> — касса
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://park-riviera.ru">http://park-riviera.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Парк «Ривьера» один из самых популярных парков Сочи. Визитная карточка парка «Ривьера», скульптурная композиция перед входом — настоящие часы в виде золотой жемчужины, лежащей в раскрытой створке раковины. Парку 120 лет. Он был основан в 1898 году известным российским предпринимателем Василием Алексеевичем Хлудовым как парк для семейного отдыха. В 1902 году был передан во владение Сочинской городской казне. <p />
                            Парк «Ривьера» расположен почти у самого берега моря и занимает 14,7 га. Уникальный климат северного побережья Черного моря позволил создать парк с растительностью, характерной для местностей в разбросе от субтропиков до высокогорий. Именно такое богатое разнообразие флоры можно увидеть в парке Ривьера. Агавы, экзотические пальмы, бамбук, магнолии, сакура привезены сюда издалека и прижились благодаря трудам местных специалистов. Период цветения растений начинается с конца календарной зимы и продолжается до поздней осени. Пышная зелень насаждений парка укрывает от солнца, радует и создает расслабленную атмосферу курорта для отдыхающей публики.
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