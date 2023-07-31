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
                "https://walkday.ru/upload/iblock/1bf/1bfb4c97c5b5ce7775a3bd8c41ed821d.jpg",
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
                    Парк Монрепо
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Парк Монрепо</Header>}> 
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
                            Парк Монрепо, д. 19, г. Выборг, Ленинградская область, 188800
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход в парк открыт ежедневно, без выходных и праздников: <p />
                            в летний период (с 1 мая по 30 сентября)  с 09:00 до 20:00 ч. <p />
                            С 20-00 до 22-00 ч. парк открыт только на выход. <p />
                            в осенне-зимний период (с 1 октября по 30 апреля)  с 9:00 до 18:00 ч. <p />
                            С 18-00 до 21-00 ч. парк открыт только на выход   
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослый билет - 100 рублей (билеты без льгот можно приобрести в терминале рядом с кассой) <p />
                            Лица от 16 до 18 лет – 50 рублей <p />
                            Пенсионеры - 50 рублей <p />
                            Лица до 16 лет (независимо от гражданства) и льготные категории граждан (Приложение № 1 к настоящему приказу) - бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+78137825997">+7 813 782-59-97</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.parkmonrepos.org/">http://www.parkmonrepos.org/</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Редкой красоты скальный пейзажный парк XVIII-XIX веков расположен на землях бывшего частного поместья, владельцами которого на протяжении 150 лет были бароны фон Николаи, служившие России на поприще просвещения и дипломатии. <p />
                            Ландшафт острова Твердыш, на котором находится музей-заповедник, уникален. По мнению геологов, скалы острова являют собой мощные выходы гранита на поверхность, а их живописный и необычный рельеф, дающий множество поводов для версий и фантастических легенд, сформирован ледником и последующими постледниковыми землетрясениями. <p />
                            Вот в таком удивительном месте и был создан парк Монрепо, сразу прославившийся как один из самых красивых парков Европы. И это сочетание необычной природы и вдохновенной романтики пейзажного парка придает Монрепо особую притягательность <p />
                            В Монрепо бывали и им восхищались люди, без которых невозможно представить русскую историю и культуру – от членов Российского императорского дома до Михаила Глинки и Осипа Мандельштама. Список велик – и почти каждое имя в нем – это отдельная глава в истории России.
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