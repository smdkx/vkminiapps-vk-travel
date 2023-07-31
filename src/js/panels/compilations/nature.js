import React from 'react';
import {connect} from 'react-redux';

import {setPage, goBack} from "../../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Banner,
    Div,
    ContentCard
} from "@vkontakte/vkui";

import {
    Icon28LotusOutline
} from "@vkontakte/icons";

class Travel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snackbar: null,
            loader: false,
        };
    }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Сказочные природные уголки Ленобласти
                </PanelHeader>

                <Banner
                    before={<Icon28LotusOutline />}
                    subheader={
                    <React.Fragment>
                        Собрали самые терапевтические места, куда поехать на выходные из Санкт-Петербурга. Смотрите, вдохновляйтесь и начинайте планировать идеальный отдых!
                    </React.Fragment>
                    }
                />

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_1')}
                    image="https://content.skyscnr.com/m/6751c681078c708a/original/Duderhof-Hills.jpg?resize=1800px:1800px&quality=100"
                    header="Дудергофские высоты"
                    subtitle="Возвышенность, сложенная двумя крупными крутосклонными холмами — горой Вороньей и горой Ореховой."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_2')}
                    image="https://content.skyscnr.com/m/79320fd6bb669c42/original/Okhta-park-Leningrad-region.JPG?resize=1800px:1800px&quality=100"
                    header="Всесезонный курорт «Охта Парк»"
                    subtitle="Большой горнолыжный парк, где есть ледовый каток, веревочный городок, гостиницы, рестораны и многое другое."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_3')}
                    image="https://content.skyscnr.com/m/17803188e1adda3e/original/Zubrovnik-Leningrad-region.jpeg?resize=1800px:1800px&quality=100"
                    header="Парк семейного отдыха и экотуризма «Зубровник»"
                    subtitle="Парк Семейного Отдыха и экотуризма «Зубровник» — это один из крупнейших по площади загородных комплексов и единственный в Ленинградской области объект, специализирующийся на экотуризме."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_4')}
                    image="https://content.skyscnr.com/m/45f533110987feba/original/Sablino-Caves-Rock-Painting.JPG?resize=1800px:1800px&quality=100"
                    header="Саблинские пещеры"
                    subtitle="Страна пещер, водопадов и скал!"
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_5')}
                    image="https://content.skyscnr.com/m/7dd4333ad49dd22c/original/Komarovo-Lenoblast-Unsplash.jpg?resize=1800px:1800px&quality=100"
                    header="Экологическая тропа «Комаровский берег»"
                    subtitle="Одно из любимых природных мест отдыха в черте Санкт-Петербурга, часть природной охраняемой территории «Комаровский берег»."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_6')}
                    image="https://content.skyscnr.com/m/3dc8e3aed6bb99ed/original/eyeem-26050266-171224885.jpg?resize=1800px:1800px&quality=100"
                    header="Природный заказник «Линдуловская роща»"
                    subtitle="Линдуловская роща — государственный природный ботанический заказник."
                    maxHeight={150}
                    />
                </Div>

                <Div>
                    <ContentCard
                    onClick={() => setPage('compilations', 'nature_info_7')}
                    image="https://content.skyscnr.com/m/1ce10d8c22dabcf2/original/Radon-springs-Lopukhinka-Unsplash.jpg?resize=1800px:1800px&quality=100"
                    header="Радоновые источники"
                    subtitle="Радоновые источники и озёра в деревне Лопухинка — региональный геологический и гидрологический памятник природы"
                    maxHeight={150}
                    />
                </Div>

            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);