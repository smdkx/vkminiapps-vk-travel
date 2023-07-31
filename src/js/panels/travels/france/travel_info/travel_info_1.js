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
                "https://slon.fr/wp-content/uploads/2020/07/393721-svetik.jpg",
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
                    Эйфелева башня
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Эйфелева башня</Header>}> 
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
                            Champ de Mars, 5 Avenue Anatole France
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            С июня по сентябрь: лифты: 09:30-23:45 (последний вход – до 23:00 и до 22:30 на вершину); часы работы лестниц: 09:30-23:45 (последний вход – до 22:30). <p />
                            Время работы сокращается с сентября по май и во время крупных праздников.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Билет на лестницу до 2 уровня: 10,50€ для взрослых; 5,20€ для молодежи 12-24 лет; 2,60€ для детей 4-11 лет и инвалидов. <p />
                            Билет с лифтом до 2 уровня: 16,70€ / 8,40€ / 4,20€. <p />
                            Билет с подъемом на лестнице на 2 уровень и лифтом на вершину: 19,90€ / 9,90€ / 5€. <p />
                            Билет с лифтами до 2 уровня и на вершину: 26,10€ / 13,10€ / 6,60€.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+330892701239">+33 (0) 8 92 70 12 39</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.toureiffel.paris">http://www.toureiffel.paris</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Эйфелева башня (Tour Eiffel) является одной из самых известных достопримечательностей мира. Ее называют объектом раздора, желания и очарования. Особенно популярна Эйфелева башня среди влюбленных. Многие считают одним из самых романтичных поступков — сделать предложение руки и сердца на вершине башни. Хотя возведена была Эйфелева башня как символ индустриализации и устремления в будущее. <p />
                            Tour Eiffel признана настоящим архитектурным шедевром. По всему миру создано множество подобных сооружений. Копия Эйфелевой башни в Лас-Вегасе — самая высокая среди таких реплик. Более того, Эйфелева башня — самая узнаваемая достопримечательность столицы Франции. Она неоднократно вдохновляла художников, музыкантов, писателей, кинорежиссеров, фотографов и других творцов. Среди известных художников, использующих образ Эйфелевой башни в рисунках, — Сера, Синьяк, Шагал, Делоне; среди писателей, упомянувших ее в произведениях, — Аполлинер, Кокто, Мопассан. И в современном творчестве этот образ не перестает быть актуальным: в 2017 году вышел сингл «Вояж» группы «Ленинград». Припев начинается со слов: «На фоне Эйфелевой башни». <p />
                            Туристы стремятся сделать не только фото Эйфелевой башни, но и подняться на нее, чтобы запечатлеть панораму города. Со смотровых площадок можно насладиться красивыми видами и рассмотреть другие достопримечательности города. К сожалению, из-за своей высоты Эйфелева башня довольно часто становится местом для самоубийц. Однако не все попытки заканчиваются успешно. <p />
                            Посещение Эйфелевой башни — обязательный пункт в поездках путешественников в Париже. Увидеть это сооружение можно в любое время года. Днем Эйфелева башня доступна для подъема наверх, а поздно ночью на нее можно посмотреть со стороны — это не менее впечатляющий вид. <p />
                            <b>Сами французы называют сооружение «железной дамой» («La Dame de Fer»). Это название Эйфелевой башни обусловлено материалом, из которого она состоит — металлом.</b>
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