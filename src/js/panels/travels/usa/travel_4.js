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
    Div
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
                "https://img.tourister.ru/files/2/5/1/8/5/5/5/3/clones/870_490_fixedwidth.jpg",
                "https://planetofhotels.com/sites/default/files/attracrions/bukingemskiy-fontan-6.jpg",
                "https://incomartour.com.ua/mediafiles/images/places/20180402225527/thumbs/artinstitutechicago%20(14)-tmb-1200x628xfill.jpg",
            ],
        };

        this.openShare = this.openShare.bind(this);
    }

    openShare () {
        bridge.send("VKWebAppShowWallPostBox", {
            "message": "А вы знали, что Много лет назад на берегу озера Мичиган началось зарождение третьего по численности населения города США, известного в современном мире под названием Чикаго?" + ShareInfo,
          });
      }

    render() {
        const {id, goBack, setPage} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Чикаго
                </PanelHeader>
                
                <Group header={<Header mode="secondary">Куда сходить</Header>}> 
                    <CardScroll size="l" style={{ marginBottom: "-50px" }}>
                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_10')}
                            image={this.state.images[0]}
                            header="Уиллис-тауэр"
                            subtitle="Небоскрёб в Чикаго, США, имеющий высоту 442,1 м и насчитывающий 108 этажей."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_11')}
                            image={this.state.images[1]}
                            header="Букингемский фонтан"
                            subtitle="Фонтан в Чикаго. Расположен в Грант-Парке, считается «входными воротами» города."
                            maxHeight={200}
                            style={{ marginBottom: "50px" }}
                        />

                        <ContentCard
                            onClick={() => setPage('travel', 'travel_us_info_12')}
                            image={this.state.images[2]}
                            header="Чикагский Институт Искусств"
                            subtitle="Художественный музей и высшее учебное заведение в Чикаго, штат Иллинойс."
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
                            Много лет назад на берегу озера Мичиган началось зарождение третьего по численности населения города США, известного в современном мире под названием Чикаго. Своим появлением город обязан древнему поселению индейцев, живших на юго-западе водоема, заросшего зарослями дикого чеснока. Аборигены называли диковинное растение Chikagu. Следы густой ароматной растительности давно пропали, как и сами индейцы, а название города так и осталось. <p />
                            По своим габаритам и значимости крупный американский мегаполис уступает лишь двум городам — Нью-Йорку и Лос-Анджелесу. По финансовым оборотам капитала занимает прочное второе место после гиганта Нью-Йорка. В Чикаго сосредоточены важнейшие транспортные магистрали североамериканского континента, чему немало способствует оптимальное для транспорта местоположение. Речной порт Харбор, базирующийся на озере Мичиган, отвечает за широкомасштабные грузовые перевозки в связке с морским каналом Санкт-Лоренц. Массивный аэропорт 0'Хара ежечасно встречает и провожает до двух сотен авилайнеров. Исправно работает железнодорожная магистраль. <p />
                            Согласно административной юрисдикции, город-миллионер является центром округа Кук и частью штата Иллинойс. Жилой агломерат протянулся вдоль берега почти на 30 миль и в сумме с пригородными поселениями стал приютом для девяти с половиной миллионов американцев. За внушительные размеры эта агломерация получила название «Большой Чикаго». В самом городе живет около 3 миллионов жителей, что ненамного меньше, чем в легендарном «Городе Ангелов» и «Большом Яблоке». История населенного пункта тоже не обошлась без появления прозвищ. Отдавая должное тому факту, что Чикаго считают негласной столицей Среднего Запада, американцы прозвали свою малую родину «Городом ветров» и «Вторым городом». <p />
                            Вторые имена огромного населенного пункта возникли не на пустом месте и тесно связаны с богатой историей поселения. Знаковой датой в летописи города записан 1837 год, именно он считается меткой присвоения бывшей деревне статуса «город». А начиналось все с почина французского миссионера Жака Маркетта в 70-е годы 16 века. Это он принял знаменательное решение оборудовать здесь иезуитский пункт. К 1840 году в Чикаго уже проживает 4000 горожан. Стремительному росту молодого городка в те времена помогло ключевое положение будущего мегаполиса между западной и восточной частью Соединенных Штатов. Вся большая страна была заинтересована в прогрессе и развитии населенного пункта, могущего связать транспортными артериями целое государство. <p />
                            Трагическую и вместе с тем важную стратегическую роль в развитии современного облика города сыграл мощный пожар 1871 года. Многие строения в Чикаго сгорели дотла без какой-либо надежды на восстановление. Нужно было срочно решать судьбу пострадавшего поселения радикальным способом. Так было принято решение отдать приоритет строительству гигантских небоскребов и высоток, ставших для всего мира визитной карточкой «Второго города». Главной концепцией архитекторов и строителей стала идея завоевать пространство не вширь, а вверх. Максимальными темпами Чикаго был отстроен в кратчайшие сроки. Архитектурная планировка принесла городу неожиданное климатическое новшество — город стал любимой обителью свирепых ветров. Так и родилось прозвище «Город ветров». Злые языки по сей день утверждают, что это название подчеркивает не только разгул в городе буйного ветра, но и намекает на политические настроения местных жителей по отношению к центральной власти. <p />
                            С наименованием «Второй город» все намного проще. Удобное географическое положение административного центра округа Кук не могло не дать стремительный толчок росту промышленности в регионе. Первоначально агломерация держала пальму первенства по производству мяса и мясных продуктов. Далее приоритет достался сразу 3-м богиням тяжелой промышленности: черной металлургии, химической и машиностроительной сфере. Железнодорожное и водное сообщение добавили росту гигантов веса и значимости, Чикаго не смог обогнать в промышленной области только один единственный американский монолит — Нью-Йорк, обеспечив себе 2 место на промышленном пьедестале почета и заслуженное прозвище «Второй город». <p />
                            Этих успехов для крупного города в штате Иллинойс оказалось мало. Чикаго прославился на весь мир еще в нескольких номинациях. Во-первых, заново отстроенный населенный пункт стал безусловным примером для архитектурных инноваций всех Соединенных Штатов, заработав первенство в строительных вопросах всего государства. Во-вторых, проблемы с канализацией заставили специалистов применить неординарное решение и развернуть течение местной реки, заставив ее брать начало в реке Иллинойс и принимать стоки очистного канала. Третьим достижением стало основание одного из самых культовых храмов науки — Чикагского университета, заслуги которого в мировой науке признаются учеными всей планеты. <p />
                            Отдельных строк заслуживает криминальное прошлое города. В 20-е годы прошлого века Чикаго облюбовали банды гангстеров, устроивших на его улицах настоящий преступный террор. Самый известный главарь одного из зловещих синдикатов, легендарный уличный боец Аль Капоне, вошел во все криминальные хроники полицейских управлений мира, как изощренный и беспощадный гангстер всех времен и народов. Причиной роста правонарушений различного уровня стал приток приезжающих в Чикаго на работу мигрантов афроамериканского происхождения. Тяжелый труд на промышленных предприятиях не устраивал новых жителей мегаполиса, они предпочитали быстрый заработок с помощью грабежей, воровства и убийств. У криминальной стороны города неожиданно возникла и положительная сторона. В те годы центр округа Кук стал малой родиной всемирно известного афроамериканского джаза и местом проживания его отца-основателя Кинга Оливера, это музыкальное направление получило впоследствии распространение по всему миру. В Чикаго зародились и первые ростки современного ислама в США, плавно перешедшие позже в другие поселения американского севера. <p />
                            Современный Чикаго — это колоритный гигант, на улицах которого можно найти все, что только угодно душе. Правда, местные жители все чаще покидают короля урбанизации и норовят переехать в более экологически чистые предместья города. Центр города манит туристов и гостей сияющими витринами знаменитых модных магазинов, по-прежнему поражают воображение 100-этажные здания и сияние миллионов неоновых огней ярких разноцветных рекламных щитов. <p />
                            Дневные прогулки по побережью озера Мичиган, знакомство с новыми коллекциями модной одежды в бутиках на просторах «Великолепной мили», осмотр диковинных достопримечательностей и созерцание небоскребов в ночные часы сменяется другими развлечениями. На многочисленных музыкальных площадках, в кафе и ресторанах в Чикаго все еще можно послушать настоящие шедевры джазовых композиций, провести время на зажигательной вечеринке в ночном клубе или отдать должное мастерству профессионалов в заведениях общественного питания. Город славится на весь мир отменной кухней и богатой фантазией мастеров кулинарного дела. <p />
                            В этом активном населенном пункте штата Иллинойс часто проходят международные научные симпозиумы, конференции и культурные фестивали, например, джазовые. Примечательно и то, что в городе много зеленых оазисов: парков, причудливых клумб, цветущих садов и уютных скверов. Чикаго — один из самых привлекательных городов не только в Северной Америке, но и на всей нашей планете.
                    </MiniInfoCell>
                </Group>

                <Group header={<Header mode="secondary">Как добраться</Header>}>
                    <MiniInfoCell
                        before={<Icon24PlaceOutline/>}
                        textWrap="full"
                        textLevel="primary"
                        >
                            Прямых рейсов в Чикаго из городов России нет, лететь придётся через Нью-Йорк (аэропорт Кеннеди), куда выполняет рейсы из Москвы Аэрофлот (из аэропорта Шереметьево). <p />
                            Стыковочными рейсами до Чикаго можно долететь из Москвы и других городов России через Хельсинки, Стокгольм, Копенгаген, Варшаву, Лондон, Амстердам, Вену, Будапешт, Стамбул, Рим, Мюнхен, Франкфурт, Брюссель, Цюрих, Париж, Мадрид и Барселону. <p />
                            <b>Как добраться из Нью-Йорка в Чикаго</b>
                            <p />
                            Добраться самолетом из любого более-менее крупного города США до Чикаго не составит никакой проблемы. Например, из Нью-Йорка в чикагский аэропорт О-Хара выполняется от 46 до 82 рейсов в день. Время в полёте — два с небольшим часа. <p />
                            В Чикаго из Нью-Йорка вы можете съездить на автобусе с повышенным комфортом фирмы Greyhound — он отправляется от автомобильной станции Port Authority (Восьмое Авеню, 625). Каждый день ходят несколько рейсов (и не только компании Greyhound), время поездки — от 16 до 20 часов. Чтобы время в пути пролетело незаметно, в автобусах бесплатно предоставляется Wi-Fi. Есть и другой способ скоротать время — насладиться видом из окна транспорта. <p />
                            Добраться до Города Ветров без пересадок можно и по железной дороге, например на поезде фирмы Амтрак — он отправляется с Пенсильванского железнодорожного вокзала единожды в сутки и идёт 19 часов. Цена проезда — примерно по цене авиабилета, в полтора-два раза больше по сравнению с проездом на автобусном транспорте.
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