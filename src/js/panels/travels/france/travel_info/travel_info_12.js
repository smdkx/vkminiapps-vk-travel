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
    Icon24PhoneOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://st.planeta.turtella.ru/3/l3506.jpg",
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
                    Дворцово-парковый ансамбль Лоншан
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Дворцово-парковый ансамбль Лоншан</Header>}> 
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
                            Boulevard Jardin Zoologique, 13004 Marseille
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+33491552551">+33491552551</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="https://www.marseille.fr">https://www.marseille.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Дворец Лоншан – это памятный комплекс, восхваляющий воду. Дело в том, что именно ее долгие столетия не хватало жителям Марселя. Лишь в 1829 г. ситуация изменилась — был построен Марсельский канал, по которому вода поступала в город. В честь этого в 1839 г. герцогом Орлеанским в фундамент дворца был заложен первый камень, однако лишь в 1862 г. началось его полноценное строительство (архитектор — Анри-Жак Эсперандьё). <p />
                            Сооружение представляет собой дворцово-парковый комплекс, ставший своеобразным гимном природе, воде и науке. В центре ансамбля возвышается Водный замок – скульптурная композиция, объединяющая величественную Триумфальную арку и большой фонтан. От арки расходятся полукругом колоннады со скульптурами, олицетворяющими урожай и богатство природы. <p />
                            По бокам от центральной композиции расположились здания Музея естественной истории и Музея изящных искусств. В первом музее демонстрируются коллекции чучел и костей животных, работает экспозиция, посвященная истории Прованса. Во втором учреждении можно ознакомиться с живописью, графикой и скульптурой итальянских и французских мастеров XVI-ХIX веков. Ансамбль дворца Лоншан включает также старинную обсерваторию и Зоологический сад. В настоящее время животные в саду не содержатся и он выполняет сугубо декоративную функцию.
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