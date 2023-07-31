import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    ContentCard,
    CardScroll
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24CarOutline,
    Icon24ArticleOutline
} from '@vkontakte/icons';

import FooterInfo from '../../../components/footer';

class NatureInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://content.skyscnr.com/m/3dc8e3aed6bb99ed/original/eyeem-26050266-171224885.jpg?resize=1800px:1800px&quality=100",
                "https://4traveler.ru/sites/default/files/user_images/travel/St.pt/lindulovskaya/DSC00301.jpg",
                "https://i.ptmap.ru/original/14578.jpg",
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
                    Природный заказник «Линдуловская роща»
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Фотографии</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[0]] })}
                        image={this.state.images[0]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[1]] })}
                        image={this.state.images[1]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                        onClick={() => bridge.send("VKWebAppShowImages", { images: [this.state.images[2]] })}
                        image={this.state.images[2]}
                        subtitle="Нажмите, чтобы открыть фотографию"
                        maxHeight={200}
                        style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                <Group header={<Header mode="secondary">Где располагается</Header>}> 
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            В 3 км на юго-запад от поселка Рощино в Выборгском районе Ленобласти. 69 км от Санкт-Петербурга
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Зачем ехать</Header>}> 
                    <MiniInfoCell
                        before={<Icon24CarOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Забыть обо всех проблемах в сказочном лесу из детских книжек
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Линдуловскую рощу заложили по указу Петра I — чтобы выращивать корабельный лес. Сейчас это огромный ботанический заказник, где стараются сохранить старейшее в Европе искусственное насаждение лиственницы сибирской (Larix sibirica Ledeb) за пределами ее ареала. <p />
                            Вход в Линдуловскую рощу бесплатный, а впечатления вы отсюда привезете бесценные. Здесь настоящее царство растений и живности из Красной книги Ленинградской области. В местной реке Рощинке резвятся атлантический лосось, кумжа и миноги, а еще обитает европейская жемчужница — охраняемый двустворчатый моллюск. Гулять будете среди сыроежек пикантных, белокорых пихт, туй с ажурной кроной и сибирских кедровых, балканских и скрученных сосен. Чем не заколдованный лес?
                    </MiniInfoCell>
                </Group>

                <FooterInfo />

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(NatureInfo);