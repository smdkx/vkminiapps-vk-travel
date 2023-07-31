import React from 'react';
import {connect} from 'react-redux';

import {setPage} from "../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    Group,
    Header,
    SimpleCell,
    Snackbar,
    Avatar,
    PanelSpinner,
    Gradient,
    Text,
    Title
} from "@vkontakte/vkui";

import { 
    Icon28BugOutline, 
    Icon28FavoriteOutline, 
    Icon28ServicesOutline, 
    Icon16CheckCircleOutline, 
    Icon16ErrorCircleOutline,
    Icon28EmployeeOutline,
    Icon28ShareOutline
} from '@vkontakte/icons';

var FirstOpen = true;
let avatar_profile;
let first_name;
let last_name;
let sex;

class Info extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };

        this.AddToFavorites = this.AddToFavorites.bind(this);
    }

    async componentDidMount() {

        if(FirstOpen) {
            FirstOpen = false;
            this.setState({
                loader: true
            });
        }

        await bridge.send('VKWebAppGetUserInfo').then((data) => {
            avatar_profile = data.photo_200;
            first_name = data.first_name;
            last_name = data.last_name;
            sex = data.sex;
        });

        this.setState({
            loader: false
        });
    }

    async AddToFavorites() {
        try {
            await bridge.send('VKWebAppAddToFavorites')
                bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"}); //вибро
                if (this.state.snackbar) return;
                this.setState({ snackbar:
                <Snackbar
                layout='vertical'
                onClose={() => this.setState({ snackbar: null })}
                before={<Avatar size={24} style={{ background: 'green' }}><Icon16CheckCircleOutline fill="#fff" width={14} height={14} /></Avatar>}
                >
                    Сервис успешно добавлен в избранное!
                </Snackbar>})
                
            } catch (error) {
                bridge.send("VKWebAppTapticNotificationOccurred", {"type": "error"}); //вибро
                console.log(error);
                if (this.state.snackbar) return;
                this.setState({ snackbar:
                <Snackbar
                layout='vertical'
                onClose={() => this.setState({ snackbar: null })}
                before={<Avatar size={24} style={{ background: 'red' }}><Icon16ErrorCircleOutline fill="#fff" width={14} height={14} /></Avatar>}
                >
                    Произошла ошибка, попробуйте снова!
                </Snackbar>
            })
        }
    }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Профиль</PanelHeader>
                <Group>
                    {this.state.loader ? <PanelSpinner/> : <Gradient style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 15,
                    }}>
                        <Avatar size={86} src={avatar_profile} />
                        <Title style={{ marginBottom: 8, marginTop: 15 }} level="2" weight="medium">{first_name} {last_name}</Title>
                        <Text style={{ color: 'var(--text_secondary)' }}>{sex === 1 ? "Путешественница" : "Путешественник"}</Text>
                    </Gradient> }

                <Header mode='secondary'>Дополнительно</Header>
                    <SimpleCell 
                    before={<Icon28FavoriteOutline/>}
                    description='Добавляет сервис в избранные приложения'
                    onClick={this.AddToFavorites}
                    >
                        Добавить в избранное
                    </SimpleCell>

                    <SimpleCell 
                    before={<Icon28ShareOutline/>}
                    description='Поделитесь с друзьями нашим приложением'
                    onClick={() => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7828117"})}
                    >
                        Поделиться с друзьями
                    </SimpleCell>

                    <SimpleCell 
                    expandable = 'true'
                    before={<Icon28BugOutline/>}
                    description='Если нашли ошибку, сообщите нам'
                    href='https://vk.me/rea.studio' target="_blank"
                    >
                        Сообщить о проблеме
                    </SimpleCell>
                </Group>

                <Group header={<Header mode='secondary'>Информация</Header>}>
                    <SimpleCell
                    expandable = 'true' 
                    before={<Icon28EmployeeOutline/>} 
                    description='REA Studio'
                    href="https://vk.com/rea.studio" target="_blank"
                    >
                        Разработчик
                    </SimpleCell>

                    <SimpleCell
                    disabled
                    before={<Icon28ServicesOutline/>} 
                    description='1.0'
                    >
                        Версия приложения
                    </SimpleCell>
                </Group>

                {this.state.snackbar}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage
};

export default connect(null, mapDispatchToProps)(Info);