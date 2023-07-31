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
                "https://blog.ostrovok.ru/wp-content/uploads/2020/04/seliger_1.jpg",
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
                    Остров Хачин
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Остров Хачин</Header>}> 
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
                            Остров Хачин расположен в самом центре Селигера.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Озеро на острове на озере — это не описание «вложенной» картины, а самый настоящий портрет Селигера: в центре озера находится остров Хачин, а на нём ещё озеро — да не одно, а целых тринадцать! На острове Хачин туристов ждёт настоящий райский отдых: вдали от шума больших городов, на лоне очень красивой и по-первозданному безмятежной природы. Гостиниц и туристических баз здесь нет, отдыхающие либо снимают частное жильё, либо обустраиваются «на земле» в палатках. Помимо пеших походов по берегам исключительно живописных озёр, здесь можно отлично порыбачить, пособирать грибы-ягоды, коих на острове невероятное количество, и отправиться на лодке в Нилову пустынь.
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