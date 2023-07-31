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
                "https://img.tourister.ru/files/2/3/4/2/5/4/2/5/original.jpg",
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
                    Таганрогская набережная
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Таганрогская набережная</Header>}> 
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
                            Таганрогская набережная, Ейск, Краснодарский край
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Таганрогская набережная в Ейске — это главная прогулочная зона города-курорта. Днем набережная представляет собой бурлящий туристической жизнью бульвар, на котором сосредоточены главные развлекательные объекты курорта. В вечернее время — это место для неспешного променада и наблюдения за закатом. Набережная располагается на небольшом холме, на возвышении над морем, что делает вид на панораму залива обширнее. <p />
                            <b>Набережная протянулась почти на 2 км вдоль самого популярного городского пляжа «Каменка»</b> <p />
                            Другие названия набережной — Приморская и Приморский бульвар. Современный облик Таганрогская набережная приобрела после реконструкции 2013 года. В ходе работ асфальтовое покрытие заменили разноцветной брусчаткой. Пешеходная зона была расширена до 5 метров. Всю инфраструктуру набережной (скамейки, декоративные кусты, клумбы) привели к гармоничному сочетанию. Прогулочную зону декорировали чугунными фонарями и чугунным кованым заграждением, украшенным ракушками с жемчужинками. <p />
                            Набережная Ейска, особенно в летнее время, становится одной из главных развлекательных площадок города. Здесь проходят многие городские мероприятия, праздники и тематические события. На новостных порталах города можно посмотреть перечень ближайших мероприятий города, в том числе и на Приморском бульваре Ейска.
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