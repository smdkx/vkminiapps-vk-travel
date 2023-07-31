import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, setStory} from "./js/store/router/actions";
import {getActivePanel} from "./js/services/_functions";
import * as VK from './js/services/VK';
import bridge from '@vkontakte/vk-bridge';

import {Epic, View, Root, Tabbar, TabbarItem, ConfigProvider} from "@vkontakte/vkui";

import {
    Icon28HomeOutline,
    Icon28PlaneOutline,
    Icon28FireOutline,
    Icon28UserCircleOutline
} from '@vkontakte/icons';

/*eslint react/jsx-pascal-case: "off"*/

//Табы
import Home from './js/panels/home';
import Travel from './js/panels/travel';
import Compilations from './js/panels/compilations';
import Profile from './js/panels/profile';

//Страницы
import FAQ from './js/panels/faq';
import Info_Travel from './js/panels/info_travel';
import Info_Planning from './js/panels/info_planning';
import Info_Medicine from './js/panels/info_medicine';
import Info_Plane from './js/panels/info_plane';
import Info_Train from './js/panels/info_train';
import Random from './js/panels/random';

//Панели Russia
import Travel_RU from './js/panels/travel_russia';
import Travel_RU_1 from './js/panels/travels/russia/travel_1';
import Travel_RU_2 from './js/panels/travels/russia/travel_2';
import Travel_RU_3 from './js/panels/travels/russia/travel_3';
import Travel_RU_4 from './js/panels/travels/russia/travel_4';
import Travel_RU_5 from './js/panels/travels/russia/travel_5';
import Travel_RU_6 from './js/panels/travels/russia/travel_6';
import Travel_RU_7 from './js/panels/travels/russia/travel_7';
import Travel_RU_8 from './js/panels/travels/russia/travel_8';
import Travel_RU_9 from './js/panels/travels/russia/travel_9';
import Travel_RU_10 from './js/panels/travels/russia/travel_10';

//Travel Info RU
import Travel_RU_Info_1 from './js/panels/travels/russia/travel_info/travel_info_1';
import Travel_RU_Info_2 from './js/panels/travels/russia/travel_info/travel_info_2';
import Travel_RU_Info_3 from './js/panels/travels/russia/travel_info/travel_info_3';
import Travel_RU_Info_4 from './js/panels/travels/russia/travel_info/travel_info_4';
import Travel_RU_Info_5 from './js/panels/travels/russia/travel_info/travel_info_5';
import Travel_RU_Info_6 from './js/panels/travels/russia/travel_info/travel_info_6';
import Travel_RU_Info_7 from './js/panels/travels/russia/travel_info/travel_info_7';
import Travel_RU_Info_8 from './js/panels/travels/russia/travel_info/travel_info_8';
import Travel_RU_Info_9 from './js/panels/travels/russia/travel_info/travel_info_9';
import Travel_RU_Info_10 from './js/panels/travels/russia/travel_info/travel_info_10';
import Travel_RU_Info_11 from './js/panels/travels/russia/travel_info/travel_info_11';
import Travel_RU_Info_12 from './js/panels/travels/russia/travel_info/travel_info_12';
import Travel_RU_Info_13 from './js/panels/travels/russia/travel_info/travel_info_13';
import Travel_RU_Info_14 from './js/panels/travels/russia/travel_info/travel_info_14';
import Travel_RU_Info_15 from './js/panels/travels/russia/travel_info/travel_info_15';
import Travel_RU_Info_16 from './js/panels/travels/russia/travel_info/travel_info_16';
import Travel_RU_Info_17 from './js/panels/travels/russia/travel_info/travel_info_17';
import Travel_RU_Info_18 from './js/panels/travels/russia/travel_info/travel_info_18';
import Travel_RU_Info_19 from './js/panels/travels/russia/travel_info/travel_info_19';
import Travel_RU_Info_20 from './js/panels/travels/russia/travel_info/travel_info_20';
import Travel_RU_Info_21 from './js/panels/travels/russia/travel_info/travel_info_21';
import Travel_RU_Info_22 from './js/panels/travels/russia/travel_info/travel_info_22';
import Travel_RU_Info_23 from './js/panels/travels/russia/travel_info/travel_info_23';
import Travel_RU_Info_24 from './js/panels/travels/russia/travel_info/travel_info_24';
import Travel_RU_Info_25 from './js/panels/travels/russia/travel_info/travel_info_25';
import Travel_RU_Info_26 from './js/panels/travels/russia/travel_info/travel_info_26';
import Travel_RU_Info_27 from './js/panels/travels/russia/travel_info/travel_info_27';
import Travel_RU_Info_28 from './js/panels/travels/russia/travel_info/travel_info_28';
import Travel_RU_Info_29 from './js/panels/travels/russia/travel_info/travel_info_29';
import Travel_RU_Info_30 from './js/panels/travels/russia/travel_info/travel_info_30';

