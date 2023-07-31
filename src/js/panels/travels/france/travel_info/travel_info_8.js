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
    CardGrid,
    Link
} from "@vkontakte/vkui";

import { 
    Icon24PlaceOutline,
    Icon24ClockOutline,
    Icon24MoneyCircleOutline,
    Icon24LinkCircle,
    Icon24ArticleOutline
} from '@vkontakte/icons';

class TravelInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://cms.enjourney.ru/upload/Jana/Frankreich/Lyon/The-Tony-Garnier-Urban-Museum.jpg",
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
                    Городской музей Тони Гарнье
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Городской музей Тони Гарнье</Header>}> 
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
                            Rue des Serpollieres, 4.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Режим работы</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ClockOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Со вторника по пятницу, с 14:00 до 18:00.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Стоимость посещения</Header>}> 
                    <MiniInfoCell
                        before={<Icon24MoneyCircleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Вход: — 5 EUR, бесплатно для детей в возрасте до 12 лет.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Официальный сайт</Header>}> 
                    <MiniInfoCell
                        before={<Icon24LinkCircle />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            <Link target="_blank" href="http://www.musees-nationaux-alpesmaritimes.fr">http://www.musees-nationaux-alpesmaritimes.fr</Link>
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Главная информация</Header>}> 
                    <MiniInfoCell
                        before={<Icon24ArticleOutline />}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Городской музей Тони Гарнье был открыт в 1985 г. как крупномасштабный проект по восстановлению застройки в восточной части города, в квартале Этат-Юни. К 1988 г. группа местных жителей создала некоммерческую организацию, по инициативе которой мурали украсили 24 стены домов, построенных знаменитым архитектором Тони Гарнье в 1920—1933 гг. Для этого была подряжена группа художников «Сите де ля Креатьон», которые оформили этот инновационный и необычный музей как дань уважения архитектору. С тех пор музейный проект заслужил уже немало наград, в том числе приз ЮНЕСКО в 1991 г. <p />
                            Что особенно интересно в истории создания музея — так это роль местных жителей. После того, как квартал Гарнье был достроен в 1934 г., он ни разу не ремонтировался до 80-х гг. Стены почернели, лифтов не было, дома никак не соответствовали современному представлению о нормальном городском жилье. Жильцам самим приходилось строить ванные комнаты, так как в оригинальном проекте они не были предусмотрены. В конце концов, за несколько лет бумажных битв жители квартала добились не только реставрации своих жилищ, но и подтверждения высокой культурной значимости квартала, за которым последовало сотрудничество с художниками. <p />
                            <b>Последние шесть муралей создавались художниками шести частей света: с Берега Слоновой Кости, из Египта, США, Индии, Мексики, а также нашим соотечественником Григорием Шестаковым.</b> <p />
                            Сегодня квартал представляет собой музей под открытым небом. Здания, выстроенные Гарнье, интересны и сами по себе, и как пример городской планировки. А ансамбль уличных муралей на их стенах, безусловно, лучший в Лионе. Он состоит из 25 монументальных полотен, объединённых темой «идеального города» Гарнье. Одна мураль воссоздаёт атмосферу дома Гарнье; 12 муралей изображают промышленный город в соответствии с главной теоретической работой архитектора, написанной в 1901-1917 гг.; 4 мурали посвящены главным архитектурным достопримечательностям Лиона работы Гарнье; и ещё 6 муралей представляют современное видение идеального города. Последние шесть создавались художниками шести частей света: с Берега Слоновой Кости (Юсуф Бат), из Египта (Абдель Салам), США (Мэтт Малликан), Индии (Мариса Лара), Мексики (Артуро Гуэрреро), а также нашим соотечественником Григорием Шестаковым. <p />
                            <b>Ночью специально подсвеченные мурали представляют собой совершенно магическое зрелище.</b> <p />
                            Также в составе музея — воссозданная квартира 1930 г., которая была полностью переоборудована в 1991 г. и превращена в выставочный зал. Внутри можно увидеть элементы оригинального декора и вещицы жильцов, начиная от цвета стен и заканчивая характерной ретромебелью. Все экспонаты музея были переданы в дар жителями квартала.
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