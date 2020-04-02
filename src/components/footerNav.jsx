import React, {Component} from 'react';
import FooterTag from './common/footerTag';

class FooterNav extends Component {

    render() {
        const {selectedType, onTypeChange} = this.props;

        return (
            <div className="d-flex align-items-center footNav">
                <nav className="d-flex align-items-center justify-content-around">

                    <FooterTag id="book" label="图书"
                               iconClass="iconfont icon-shu"
                               LinkClass="navbar-brand footerNav-classes"
                               selectedType={selectedType}
                               onTypeChange={onTypeChange}/>

                    <FooterTag id="movie" label="电影"
                               iconClass="iconfont icon-dianying"
                               LinkClass="navbar-brand footerNav-classes"
                               selectedType={selectedType}
                               onTypeChange={onTypeChange}/>

                    <FooterTag id="music" label="音乐"
                               iconClass="iconfont icon-changpian"
                               LinkClass="navbar-brand footerNav-classes"
                               selectedType={selectedType}
                               onTypeChange={onTypeChange}/>



                </nav>
            </div>
        );
    }
}

export default FooterNav;
