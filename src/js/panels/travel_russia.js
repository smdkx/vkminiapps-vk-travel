import React from 'react';
import {connect} from 'react-redux';

import {setPage, goBack} from "../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Group,
    Button,
    Div,
    ContentCard
} from "@vkontakte/vkui";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, setPage, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Россия
                </PanelHeader>
                <Group>
                    <Div>
                        <ContentCard
                        image="https://upload.wikimedia.org/wikipedia/commons/7/7f/%D0%92%D0%B5%D1%87%D0%B5%D1%80%D0%BD%D0%B8%D0%B9_%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA.jpg"
                        header="Кисловодск"
                        subtitle="Чтобы провести лето на курорте в прямом смысле этого слова, поезжайте на воды — Кавказские Минеральные."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_1')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://ethnomir.ru/upload/medialibrary/97c/seliger.jpg"
                        header="Озеро Селигер"
                        subtitle="Отдыхать на Селигере обожают студенты. А что — недалеко, романтично и дешево. Но любви к чистым озерам, теплому песочку и хвойным лесам все возрасты покорны."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_2')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://static.tildacdn.com/tild3935-6564-4134-a330-666139626335/sochi.jpg"
                        header="Сочи"
                        subtitle="«А летом мы поедем на юг» — от этих слов на душе сразу теплеет. Сочи, который для многих с детства был синонимом беззаботного летнего отдыха у моря, после Олимпиады-2014 окончательно превратился в круглогодичный курорт."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_3')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://avatars.mds.yandex.net/get-pdb/1706591/308ced76-b988-455d-a3bc-af4f0170cc43/s1200"
                        header="Ейск"
                        subtitle="Курортный город на берегу Таганрогского залива, на юге России."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_4')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://turclub-pik.ru/crop/1160/464/uploads/blog_img/%D1%84%D0%BE%D1%82%D0%BE_%D0%BD%D0%B0_%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D1%83.jpg"
                        header="Кареальский перешеек"
                        subtitle="Если валяться на пляже вас не заманишь, отправляйтесь на Карельский перешеек к северу от Санкт-Петербурга. Между Ладожским озером и Финским заливом в июне хорошо любоваться белыми ночами, в июле — пора купаться, в августе — время собирать грибы и ягоды."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_5')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://upload.wikimedia.org/wikipedia/commons/5/5e/%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D1%80%D0%B8%D1%85%D0%B0%2C_%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9._%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_03.jpg"
                        header="Белокуриха"
                        subtitle="Когда хочется, чтобы все вокруг выключили звук и оставили вас в покое, надо ехать на Алтай."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_6')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://content.skyscnr.com/m/553c8ad2cba4c8fe/original/Kamchatka-Summer-Pixabay.jpg?resize=1800px:1800px&quality=100"
                        header="Камчатка"
                        subtitle="Полвека назад у камчатского вулкана Шивелуч испытывали первый советский луноход. Эти места и сейчас напоминают другую планету."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_7')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://content.skyscnr.com/m/5eeefc6dc04abf6f/original/Lake-Baikal-Olkhon-Island-Unsplash.jpg?resize=1800px:1800px&quality=100"
                        header="Байкал"
                        subtitle="Байкальский остров Ольхон — место силы и неземной красоты."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_8')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://static.irk.ru/media/img/site/gallery/290/7e8d89fb-bc03-4199-b809-88564a460ee0_jpg_740x100000_q85.jpg"
                        header="Хакасский заповедник"
                        subtitle="В Хакасию приезжайте, чтобы пожить на озерах. Самое большое — минеральное Белё. Поселитесь в юрте на берегу, попарьтесь в бане, а с утра освежитесь в прозрачной воде и помашите пролетающим орлам."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_9')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>

                    <Div>
                        <ContentCard
                        image="https://content.skyscnr.com/m/2ab859f6c9802bfb/original/Lotus-Summer-Astrakhan-Russia-Pixabay.jpg?resize=1800px:1800px&quality=100"
                        header="Волга"
                        subtitle="Нельзя побывать в Астрахани летом и не влюбиться. Посмотрите на белоснежный кремль, прокатитесь на теплоходике, порыбачьте в Волго-Ахтубинской пойме или схомячьте готовенькое на рыбном рынке «Селенские Исады»."
                        disabled
                        maxHeight={150}
                        />

                        <Button
                        onClick={() => setPage('travel', 'travel_ru_10')}
                        className="content"
                        size="l"
                        rel="noopener noreferrer"
                        style={{ marginTop: "10px" }}
                        stretched
                        mode="secondary"
                        >
                            Узнать подробнее
                        </Button>
                    </Div>
                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);