import React from 'react';
import {connect} from 'react-redux';

import {goBack, setPage} from "../../../store/router/actions";

import bridge from '@vkontakte/vk-bridge';

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Header,
    MiniInfoCell,
    CardScroll,
    ContentCard,
    Button,
    Div,
} from "@vkontakte/vkui";

import { 
    Icon24ArticleOutline,
    Icon24PlaceOutline
} from '@vkontakte/icons';

import { ShareInfo, TextButton, ButtonLink } from '../../../components/settings';
import FooterInfo from '../../../components/footer';

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://blog.ostrovok.ru/wp-content/uploads/2020/04/seliger_2.jpg",
                "https://fs.tonkosti.ru/em/ya/emyaj2v2w14o8oosk8kgcww0k.jpg",
                "https://blog.ostrovok.ru/wp-content/uploads/2020/04/seliger_1.jpg",
            ],
        };
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что озеро Селигер объединяет несколько ледниковых озер, связанных между собой короткими и узкими протоками?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Озеро Селигер
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}>
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_4')}
                            image={this.state.images[0]}
                            header="Озеро Селигер"
                            subtitle="Селигер как олицетворение всей русской природы."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_5')}
                            image={this.state.images[1]}
                            header="Нилова пустынь"
                            subtitle="Православный мужской монастырь, расположенный на острове Столобном и частично на полуострове Светлица"
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_ru_info_6')}
                            image={this.state.images[2]}
                            header="Остров Хачин"
                            subtitle="Остров Хачин — самый большой остров на озере Селигер."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />
                    </CardScroll>
                </Group>

                <Group header={<Header mode="secondary">Описание места</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Озеро Селигер объединяет несколько ледниковых озер, связанных между собой короткими и узкими протоками. Живописная природа и православные святыни привлекают в эти места тысячи туристов и летом, и зимой. Сложную по форме водную систему называют «голубым ожерельем» Средней полосы России. Местные жители именуют озеро Осташковским, что связано с расположенным на южном берегу древним городом Осташков. <p />
                            Под названием Серегер водоем упоминается в летописях XII века, но со временем оно приобрело несколько иное звучание. Расшифровка топонима имеет две взаимоисключающие версии, поэтому этимологи не могут принять общего решения. И хотя обе стороны считают, что слово «селигер» имеет прибалтийско-финские корни, одни относят его к «selkäjärvi», что переводится как «высоко расположенное озеро», а другие — к «särkijärvi», что означает, по их мнению «плотвяное озеро» или «озеро с плотвой». <p />
                            Водоем активно используется в рекреационных целях. Сюда приезжают отдохнуть от городской суеты, а заодно — порыбачить, позагорать, заняться водными и зимними видами спорта, побродить в поисках даров природы, принять участие в походах и сплавах. В этих местах развит велосипедный, водный, пеший и автомобильный туризм. Зимой в окрестностях озера можно покататься на лыжах, санях и снегоходах. Многие наведываются сюда с целью паломничества и культурного ознакомления с местными достопримечательностями.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Транспортными воротами Селигера считается город Осташков. Через него проходит железнодорожная линия, связывающая Бологое с Полоцком. Он связан автомобильными дорогами с Тверью, Ржевом, Валдаем, Великими Луками, Великим Новгородом. Более сложный и длительный путь предстоит из Москвы и Санкт-Петербурга.
                    </MiniInfoCell>
                </Group>

                <Div>
                    <Button
                    onClick={this.openShare}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[0]}
                    </Button>

                    <Button
                    target='_blank' href={ButtonLink[0]}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[1]}
                    </Button>

                    <Button
                    target='_blank' href={ButtonLink[1]}
                    className="content"
                    size="l"
                    rel="noopener noreferrer"
                    style={{ marginTop: "10px", marginBottom: "15px" }}
                    stretched
                    mode="secondary"
                    >
                        {TextButton[2]}
                    </Button>
                </Div>

                <FooterInfo />

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack,
    setPage
};

export default connect(null, mapDispatchToProps)(Travel);