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
                "https://img.tourister.ru/files/1/5/8/8/0/0/7/9/original.jpg",
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
                    Долина Роз
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Долина Роз</Header>}> 
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
                            г. Кисловодск, бульвар Курортный, д. 21
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно <p />
                            Круглосуточно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в парк - бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:78652257708">7 865 225-77-08</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://kispark.ru">http://kispark.ru</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Долина Роз в Кисловодске располагается на территории поистине уникального лечебно-оздоровительного Курортного парка, широко известного своими прогулочными тропами-терренкурами, чистейшим воздухом и минеральным источником Нарзан. Розарий по праву считается жемчужиной этой природной зоны. Сюда любят приходить местные жители и заезжие курортники. <p />
                            На территории площадью 2 га расположено несколько зональных участков, объединенных общей композицией. Внимание привлекает клумба с огромной розой, разбитый пешеходными дорожками цветочный ковер, напоминающий шахматную доску, круглый розарий с отходящими от него радиальными лучами и главная аллея, окруженная двумя рядами высоких деревьев. Здесь высажено более 35 сортов роз, периоды цветения которых, плавно сменяя друг друга, длятся с середины июня до конца сентября. <p />
                            Наиболее эффектно Долина Роз выглядит в июле — начале августа. В это время она превращается в буйно цветущий разноцветный ковер, а главный «бутон» приобретает яркие краски. Каждый год он меняет свои оттенки благодаря тому, что засаживается однолетними растениями. Четкие формы огромной розы сформированы низкорослыми кустарниками и белоснежным фоном из гранитной крошки. Местная достопримечательность появилась в ходе обновления Долины в 2012 году и сразу же сумела завоевать народное признание.
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