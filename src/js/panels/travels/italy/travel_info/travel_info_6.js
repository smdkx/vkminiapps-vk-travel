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
                "https://allturizm.ru/wp-content/uploads/2020/02/san_marko.jpg",
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
                    Площадь Сан Марко
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Площадь Сан Марко</Header>}> 
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
                            Piazza San Marco, 30100 Venezia, Италия
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Пьяцца Сан Марко — центральная площадь в Венеции, вместе с прилегающей пьяцеттой (от Большого Канала до Кампаниллы) образует религиозный, административный и туристический центр в Венеции. Длина площади — 175 метров, ширина — 82 метра. На городской площади всегда много туристов, и именно с нее часто начинаются обзорные экскурсии по Венеции. <p />
                            <b>Ежегодно площадь Сан Марко в Венеции посещают 20 миллионов туристов.</b> <p />
                            Оформление площади началось еще в IX веке — при возведенном в то время соборе Святого Марка. До сегодняшних размеров площадь была расширена в 1177 году — реконструкция была приурочена к исторической встрече папы Александра III с Фридрихом Барбароссой. С середины XII века площадь перед собором стала местом проведения Венецианского карнавала, и эта традиция поддерживается в наши дни.
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