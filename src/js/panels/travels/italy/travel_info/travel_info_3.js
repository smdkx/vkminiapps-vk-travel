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
    CardGrid
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://planetofhotels.com/sites/default/files/ispanskaya_lestnica_restavraciya.jpg",
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
                    Испанская лестница
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Испанская лестница</Header>}> 
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
                            Piazza di Spagna, Roma, Italy
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Испанская лестница в Риме — один из символов Вечного города наравне с фонтаном Треви и Пантеоном. Эта барочная лестница была признана одной из красивейших в Европе. Она включает 138 ступеней разной высоты, которые расширяются в нижней части, образуя красивые «рукава». Достопримечательность притягивает всех туристов до единого. «Посидеть на ступеньках Испанской лестницы» — такой же обязательный пункт программы «почувствовать себя жителем Рима», как и «бросить монетку в фонтан Треви». <p />
                            Знаменитая лестница находится на площади Испании в районе «Марсово поле» — это самый центр города. Здесь же расположены самые дороги бутики известных мировых марок. <p />
                            Испанская лестница хороша в любое время года — летом здесь можно спрятаться в тени от полуденного солнца, зимой увидеть ее, украшенную рождественскими фонариками, а весной — розовыми цветами в честь Пасхи. Так как это чрезвычайно популярное туристическое место, постарайтесь попасть сюда ранним утром, это единственное время дня, когда вы сможете сфотографировать Испанскую лестницу почти без людей.
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