//Панели Ukraine
import Travel_UA from './js/panels/travel_ukraine';
import Travel_UA_1 from './js/panels/travels/ukraine/travel_1';
import Travel_UA_2 from './js/panels/travels/ukraine/travel_2';

//Travel Info UA
import Travel_UA_Info_1 from './js/panels/travels/ukraine/travel_info/travel_info_1';
import Travel_UA_Info_2 from './js/panels/travels/ukraine/travel_info/travel_info_2';
import Travel_UA_Info_3 from './js/panels/travels/ukraine/travel_info/travel_info_3'; //Киев
import Travel_UA_Info_4 from './js/panels/travels/ukraine/travel_info/travel_info_4';
import Travel_UA_Info_5 from './js/panels/travels/ukraine/travel_info/travel_info_5';
import Travel_UA_Info_6 from './js/panels/travels/ukraine/travel_info/travel_info_6'; //Одесса

//Панели France
import Travel_FR from './js/panels/travel_france';
import Travel_FR_1 from './js/panels/travels/france/travel_1';
import Travel_FR_2 from './js/panels/travels/france/travel_2';
import Travel_FR_3 from './js/panels/travels/france/travel_3';
import Travel_FR_4 from './js/panels/travels/france/travel_4';

//Travel Info FR
import Travel_FR_Info_1 from './js/panels/travels/france/travel_info/travel_info_1';
import Travel_FR_Info_2 from './js/panels/travels/france/travel_info/travel_info_2';
import Travel_FR_Info_3 from './js/panels/travels/france/travel_info/travel_info_3';
import Travel_FR_Info_4 from './js/panels/travels/france/travel_info/travel_info_4';
import Travel_FR_Info_5 from './js/panels/travels/france/travel_info/travel_info_5';
import Travel_FR_Info_6 from './js/panels/travels/france/travel_info/travel_info_6';
import Travel_FR_Info_7 from './js/panels/travels/france/travel_info/travel_info_7';
import Travel_FR_Info_8 from './js/panels/travels/france/travel_info/travel_info_8';
import Travel_FR_Info_9 from './js/panels/travels/france/travel_info/travel_info_9';
import Travel_FR_Info_10 from './js/panels/travels/france/travel_info/travel_info_10';
import Travel_FR_Info_11 from './js/panels/travels/france/travel_info/travel_info_11';
import Travel_FR_Info_12 from './js/panels/travels/france/travel_info/travel_info_12';


//Панели Italy
import Travel_IT from './js/panels/travel_italy';
import Travel_IT_1 from './js/panels/travels/italy/travel_1';
import Travel_IT_2 from './js/panels/travels/italy/travel_2';
import Travel_IT_3 from './js/panels/travels/italy/travel_3';
import Travel_IT_4 from './js/panels/travels/italy/travel_4';

//Travel Info IT
import Travel_IT_Info_1 from './js/panels/travels/italy/travel_info/travel_info_1';
import Travel_IT_Info_2 from './js/panels/travels/italy/travel_info/travel_info_2';
import Travel_IT_Info_3 from './js/panels/travels/italy/travel_info/travel_info_3';
import Travel_IT_Info_4 from './js/panels/travels/italy/travel_info/travel_info_4';
import Travel_IT_Info_5 from './js/panels/travels/italy/travel_info/travel_info_5';
import Travel_IT_Info_6 from './js/panels/travels/italy/travel_info/travel_info_6';
import Travel_IT_Info_7 from './js/panels/travels/italy/travel_info/travel_info_7';
import Travel_IT_Info_8 from './js/panels/travels/italy/travel_info/travel_info_8';
import Travel_IT_Info_9 from './js/panels/travels/italy/travel_info/travel_info_9';
import Travel_IT_Info_10 from './js/panels/travels/italy/travel_info/travel_info_10';
import Travel_IT_Info_11 from './js/panels/travels/italy/travel_info/travel_info_11';
import Travel_IT_Info_12 from './js/panels/travels/italy/travel_info/travel_info_12';

