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
                "https://img.tourister.ru/files/2/2/4/7/2/0/4/9/original.jpg",
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
                    Абаканский зоопарк
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Абаканский зоопарк</Header>}> 
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
                            Республика Хакасия, Абакан, ул.Пушкина, 200
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Без перерывов и выходных. <p />
                            Весенне-летний период: с 9:00 до 20:00. <p />
                            Осенне-зимний период: с 10:00 до 17:00. <p />
                            Касса закрывается на 1 час раньше.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослый билет — 250 рублей; <p />
                            для детей от 3-х до 14-ти лет, пенсионеров, многодетных родителей, студентов очных отделений, военнослужащих срочной службы — 100 рублей; <p />
                            для детей до 3-х лет — бесплатно. <p />
                            Контактный зоопарк — 100 рублей и 250 рублей. Квесты — 150 рублей.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+78002226618">+7 (800) 222-66-18</Link> <p />
                            <Link target="_blank" href="tel:+73902285371">+7 (390) 228-53-71</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://abakanzoo.ru">http://abakanzoo.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            «Центр живой природы» — зоопарк в Абакане. Это один из самых крупных зоологических центров в Восточной Сибири. Занимает садово-парковую зону площадью около 5 га, расположенную в черте города-столицы Республики Хакасии. У главного входа в зоопитомник установлен своеобразный символ — фонтан со статуей в виде сидящей львицы. <p />
                            Зоопарк зародился из обычного живого уголка в 1972 году на базе абаканского мясокомбината. Он был представлен рыбками и птицами: попугаями и полярной совой. Чуть позже появились тигр (его подарил зоопарку знаменитый дрессировщик Вальтер Запашный), два льва и ягуар. Ухаживали за зверями работники предприятия, кормление осуществлялось за счет отходов от мясоперерабатывающего производства комбината. Когда завод приватизировали, зоопитомник стал государственным и приобрел название «Зоологический парк Республики Хакасия», это произошло в 1999 году. <p />
                            В 2002 году зоопарк переименован в Республиканское государственное учреждение «Центр живой природы» и до сих пор он носит это название, в этом же году парк приобрел статус члена Евро-Азиатской региональной ассоциации зоопарков и аквариумов (ЕАРАЗА). Также организация является участником программ по сохранению редких и исчезающих видов животных, членом ISIS — Международной системы учёта животных. Около 40 видов животных зоопарка занесены в Красную книгу. В частности под защитой: кот манул, капский лев, амурский тигр, бенгальский тигр, американская пума, оцелот, восточно-сибирский леопард, сервал, сокол балобан, степной орел, сапсан, могильник, беркут, утка мандаринка, пеликан, гусь-сухонос.
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