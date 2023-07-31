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
                "https://i.archi.ru/i/144896.jpg",
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
                    Эмпайр Стейт Билдинг
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Эмпайр Стейт Билдинг</Header>}> 
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
                            350 Fifth Avenue, Manhattan, New York 10118
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Ежедневно с 12:00 до 22:00
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            От $ 42 для взрослых, от $ 36 для детей
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+12127363100">+1 (212) 736 31 00</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.esbnyc.com">http://www.esbnyc.com</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Небоскреб Эмпайр Стейт Билдинг — одно из самых известных зданий в мире. Его авторы — архитектурное агентство «Шрив, Лэмб и Хармон» — первыми в истории решились создать проект здания с более чем сотней этажей. Открытый на Махэттене в 1931 году, построенный меньше, чем за полтора года он справедливо считался «восьмым чудом света», что и было отражено в росписи его холла. Но в 70-х постройка Всемирного торгового центра лишила его пальмы первенства среди самых высоких зданий, а рост числа небоскребов не только в США, но и в других странах заставил потускнеть ореол уникальности. <p />
                            В результате новый этап развития, наступивший в жизни Эмпайр Стейт Билдинг в конце XX века, определил его как участника гонки уже не технологической или строительной, а туристической. Владельцы небоскреба, оставляя его огромным офисным зданием, в котором работает свыше 20 тысяч человек, делают акцент и на его привлекательности для туристов. В частности, восстановлена уникальная золотая роспись потолка в лобби в духе 30-х годов, обе смотровые площадки (86 и 102 этажи) обустроены так, что имеют обзор в 360°, открыт центр для посетителей с отдельным входом с 34-й улицы, работает музей, который вписывает историю Эмпайр Стейт Билдинг в историю Нью-Йорка. Эти и другие изменения подводят к тому, что посещение Эмпайр Стейт Билдинг сегодня — это не только о взгляде на Большое Яблоко с высоты 373 метров, это еще и о прикосновении к живой, развивающейся на ваших глазах истории одного из самых известных мегаполисов мира.
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