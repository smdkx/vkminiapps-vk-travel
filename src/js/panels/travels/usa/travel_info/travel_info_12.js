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
                "https://incomartour.com.ua/mediafiles/images/places/20180402225527/thumbs/artinstitutechicago%20(14)-tmb-1200x628xfill.jpg",
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
                    Чикагский Институт Искусств
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Чикагский Институт Искусств</Header>}> 
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
                            111 South Michigan Avenue Chicago, Illinois 60603-6404
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            C 11:00 до 18:00. По вторникам и средам — выходной.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Взрослый - 25$; Льготный - 19$; Дети до 14 лет - бесплатно.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Телефон</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PhoneOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="tel:+13124433600">+1 (312) 443-3600</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.artic.edu">http://www.artic.edu</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Институт искусств в Чикаго располагается в Чикагском Грант-парке, он был основан в 1879 году. Считается одним из самых старейших, влиятельных и богатейших художественных музеев в США и во всем мире. Является настоящей жемчужиной всей Америки, в стенах этого музея представлены сотни тысяч произведений искусства различных эпох. Хранилище ценных коллекций символически охраняют двое гигантских бронзовых львов изумрудного цвета, установленные у главного входа. Туристы обожают фотографироваться на их фоне, но советуем позаботиться о том, чтобы на карте памяти фотоаппарата осталось достаточно свободного места, ведь самое интересное для вас только начинается. Ежегодно музей принимает около 1,7 миллиона посетителей. <p />
                            Увеличение музейного фонда способствовало появлению нескольких пристроек. Они дополнили оригинальное здание музея 1893 года, построенное для организованной в том же году Всемирной выставки. В 2009 году Институт Искусств был расширен и модернизирован по проекту архитектора Ренцо Пиано. Пристроили новое крыло, выставочные залы, выстроили просторную террасу, откуда открывается чудесный вид на площадь Миллениум. Также появилось уютное кафе под открытым небом, ресторан и магазин, в котором можно приобрести разнообразные сувениры со всего мира. Площадь музея в результате перестройки увеличилась до 300 000 квадратных метров. Является вторым по размером художественным музеем в США после Метрополитен-музея. В его рамках работает Школа Института искусств Чикаго — одна из ведущих художественных школ в Соединенных Штатах. <p />
                            История Института Искусств началась в 1866 году, в Чикагской академии дизайна, которую местные художники основали в съемных комнатах на улице Кларк. Четыре года спустя школа переехала в собственное здание на улице Адамс, которое оказалось разрушено в результате пожара в Чикаго, произошедшего в 1871 году. Из-за финансовых и управленческих проблем, возникших в школе после этой трагедии, в 1878 году был сформирован попечительский совет, была основана Чикагская академия изящных искусств. Миссия новой академии расширилась. Кроме образовательного процесса и организации выставок начала осуществляться коллекционная деятельность. В 1882 году академия была переименована в Художественный институт Чикаго.
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