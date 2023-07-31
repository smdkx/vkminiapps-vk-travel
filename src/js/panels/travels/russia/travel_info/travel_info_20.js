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
                "https://enjoykamchatka.ru/upload/iblock/92f/enjoykamchatka-_-klyuchevskaya-sopka-_2_.jpg",
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
                    Ключевская Сопка
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Ключевская Сопка</Header>}> 
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
                            Камчатский край, 684400
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вулкан Ключевская Сопка (вулкан Ключевской, Камчатская гора) – типичный страто вулкан, с конусом правильной формы. Высота его меняется от 4750 до 4850 м над уровнем море. Возраст вулкана голоценовый, примерно около 7 тыс.лет. <p />
                            Вулкан Ключевской является самым высоким из активных вулканов Евразийского материка. Не переставая, клубятся над его вершиной сероватые клубы паров и газов. При безветрии столбом поднимаются они к небу и, достигнув где-нибудь атмосферного течения, гигантским шлейфом вытягиваются вдаль. Парение то ослабевает, то усиливается, и тогда бывают слышны взрывы, над вершиной, вспыхивает красноватое зарево. <p />
                            Такое обычное для него состояние может длиться годами, но раз в 5–6 лет, а иногда и меньше, накопив запас энергии, вулкан вступает в очередную активную фазу своей деятельности. Непрерывно следуют друг за другом мощные взрывы, тысячами вылетают раскаленные вулканические бомбы, текут по склонам светящиеся потоки лавы, пепловые тучи поднимаются на многие километры, покрывая окрестности серым налетом пепла, превращая солнечный день в сумерки или темную ночь. <p />
                            По активности Ключевской вулкан уступает только Карымскому, но во много раз превосходит его силой извержений. Наиболее сильные из них происходят через вершинный кратер. Его диаметр до 1984 года был около 650–700 м, а глубина — около 600 м. После последнего лавового извержения в 1984 году через вершинный кратер лава застыла в нем в виде пробки. <p />
                            Подножие вулкана изобилует побочными шлаковыми конусами и лавовыми куполами, которых насчитывается около сотни. За время существования вулкана их появлялось во много раз больше, но часть была погребена под толщами изверженных материалов, другая — разрушилась. Высота существующих конусов колеблется в пределах от 60 до 100 м, но встречаются и выше. <p />
                            Восхождение на вулкан начинается со стороны Апахончича. Это название и побочного кратера, и наблюдательной вулканологической станции. Станция находится на отметке 740 м над уровнем моря, в 80 км от посёлка Ключи.
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