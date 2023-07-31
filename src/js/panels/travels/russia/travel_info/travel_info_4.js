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
                "https://blog.ostrovok.ru/wp-content/uploads/2020/04/seliger_2.jpg",
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
                    Озеро Селигер
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Озеро Селигер</Header>}> 
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
                            Тверская и Новгородская области
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            На озере Селигер туристам предлагают остановиться в уютных домиках, окруженных буйной растительностью. Инфраструктура хорошо развита и рассчитана на разный уровень материального достатка и требований отдыхающих. Можно выбрать минимальный набор услуг и спартанские условия проживания за доступную цену или пакет «все включено». Любителей комфорта ждут коттеджи с уютными каминами, плитами, питанием по системе «шведский стол», спутниковыми антеннами и Wi-Fi, стиральными машинами и отдельными санузлами. <p />
                            Водоем активно используется в рекреационных целях. Сюда приезжают отдохнуть от городской суеты, а заодно — порыбачить, позагорать, заняться водными и зимними видами спорта, побродить в поисках даров природы, принять участие в походах и сплавах. В этих местах развит велосипедный, водный, пеший и автомобильный туризм. Зимой в окрестностях озера можно покататься на лыжах, санях и снегоходах. Многие наведываются сюда с целью паломничества и культурного ознакомления с местными достопримечательностями. <p />
                            Собираясь отдохнуть на озере Селигер, рекомендуется взять с собой средства защиты от насекомых (летом), дополнительный комплект теплого белья (зимой) и аптечку. Нужно понимать, что с медицинской помощью здесь могут возникнуть трудности, особенно на островах.
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