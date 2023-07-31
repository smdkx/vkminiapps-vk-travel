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
                "https://img.tourister.ru/files/2/5/1/5/1/1/7/5/clones/870_653_fixedwidth.jpg",
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
                    Международный музей шпионажа
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Международный музей шпионажа</Header>}> 
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
                            700 L'Enfant Plaza, SW, Washington, DC 20024
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно: в будни и воскресенье - с 10:00 до 18:00, в субботу - с 9:00 до 20:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослые и дети от 13 лет - $ 24,95, пенсионеры (от 65 лет) - $ 22,95, дети (7-12 лет) - $ 16,95, дети до 7 лет - бесплатно
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+12023937798">+1 (202) 393-7798</Link> — вопросы по билетам <p />
                            <Link target="_blank" href="tel:+12026540985">+1 (202) 654-0985</Link> — по предстоящим событиям <p />
                            <Link target="_blank" href="tel:+12026540943">+1 (202) 654-0943</Link> — бронь для групп
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.spymuseum.org">http://www.spymuseum.org</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Международный музей шпионажа в Вашингтоне отличается от немногочисленных «коллег», например, берлинской экспозиции, основательностью подхода. Его выставки — не просто собрание стреляющих губных помад и полых монеток для незаметной переноски чипов, а целый шпионский роман, представляющий историю и роль разведки в судьбе разных стран максимально аполитично и в то же время — достоверно. <p />
                            Разнообразие отделов постоянной экспозиции не может не удивлять. Помимо ожидаемых коллекций спецприспособлений и рассказа о шифрах посетителей ждет, например, история похищения у Китая секретов изготовления фарфора и шелка. А есть раздел выставки, который раскрывает способы использования разведки для влияния на решения политических лидеров. Имеются артефакты, ставшие свидетелями громких шпионских провалов. Кроме того даже оборудован сектор, посвященный агентам-предателям, некоторых из которых так и не удалось поймать. <p />
                            Это место, расположенное всего парой кварталов южнее Национальной Аллеи с ее монументами, музеями и мемориалами, является настоящим раем как для поклонников конспирологии, так и для любителей захватывающих историй. Но и всем остальным будет не менее интересно — каждый гость, попадая в музей, становится участником «операции под прикрытием» и, осматривая выставку, с головой погружается в мир разведки, выполняя несложные, но интересные задания. В результате на выходе можно получить не только багаж впечатлений, но и оценку шпионских талантов. А для тех, кто хочет их улучшить, проводятся специальные события: лекции, мастер-классы, встречи с бывшими сотрудниками разведки. Посетить их можно за отдельную плату.
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