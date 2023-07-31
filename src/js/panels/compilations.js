import React from 'react';
import {connect} from 'react-redux';

import {setPage} from "../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    Group,
    Banner,
    ContentCard,
    CardScroll,
    Header,
    Snackbar,
    Avatar
} from "@vkontakte/vkui";

import {
    Icon16ErrorCircleOutline
} from "@vkontakte/icons";

var BannerClosed = true;

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
            bannerStatus: BannerClosed,
        };

        this.openSnackbar = this.openSnackbar.bind(this);
    }

    /*{this.state.bannerStatus && <Banner
        mode="image"
        size="m"
        header="Тестовый баннер header"
        subheader="тестовый subheader"
        background={
        <div
            style={{
                backgroundColor: '#3F8AE0',
            }}
        />
        }
        asideMode="dismiss"
        onDismiss={() => {
            this.setState({
                bannerStatus: false
            });
            BannerClosed = false;
        }}
        actions={<Button href="https://vk.com" target="_blank" mode="overlay_primary" size="m">Button</Button>}
    />}*/

    openSnackbar () {
        bridge.send("VKWebAppTapticNotificationOccurred", {"type": "error"}); //вибро
        if (this.state.snackbar) return;
        this.setState({ snackbar:
          <Snackbar
            layout='vertical'
            onClose={() => this.setState({ snackbar: null })}
            before={<Avatar size={24} style={{ background: 'red' }}><Icon16ErrorCircleOutline fill="#fff" width={14} height={14} /></Avatar>}
          >
              Подборка станет доступна совсем скоро!
          </Snackbar>
        });
      }

    render() {
        const {id, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Подборки</PanelHeader>
                <Group>
                    <Banner
                        mode="image"
                        size="m"
                        header="Подборки уже здесь! &#127881;"
                        subheader={<span>В данном разделе вы можете выбрать специальную подборку для отдыха или путешествия! Каждая подборка уникальна по-своему!</span>}
                        background={
                        <div
                            style={{
                            backgroundColor: '#000',
                            backgroundImage: 'url(https://ak.picdn.net/shutterstock/videos/1018020805/thumb/1.jpg)',
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                            }}
                        />
                    }
                  />
                </Group>

                <Group header={<Header mode='secondary'>Список подборок</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('compilations', 'wild')}
                            image="https://content.skyscnr.com/m/5ae56125739423d5/original/GettyImages-1294398958.jpg"
                            subtitle="Куда поехать, чтобы насладиться природой без толп"
                            header="Дикие условия"
                            caption={null}
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('compilations', 'nature')}
                            image="https://content.skyscnr.com/m/3dc8e3aed6bb99ed/original/eyeem-26050266-171224885.jpg"
                            subtitle="Куда сбежать из Петербурга на выходные"
                            header="Сказочные природные уголки Ленобласти"
                            caption={null}
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={this.openSnackbar}
                            image="https://assets.foxdcg.com/dpp-uploaded/images/articles/5e7b84f920127c00183665cc/ANIDOM_WFH_SIMP_REV%5B4%5D%5B1%5D.jpg"
                            //subtitle="Куда сбежать из Петербурга на выходные"
                            header="Станет доступно уже совсем скоро.."
                            caption={null}
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                {this.state.snackbar}
                
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage
};

export default connect(null, mapDispatchToProps)(Travel);