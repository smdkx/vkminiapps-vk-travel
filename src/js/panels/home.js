import React from 'react';
import {connect} from 'react-redux';

import {goBack, setPage} from '../store/router/actions';

import bridge from '@vkontakte/vk-bridge'

import {
    Panel, 
    Group, 
    Header,
    PanelHeader,
    PanelHeaderButton,
    Banner,
    SimpleCell
} from "@vkontakte/vkui";

import {
    Icon28HelpCircleOutline,
    Icon28CompassOutline,
    Icon28CalendarOutline,
    Icon28InfoOutline,
    Icon28HeartCircleOutline,
    Icon28PlaneOutline,
    Icon28TrainOutline
} from "@vkontakte/icons";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                left={
                    <PanelHeaderButton onClick={() => setPage('home', 'faq')}>
                    <Icon28HelpCircleOutline />
                    </PanelHeaderButton>
                }
                >
                Главная
                </PanelHeader>
                <Group>

                    <Banner
                    mode="image"
                    size="m"
                    header="Летний сезон близко! &#129312;"
                    subheader={<span>А вы уже готовы к летнему отдыху? Пора выбрать по-настоящему красивое место для путешествия!</span>}
                    background={
                    <div
                        style={{
                        backgroundColor: '#65c063',
                        backgroundImage: 'url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)',
                        backgroundPosition: 'right bottom',
                        backgroundSize: 320,
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    }
                />
                </Group>

                <Group header={<Header mode="secondary">Информация о путешествиях</Header>}>
                    <SimpleCell 
                    before={<Icon28CompassOutline/>} 
                    onClick={() => setPage('home', 'info_travel')}
                    >
                        Путешествия в 2021
                    </SimpleCell>

                    <SimpleCell 
                    before={<Icon28CalendarOutline/>} 
                    onClick={() => setPage('home', 'info_planning')}
                    >
                        Планирование путешествия
                    </SimpleCell>

                    <SimpleCell 
                    expandable = 'true'
                    before={<Icon28InfoOutline/>} 
                    onClick={() => bridge.send("VKWebAppOpenApp", {"app_id": 7362610})}
                    >
                        Главное о коронавирусе
                    </SimpleCell>
                </Group>

                <Group header={<Header mode="secondary">Полезные советы</Header>}>
                    <SimpleCell 
                    before={<Icon28HeartCircleOutline/>} 
                    onClick={() => setPage('home', 'info_medicine')}
                    >
                        Аптечка туриста
                    </SimpleCell>

                    <SimpleCell 
                    before={<Icon28PlaneOutline/>} 
                    onClick={() => setPage('home', 'info_plane')}
                    >
                        Что можно брать в самолет
                    </SimpleCell>

                    <SimpleCell 
                    before={<Icon28TrainOutline/>} 
                    onClick={() => setPage('home', 'info_train')}
                    >
                        Что взять с собой в поезд
                    </SimpleCell>
                </Group>

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Home);
