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
                "https://fs.tonkosti.ru/13/tj/13tj9u0b8k1wcck8g8g8ggk0w.jpg",
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
                    Дворец Земледельцев
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Дворец Земледельцев</Header>}> 
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
                            ул. Федосеевская, 36, Казань, Респ. Татарстан, 420111
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С 8:00 до 16:00 ежедневно. 
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+79831708963">+7 983 170-89-63</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Одна из неоднозначных, но чрезвычайно эффектных современных достопримечательностей центра Казани — Дворец земледельцев, построенный в 2010 году. С северной стены Казанского кремля открывается популярный у туристов панорамный вид на Дворец и набережную реки Казанки. Название связано с тем, что во Дворце земледельцев располагается Министерство сельского хозяйства республики Татарстан. <p />
                            <b>До сих пор не умолкают споры о целесообразности строительства подобного монументального сооружения в историческом центре Казани. Звучат обвинения в том, что Дворец земледельцев — уродливый архитектурный монстр, диссонирующий с культурно-исторической средой города.</b> <p />
                            Как бы то ни было, но Дворец земледельцев построен и притягивает к себе всеобщее внимание своими огромными размерами, но главное — эклектичным роскошным экстерьером стиля бозар, смеси французского барокко и итальянского ренессанса. Заимствованные архитектурные элементы ампира и классицизма, а также форма здания с центральным куполом и двумя симметричными крыльями отдаленно копируют парижский Малый Дворец (Пети Пале) и императорский Хофбург в Вене. <p />
                            В темное время суток Дворец земледельцев красиво подсвечивается — это придает зданию таинственный облик. Бронзовое 20-метровое дерево в центральной части фасада освещается зелеными огнями, имитирующими листву.
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