//Панели Britain
import Travel_GB from './js/panels/travel_britain';
import Travel_GB_1 from './js/panels/travels/britain/travel_1';

//Travel Info GB
import Travel_GB_Info_1 from './js/panels/travels/britain/travel_info/travel_info_1';
import Travel_GB_Info_2 from './js/panels/travels/britain/travel_info/travel_info_2';
import Travel_GB_Info_3 from './js/panels/travels/britain/travel_info/travel_info_3';

//Панели Finland
import Travel_FI from './js/panels/travel_finland';
import Travel_FI_1 from './js/panels/travels/finland/travel_1';

//Travel Info FI
import Travel_FI_Info_1 from './js/panels/travels/finland/travel_info/travel_info_1';
import Travel_FI_Info_2 from './js/panels/travels/finland/travel_info/travel_info_2';
import Travel_FI_Info_3 from './js/panels/travels/finland/travel_info/travel_info_3';

//Панели USA
import Travel_US from './js/panels/travel_usa';
import Travel_US_1 from './js/panels/travels/usa/travel_1';
import Travel_US_2 from './js/panels/travels/usa/travel_2';
import Travel_US_3 from './js/panels/travels/usa/travel_3';
import Travel_US_4 from './js/panels/travels/usa/travel_4';

//Travel Info USA
import Travel_US_Info_1 from './js/panels/travels/usa/travel_info/travel_info_1';
import Travel_US_Info_2 from './js/panels/travels/usa/travel_info/travel_info_2';
import Travel_US_Info_3 from './js/panels/travels/usa/travel_info/travel_info_3';
import Travel_US_Info_4 from './js/panels/travels/usa/travel_info/travel_info_4';
import Travel_US_Info_5 from './js/panels/travels/usa/travel_info/travel_info_5';
import Travel_US_Info_6 from './js/panels/travels/usa/travel_info/travel_info_6';
import Travel_US_Info_7 from './js/panels/travels/usa/travel_info/travel_info_7';
import Travel_US_Info_8 from './js/panels/travels/usa/travel_info/travel_info_8';
import Travel_US_Info_9 from './js/panels/travels/usa/travel_info/travel_info_9';
import Travel_US_Info_10 from './js/panels/travels/usa/travel_info/travel_info_10';
import Travel_US_Info_11 from './js/panels/travels/usa/travel_info/travel_info_11';
import Travel_US_Info_12 from './js/panels/travels/usa/travel_info/travel_info_12';

//TR

//Wild Panel
import Wild from './js/panels/compilations/wild';
import Wild_Info_1 from './js/panels/compilations/wild_info/wild_info_1';
import Wild_Info_2 from './js/panels/compilations/wild_info/wild_info_2';
import Wild_Info_3 from './js/panels/compilations/wild_info/wild_info_3';
import Wild_Info_4 from './js/panels/compilations/wild_info/wild_info_4';
import Wild_Info_5 from './js/panels/compilations/wild_info/wild_info_5';
import Wild_Info_6 from './js/panels/compilations/wild_info/wild_info_6';
import Wild_Info_7 from './js/panels/compilations/wild_info/wild_info_7';
import Wild_Info_8 from './js/panels/compilations/wild_info/wild_info_8';

