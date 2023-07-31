import React from 'react';
import {connect} from 'react-redux';

import {goBack} from "../store/router/actions";

import {
    Panel,
    PanelHeader,
    PanelHeaderBack,
    ContentCard,
    CardGrid
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
        const {id, goBack} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader
                    left={<PanelHeaderBack onClick={() => goBack()}/>}
                >
                    Аптечка туриста
                </PanelHeader>

                <CardGrid size="l" style={{ marginTop: "20px", marginBottom: "30px"}}>
                    <ContentCard
                    disabled
                    header="Аптечка в дорогу: все тонкости сбора"
                    text="Мы составили список аптечки в дорогу, которая включает все самое необходимое и не займет много места в багаже. Узнайте обо всех тонкостях сбора аптечки на море и в любой другой отпуск и сохраните на память список лекарств, которые должны быть всегда с собой."
                    maxheight={200}
                    />

                    <ContentCard
                    disabled
                    className="tw"
                    header="Какие лекарства взять в дорожную аптечку: необходимый минимум"
                    text= { 
                        "Аптечка в дорогу сродни страховке: надеешься, что не пригодится, но все равно берешь — так надежнее. А потом везешь домой нераспакованной. Для тех, кто не готов таскать полчемодана лекарств, но и не хочет чуть что бегать в поездке по аптекам, мы составили аптечку для одного человека на две-три недели.\n\nВ наш список входят только базовые средства для экстренного применения и лечения распространенных недугов — в соответствии с рекомендациями ВОЗ. Это минимальный набор для спокойного отдыха, в котором, если что, будет возможность обратиться к врачу или заглянуть в аптеку. Для походов и долгих роад-трипов на край земли он не подходит.\n\nМы приводим российские аналоги лекарств: они содержат то же действующее вещество, но стоят гораздо дешевле."
                    }
                    maxheight={200}
                    />

                    <ContentCard
                    disabled
                    className="tw"
                    header="Аптечка в дорогу для одного взрослого в спокойный отпуск на 2–3 недели"
                    text= { 
                        "1. Нурофен — обезболивающее, жаропонижающее (20 таблеток, 200 мг). 1 таблетка после еды 3–4 раза в сутки. Дозу можно увеличить до 400 мг 3 раза в сутки. Аналог: Ибупрофен.\n\n2. Но-шпа — при мышечных спазмах (6 таблеток, 40 мг). 1–2 таблетки 2–3 раза в сутки. Аналог: Дротаверин.\n\n3. Полисорб МП — сорбент: при пищевом отравлении (10 пакетиков 3 г). Смешать 1 столовую ложку с горкой (2,5–3 г) с 100–150 мл воды. Порошок не принимают внутрь сухим, только в виде водной суспензии. Аналог: Активированный уголь.\n\n4. Мезим форте — пищеварительное ферментное средство: при переедании, тяжести в животе, вздутии (10 таблеток). 1–2 таблетки перед едой, запивая водой. Во время еды можно принять еще 1–4 таблетки. Аналоги: Панкреатин, Пензитал.\n\n5. Церукал — при рвоте, в том числе мешающей приему лекарств (5 таблеток, 10 мг). 1 таблетка за 30 минут до еды, запивая водой, 3–4 раза в сутки. Аналог: Метоклопрамид.\n\n6. Имодиум — при диарее (6 таблеток, 2 мг). Таблетки рассасывают на языке. Начальная доза – 2 таблетки (4 мг), дальше по 1 таблетке после каждого приступа диареи. Аналог: Лоперамид.\n\n7. Хлоргексидин, пластырь, бинт, ватные диски — антисептик для обработки ран (пластиковый флакон 50 мл). Можно заменить на Хлоргексидин в таблетках (их разводят в воде по необходимости). Либо на йод-фломастер, но йодом можно обрабатывать только края раны. Вещество: Хлоргексидин (Chlorhexidine).\n\n8. Септолете — антисептик от боли в горле (10 таблеток для рассасывания). Рассосать пастилку на языке. Максимум 8 пастилок в день.\n\n9. Зиртек — антигистаминный препарат: при аллергии (10 таблеток, 10 мг). 1 таблетка 10 мг 1 раз в сутки. Иногда начальная доза 5 мг бывает достаточна. Можно заменить на Лоратидин. Аналог: Цетиризин.\n\nВ качестве обезболивающего мы приводим «Нурофен». Но если вы привыкли к другим обезболивающим, лучше добавьте в список их. Учтите, что «Анальгин» и аналоги (действующее вещество — метамизол натрия) во многих странах продаются по рецепту или совсем запрещены из-за риска развития агранулоцитоза. Аналоги «Кеторола» (кеторолака трометамин), даже если удастся купить просто так в России, за границу без рецепта лучше не везти.\n\nНекоторые путешественники возят в дорожной аптечке антибиотики широкого спектра действия, например, амоксициллин. Это имеет смысл, если в нужной стране нельзя купить антибиотик без рецепта и вы не хотите идти к местному врачу, а предпочитаете по телефону проконсультироваться со своим врачом в России.\n\nМедицинские маски, перчатки, влажные салфетки и антисептик для рук в 2020-2021 годах стали обычным делом даже для похода в ближайший магазин, так что их вы вряд ли забудете."
                    }
                    maxheight={200}
                    />
                </CardGrid>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    goBack
};

export default connect(null, mapDispatchToProps)(Travel);