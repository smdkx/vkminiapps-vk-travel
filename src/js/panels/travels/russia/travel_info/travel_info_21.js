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
                "https://img.tourister.ru/files/2/1/5/3/0/7/8/9/original.jpg",
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
                    Здесь начинается Россия
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Здесь начинается Россия</Header>}> 
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
                            Елизово, Камчатский край, 684006
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Памятник «Здесь начинается Россия» был установлен в 2011 году на деньги из бюджета в городе Елизово (Камчатка) недалеко от Шуманинского перекрестка. Также совсем рядом располагается международный аэропорт «Елизово». Это одна из наиболее популярных рукотворных достопримечательностей региона, посетить ее стараются все, кто приезжает на полуостров. <p />
                            Памятник установлен на фоне панорамы сразу пяти камчатских вулканов. Это вулкан Арик, имеющий высоту 2156 метров, вулкан Ааг с высотой 2310 метров, самый высокий из пятерки Корякский, возвышающийся на 3456 метров, а также вулканы Авачинский и Козельский, высота которых равна 2741 и 2189 метрам соответственно. Это одно из самых впечатляющих мест на Камчатке для того, чтобы сделать красивое фото на память. Поэтому это место так обожают и путешественники и сами местные жители, а еще здесь традиционно проводятся свадебные фотосессии. Правда, чтобы на заднем плане были видны заснеженные вершины вулканов, необходима хорошая и ясная погода (которая на Камчатке, как известно, славится своей непредсказуемостью). <p />
                            Памятник охраняют, он находится под круглосуточным видеонаблюдением — дело в том, что вандалы уже неоднократно пытались разрушить его (уже несколько раз крали рыбу, а также пытались испортить саму медведицу с медвежонком), а некоторые туристы до сих пор стараются вскарабкаться на медведей для впечатляющего кадра или мусорят. За это вполне можно получить внушительный штраф.
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