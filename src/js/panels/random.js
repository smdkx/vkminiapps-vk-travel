import React from 'react';
import {connect} from 'react-redux';
import Confetti from 'react-confetti';

import {setPage, goBack} from "../store/router/actions";

import bridge from '@vkontakte/vk-bridge'

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Div,
    Button,
    Title,
    Text
} from "@vkontakte/vkui";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
            name: null,
        };

        this.random = this.random.bind(this);
    }

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    random() {
        let country = [
          { name: "Россию" },
          { name: "Турцию" },
          { name: "Армению" },
          { name: "США" },
          { name: "Венесуэлу" },
          { name: "Вьетнам" },
          { name: "Германию" },
          { name: "Грецию" },
          { name: "Египет" },
          { name: "Индию" },
          { name: "Казахстан" },
          { name: "Киргизию" },
          { name: "Азербайджан" },
          { name: "Мальдивы" },
          { name: "Сербию" },
          { name: "Сингапур" },
          { name: "Таджикистан" },
          { name: "Танзания" },
          { name: "Узбекистан" },
          { name: "Финляндию" },
          { name: "Чехию" },
          { name: "Швейцарию" },
        ];
        let name = country[this.randomInteger(0, 13)].name;
        this.setState({ name: name });
        bridge.send("VKWebAppTapticNotificationOccurred", {"type": "success"}); //вибро
    }

    render() {
        const {id, goBack} = this.props;

        return (
            <Panel id={id} centered={true}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                     Случайная поездка
                </PanelHeader>
                {this.state.name == null && (
                <Group>
                    <Div className="random__div">
                        <Title level="1" weight="bold" style={{ marginBottom: 16 }}>
                            Случайная поездка
                        </Title>
                        <Text weight="regular">
                            Не знаешь, куда отправиться этим летом? Этот раздел
                            отлично справляется с этой целью. Кликай на кнопку ниже!
                        </Text> <br />
                        <Button size="l" stretched mode="secondary" onClick={this.random}>
                            Погнали!
                        </Button>
                    </Div>
                </Group>
                )}
                {this.state.name !== null && (
                <Group>
                    <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={50}
                    />
                    <Div className="random__div">
                        <Title level="1" weight="bold" style={{ marginBottom: 16 }}>
                            А тебе повезло, собираем чемоданы в {this.state.name}!
                        </Title>
                        <Text weight="regular">
                            Рандомайзер принял своё решение. Однозначно стоит отправиться в {this.state.name}! Отличная страна для путешествия!
                        </Text> <br />
                        <Button size="l" stretched mode="secondary" onClick={this.random}>
                            Попробовать еще раз!
                        </Button>
                    </Div>
                </Group>
                )}
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);