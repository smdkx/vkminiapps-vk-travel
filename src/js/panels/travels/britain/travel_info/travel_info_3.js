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
                "https://fs.tonkosti.ru/c6/dj/c6djkk50u54ckgooos8s4gc8c.jpg",
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
                    Лондонский Тауэр
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Лондонский Тауэр</Header>}> 
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
                            Tower Hill EC3N 4AB
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ноябрь–февраль: Вт-Сб с 09:00 до 16:30, Вс-Пн с 10:00 до 16:30 (последний вход до 16:00). <p />
                            С марта по октябрь – на час дольше, до 18:00 (последний вход в 17:00).
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослый – £25.00. Льготный (студенты, люди старше 60 лет, инвалиды) – £20.00. Дети от 5 до 15 лет – £12.50.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+8707566060">+870 (756) 6060</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.hrp.org.uk">http://www.hrp.org.uk</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Овеянный мифами и легендами Тауэр почти тысячу лет возвышается на берегу Темзы, являясь одним из главных узнаваемых символов не только Лондона, но и всей Великобритании. <p />
                            <b>Ежегодно достопримечательность посещают около 3 млн человек. Считается, что приказ о возведении крепости отдал Вильгельм I Завоеватель, одержавший победу над войсками англосаксов в битве при Гастингсе, после чего был коронован в Вестминстере.</b> <p />
                            И хотя нормандский герцог-бастард не имел законных прав на английскую корону, благодаря силе оружия и искусной дипломатии сумел укрепиться на берегах туманного Альбиона, провозгласив себя королем Англии. <p />
                            Строительство цитадели продолжил Ричард Львиное сердце. В период его правления по периметру Тауэра возвели новые мощные линии обороны: появились дополнительные сторожевые башни, два ряда крепостных стен и глубокий ров. Каменный замок стал неприступным фортом Старого Света и сохранился до наших дней практически в первоначальном виде, так как за всю историю существования ни разу не подвергался разрушениям.
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