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
                "https://img.tourister.ru/files/2/5/4/8/0/3/3/0/original.jpg",
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
                    Киево-Печерская лавра
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Киево-Печерская лавра</Header>}> 
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
                            Улица Лаврская, 15, Киев, Украина, 01015
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Монашеская обитель открыта с 06:00 до 20:00, пещеры можно посетить с 09:00 до 16:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в Нижнюю часть бесплатный, в Верхнюю (музейную) — платный и составляет 100 гривен, экскурсионное обслуживание — 120 гривен, индивидуальное экскурсионное обслуживание — 1 000 гривен, семейный билет — 240 гривен.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:380442543390">+38(044)254-33-90</Link> — паломнический отдел <p />
                            <Link target="_blank" href="tel:380442803071">+38(044)280-30-71</Link> — экскурсионное бюро заповедника
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://lavra.ua">http://lavra.ua</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Киево-Печерская лавра — особо почитаемый религиозный комплекс, обладающий важным историческим и духовным значением. На территории Украины насчитывается всего три лавры, освящённых в честь Успения Богородицы, и эта монастырская обитель — одна из них. Впрочем, ценность православной святыни признают не только на её родине — в 1990 году ЮНЕСКО включило монастырь в список Всемирного наследия. <p />
                            Паломники знают, что лавра считается третьим Уделом Богородицы. Так называют землю, которая находится под особым покровительством Божией Матери. Кроме того, сооружение — одна из первых обителей Древней Руси. <p />
                            История будущей святыни началась в 1051 году и тесно связана с монахами Антонием и Феодосием, поселившимися в пещерах. С течением времени количество их последователей увеличивалось, и тогда иноки решили возвести кельи и церковь Успения Пресвятой Богородицы. Обитель разрасталась и вскоре превратилась в монастырь. Религиозный комплекс стали звать «Печерским», что по-древнерусски означало «пещерный». <p />
                            Монастырь не раз осаждали и грабили. Лавра страдала от набегов половцев, торков, монголо-татар. В 1596 году её безуспешно пытались захватить униаты. Не менее богатыми на печальные события были и последующие столетия. Немало перипетий на долю обители выпало в советское время: братию расстреляли, а комплекс ликвидировали, затем превратили в полицейский участок. В 1941 году немецкие оккупанты взорвали Успенский собор.
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