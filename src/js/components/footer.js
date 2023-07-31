import React from 'react';
import {Link, Footer} from "@vkontakte/vkui"

import { FooterSite } from './settings';

class FooterInfo extends React.Component {

    render() {
        return (
            <Footer>
                Информация была взята с <Link target='_blank' href={FooterSite[0]}>{FooterSite[0]}</Link> и <Link target='_blank' href={FooterSite[1]}>{FooterSite[1]}</Link>
            </Footer>
        );
    }
}

export default FooterInfo; 