//Nature Panel
import Nature from './js/panels/compilations/nature';
import Nature_Info_1 from './js/panels/compilations/nature_info/nature_info_1';
import Nature_Info_2 from './js/panels/compilations/nature_info/nature_info_2';
import Nature_Info_3 from './js/panels/compilations/nature_info/nature_info_3';
import Nature_Info_4 from './js/panels/compilations/nature_info/nature_info_4';
import Nature_Info_5 from './js/panels/compilations/nature_info/nature_info_5';
import Nature_Info_6 from './js/panels/compilations/nature_info/nature_info_6';
import Nature_Info_7 from './js/panels/compilations/nature_info/nature_info_7';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;
    }

    componentDidMount() {
        const {goBack, dispatch} = this.props;

        dispatch(VK.initApp());

        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === "VKWebAppUpdateConfig") {
                const schemeAttribute = document.createAttribute("scheme");
                schemeAttribute.value = data.scheme ? data.scheme : "client_light";
                this.setState({ theme: data.scheme });
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        window.onpopstate = () => {
            let timeNow = +new Date();

            if (timeNow - this.lastAndroidBackAction > 500) {
                this.lastAndroidBackAction = timeNow;

                goBack();
            } else {
                window.history.pushState(null, null);
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {activeView, activeStory, activePanel, scrollPosition} = this.props;

        if (
            prevProps.activeView !== activeView ||
            prevProps.activePanel !== activePanel ||
            prevProps.activeStory !== activeStory
        ) {
            let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

            window.scroll(0, pageScrollPosition);
        }
    }

    render() {
        const {goBack, setStory, popouts, activeView, activeStory, panelsHistory, colorScheme} = this.props;

        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];

        return (
            <ConfigProvider isWebView={true} scheme={colorScheme}>
                <Epic activeStory={activeStory} tabbar={
                    <Tabbar>
                        <TabbarItem //Первый таб
                            onClick={() => setStory('home', 'home_tab')}
                            selected={activeStory === 'home'}
                            style={{ cursor: 'pointer' }}
                            text="Главная"
                        ><Icon28HomeOutline/></TabbarItem>

                        <TabbarItem //Второй таб
                            onClick={() => setStory('travel', 'travel_tab')}
                            selected={activeStory === 'travel'}
                            style={{ cursor: 'pointer' }}
                            text="Путешествия"
                        ><Icon28PlaneOutline/></TabbarItem>

                        <TabbarItem //Третий таб
                            onClick={() => setStory('compilations', 'compilations_tab')}
                            style={{ cursor: 'pointer' }}
                            selected={activeStory === 'compilations'}
                            text="Подборки"
                        ><Icon28FireOutline/></TabbarItem>

                        <TabbarItem //Четвертый таб
                            onClick={() => setStory('profile', 'profile_tab')}
                            selected={activeStory === 'profile'}
                            style={{ cursor: 'pointer' }}
                            text="Профиль"
                        ><Icon28UserCircleOutline/></TabbarItem>
                    </Tabbar>
                }>
                        <Root id="home" activeView={activeView} popout={popout}>
                            <View
                                id="home"
                                activePanel={getActivePanel("home")}
                                history={history}
                                onSwipeBack={() => goBack()}
                            >
                                <Home id="home_tab"/>
                                
                                <FAQ id="faq"/>
                                <Info_Travel id="info_travel"/>
                                <Info_Planning id="info_planning"/>
                                <Info_Medicine id="info_medicine"/>
                                <Info_Plane id="info_plane"/>
                                <Info_Train id="info_train"/>
                                
                            </View>
                        </Root>

                        <Root id="travel" activeView={activeView} popout={popout}>
                            <View
                                id="travel"
                                activePanel={getActivePanel("travel")}
                                history={history}
                                onSwipeBack={() => goBack()}
                            >
                                <Travel id="travel_tab"/>

                                <Travel_RU id="travel_russia"/>
                                <Travel_RU_1 id="travel_ru_1"/>
                                <Travel_RU_2 id="travel_ru_2"/>
                                <Travel_RU_3 id="travel_ru_3"/>
                                <Travel_RU_4 id="travel_ru_4"/>
                                <Travel_RU_5 id="travel_ru_5"/>
                                <Travel_RU_6 id="travel_ru_6"/>
                                <Travel_RU_7 id="travel_ru_7"/>
                                <Travel_RU_8 id="travel_ru_8"/>
                                <Travel_RU_9 id="travel_ru_9"/>
                                <Travel_RU_10 id="travel_ru_10"/>

                                <Travel_RU_Info_1 id="travel_ru_info_1"/>
                                <Travel_RU_Info_2 id="travel_ru_info_2"/>
                                <Travel_RU_Info_3 id="travel_ru_info_3"/>
                                <Travel_RU_Info_4 id="travel_ru_info_4"/>
                                <Travel_RU_Info_5 id="travel_ru_info_5"/>
                                <Travel_RU_Info_6 id="travel_ru_info_6"/>
                                <Travel_RU_Info_7 id="travel_ru_info_7"/>
                                <Travel_RU_Info_8 id="travel_ru_info_8"/>
                                <Travel_RU_Info_9 id="travel_ru_info_9"/>
                                <Travel_RU_Info_10 id="travel_ru_info_10"/>
                                <Travel_RU_Info_11 id="travel_ru_info_11"/>
                                <Travel_RU_Info_12 id="travel_ru_info_12"/>
                                <Travel_RU_Info_13 id="travel_ru_info_13"/>
                                <Travel_RU_Info_14 id="travel_ru_info_14"/>
                                <Travel_RU_Info_15 id="travel_ru_info_15"/>
                                <Travel_RU_Info_16 id="travel_ru_info_16"/>
                                <Travel_RU_Info_17 id="travel_ru_info_17"/>
                                <Travel_RU_Info_18 id="travel_ru_info_18"/>
                                <Travel_RU_Info_19 id="travel_ru_info_19"/>
                                <Travel_RU_Info_20 id="travel_ru_info_20"/>
                                <Travel_RU_Info_21 id="travel_ru_info_21"/>
                                <Travel_RU_Info_22 id="travel_ru_info_22"/>
                                <Travel_RU_Info_23 id="travel_ru_info_23"/>
                                <Travel_RU_Info_24 id="travel_ru_info_24"/>
                                <Travel_RU_Info_25 id="travel_ru_info_25"/>
                                <Travel_RU_Info_26 id="travel_ru_info_26"/>
                                <Travel_RU_Info_27 id="travel_ru_info_27"/>
                                <Travel_RU_Info_28 id="travel_ru_info_28"/>
                                <Travel_RU_Info_29 id="travel_ru_info_29"/>
                                <Travel_RU_Info_30 id="travel_ru_info_30"/>

                                <Travel_UA id="travel_ukraine"/>
                                <Travel_UA_1 id="travel_ua_1"/>
                                <Travel_UA_2 id="travel_ua_2"/>

                                <Travel_UA_Info_1 id="travel_ua_info_1"/>
                                <Travel_UA_Info_2 id="travel_ua_info_2"/>
                                <Travel_UA_Info_3 id="travel_ua_info_3"/>
                                <Travel_UA_Info_4 id="travel_ua_info_4"/>
                                <Travel_UA_Info_5 id="travel_ua_info_5"/>
                                <Travel_UA_Info_6 id="travel_ua_info_6"/>

                                <Travel_FR id="travel_france"/>
                                <Travel_FR_1 id="travel_fr_1"/>
                                <Travel_FR_2 id="travel_fr_2"/>
                                <Travel_FR_3 id="travel_fr_3"/>
                                <Travel_FR_4 id="travel_fr_4"/>

                                <Travel_FR_Info_1 id="travel_fr_info_1"/>
                                <Travel_FR_Info_2 id="travel_fr_info_2"/>
                                <Travel_FR_Info_3 id="travel_fr_info_3"/>
                                <Travel_FR_Info_4 id="travel_fr_info_4"/>
                                <Travel_FR_Info_5 id="travel_fr_info_5"/>
                                <Travel_FR_Info_6 id="travel_fr_info_6"/>
                                <Travel_FR_Info_7 id="travel_fr_info_7"/>
                                <Travel_FR_Info_8 id="travel_fr_info_8"/>
                                <Travel_FR_Info_9 id="travel_fr_info_9"/>
                                <Travel_FR_Info_10 id="travel_fr_info_10"/>
                                <Travel_FR_Info_11 id="travel_fr_info_11"/>
                                <Travel_FR_Info_12 id="travel_fr_info_12"/>

                                <Travel_IT id="travel_italy"/>
                                <Travel_IT_1 id="travel_it_1"/>
                                <Travel_IT_2 id="travel_it_2"/>
                                <Travel_IT_3 id="travel_it_3"/>
                                <Travel_IT_4 id="travel_it_4"/>

                                <Travel_IT_Info_1 id="travel_it_info_1"/>
                                <Travel_IT_Info_2 id="travel_it_info_2"/>
                                <Travel_IT_Info_3 id="travel_it_info_3"/>
                                <Travel_IT_Info_4 id="travel_it_info_4"/>
                                <Travel_IT_Info_5 id="travel_it_info_5"/>
                                <Travel_IT_Info_6 id="travel_it_info_6"/>
                                <Travel_IT_Info_7 id="travel_it_info_7"/>
                                <Travel_IT_Info_8 id="travel_it_info_8"/>
                                <Travel_IT_Info_9 id="travel_it_info_9"/>
                                <Travel_IT_Info_10 id="travel_it_info_10"/>
                                <Travel_IT_Info_11 id="travel_it_info_11"/>
                                <Travel_IT_Info_12 id="travel_it_info_12"/>

                                <Travel_GB id="travel_britain"/>
                                <Travel_GB_1 id="travel_gb_1"/>

                                <Travel_GB_Info_1 id="travel_gb_info_1"/>
                                <Travel_GB_Info_2 id="travel_gb_info_2"/>
                                <Travel_GB_Info_3 id="travel_gb_info_3"/>

                                <Travel_FI id="travel_finland"/>
                                <Travel_FI_1 id="travel_fi_1"/>

                                <Travel_FI_Info_1 id="travel_fi_info_1"/>
                                <Travel_FI_Info_2 id="travel_fi_info_2"/>
                                <Travel_FI_Info_3 id="travel_fi_info_3"/>

                                <Travel_US id="travel_usa"/>
                                <Travel_US_1 id="travel_us_1"/>
                                <Travel_US_2 id="travel_us_2"/>
                                <Travel_US_3 id="travel_us_3"/>
                                <Travel_US_4 id="travel_us_4"/>

                                <Travel_US_Info_1 id="travel_us_info_1"/>
                                <Travel_US_Info_2 id="travel_us_info_2"/>
                                <Travel_US_Info_3 id="travel_us_info_3"/>
                                <Travel_US_Info_4 id="travel_us_info_4"/>
                                <Travel_US_Info_5 id="travel_us_info_5"/>
                                <Travel_US_Info_6 id="travel_us_info_6"/>
                                <Travel_US_Info_7 id="travel_us_info_7"/>
                                <Travel_US_Info_8 id="travel_us_info_8"/>
                                <Travel_US_Info_9 id="travel_us_info_9"/>
                                <Travel_US_Info_10 id="travel_us_info_10"/>
                                <Travel_US_Info_11 id="travel_us_info_11"/>
                                <Travel_US_Info_12 id="travel_us_info_12"/>

                                <Random id="random"/>
                            </View>
                        </Root>

                        <Root id="compilations" activeView={activeView} popout={popout}>
                            <View
                                id="compilations"
                                activePanel={getActivePanel("compilations")}
                                history={history}
                                onSwipeBack={() => goBack()}
                            >
                                <Compilations id='compilations_tab'/>

                                <Wild id="wild"/>
                                <Wild_Info_1 id="wild_info_1"/>
                                <Wild_Info_2 id="wild_info_2"/>
                                <Wild_Info_3 id="wild_info_3"/>
                                <Wild_Info_4 id="wild_info_4"/>
                                <Wild_Info_5 id="wild_info_5"/>
                                <Wild_Info_6 id="wild_info_6"/>
                                <Wild_Info_7 id="wild_info_7"/>
                                <Wild_Info_8 id="wild_info_8"/>

                                <Nature id="nature"/>
                                <Nature_Info_1 id="nature_info_1"/>
                                <Nature_Info_2 id="nature_info_2"/>
                                <Nature_Info_3 id="nature_info_3"/>
                                <Nature_Info_4 id="nature_info_4"/>
                                <Nature_Info_5 id="nature_info_5"/>
                                <Nature_Info_6 id="nature_info_6"/>
                                <Nature_Info_7 id="nature_info_7"/>
                            </View>
                        </Root>

                        <Root id="profile" activeView={activeView} popout={popout}>
                            <View
                                id="profile"
                                activePanel={getActivePanel("profile")}
                                history={history}
                                onSwipeBack={() => goBack()}
                            >
                                <Profile id='profile_tab'/>
                            </View>
                        </Root>
                    </Epic>
                </ConfigProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.router.activeView,
        activeStory: state.router.activeStory,
        panelsHistory: state.router.panelsHistory,
        popouts: state.router.popouts,
        scrollPosition: state.router.scrollPosition,

        colorScheme: state.vkui.colorScheme
    };
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({setStory, goBack}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);