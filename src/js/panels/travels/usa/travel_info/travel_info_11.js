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
                "https://planetofhotels.com/sites/default/files/attracrions/bukingemskiy-fontan-6.jpg",
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
                    Букингемский фонтан
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Букингемский фонтан</Header>}> 
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
                            301 S Columbus Dr, Chicago, IL 60605
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Мемориальный Букингемский фонтан в Грант-парке не имеет никакого отношения к истории с подвесками королевы и подвигами трех мушкетеров. Его строительство оплатила в 1927 г. некая Кейт Букингем, желая увековечить память о своем любимом брате Кларенсе, богатом чикагском бизнесмене и меценате. В Институте искусств экспонируется собранная им коллекция из 2500 картин импрессионистов и японских гравюр. Подарок городу обошелся его сестре в 750 тыс. USD, кроме того, ею был учрежден еще и фонд для финансирования его техобслуживания. <p />
                            Бассейн диаметром 85 м вмещает 6 млн л воды, ее выбрасывают в чаши 134 форсунки, ежечасно из центра вверх взлетает 45-метровая струя. Вечером включается подсветка и начинается концерт со светомузыкой. За прошедшие годы фонтан стал символом Чикаго и обязательным объектом для посещений туристами.
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