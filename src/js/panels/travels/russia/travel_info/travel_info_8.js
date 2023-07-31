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
                "https://geektrips.ru/wp-content/uploads/2019/04/adlerskij-okeanarium.jpg",
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
                    Адлерский океанариум
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Адлерский океанариум</Header>}> 
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
                            г. Сочи, Адлерский р-н, ул. Ленина, 219а/4 «Курортный городок»
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            с 10:00 до 18:00 без перерыва и без выходных
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослый билет: 950 руб. <p />
                            Детский билет (c 4-х до 11-ти лет включительно): 550 руб. (обязательно предъявление документа, подтверждающего возраст ребенка) <p />
                            Льготный билет: 400 руб. (для граждан РФ при предъявлении справки МСЭ) <p />
                            Дети до 4-х лет БЕСПЛАТНО (при предъявлении документа, подтверждающего возраст, достаточно копии). 
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:78622463356">+7 (862) 246-33-56</Link> <p />
                            <Link target="_blank" href="tel:2463356">246-33-56</Link> <p />
                            <Link target="_blank" href="tel:2463354">246-33-54</Link> <p />
                            <Link target="_blank" href="tel:2463585">246-35-85</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.sochiaquarium.ru/">http://www.sochiaquarium.ru/</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Океанариум Sochi Discovery World Aquarium отрылся 26 декабря 2009 года. В проектировании и оснащении океанариума принимали участие специалисты из Австралии, Новой Зеландии,  Китая и других стран. В океанариуме общей площадью 6000 кв. м расположена 31 аквариумная зона, общим объемом 5 млн литров воды. В нём обитают  более 400 видов рыб с разных водоемов мира. В экспозиции есть так же уникальное акриловое окно общей площадью 24 кв м и акриловый тоннель диной 44 м находится, в котором абсолютно безопасно и увлекательно. <p />
                            Тайны подводного мира во все времена привлекли к себе людей, ведь половина всех позвоночных, живущих на нашей планете - это рыбы. Появились они более 350 млн. лет назад, в нашем подводном музее обитатели представлены в широком многообразии. Вся экспозиция  Sochi  Discovery  World Aquarium очаровывает нежным плеском пресных «озер», мостиками, тропическим лесом, скалами и водопадами Прогуляться по дну океана стало возможным в океанариуме Sochi Discovery World Aquarium!
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