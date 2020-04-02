import React, {Component} from 'react';
import {withRouter,Switch,Route} from 'react-router-dom';
import FooterNav from "./components/footerNav";
import fetchJsonp from "fetch-jsonp"
import './style.css';
import ItemDetail from "./components/common/itemDetail";
import ItemList from "./components/itemList";
import SearchQuery from "./components/searchQuery";


class App extends Component {
    state = {
        searchedTitle: '',
        selectedType: 'book',
        responseData: []
    };

    componentDidMount() {
        this.handleTypeChange(this.state.selectedType);
    }
    componentDidUpdated(){
        console.log(this.state.selectedType);
    }
    handleTypeChange = (type) => {

        this.handleGetData(type);
    };

    handleInputValue = ({value}) => {
        this.setState({searchedTitle: value.trim()});
    };

    handleGetData = async (type) => {

        const {searchedTitle} = this.state;
        const urlHeader = encodeURI('http://sas.qq.com/cgi-bin/db/data');
        const parameterT = encodeURI('t=["ke_coding_' + type + '"]');
        const searchTitle = encodeURI(searchedTitle);
        const searchRange = '%25';

        let entireURL = null;
        if (type === 'movie') {
            const parameterPHead = encodeURI('q={ke_coding_movie(_page:1,_limit:10,title:"');
            const parameterPTail = (encodeURI('"){id,title,rating{max,average,stars,min,details{score_1,score_2,score_3,score_4,score_5}},genres,casts{alt,avatars{small,large,medium},name,name_en,id},durations,mainland_pubdate,pubdates,has_video,collect_count,original_title,subtype,directors{alt,avatars{small,large,medium},name,id},year,images{small,large,medium},alt}}'));
            entireURL = `${urlHeader}?${parameterT}&${parameterPHead}${searchTitle}${searchRange}${parameterPTail}`;
        }
        if (type === 'book') {
            const parameterPHead = encodeURI('q={ke_coding_book(_page:1,_limit:10,title:"');
            const parameterPTail = (encodeURI('"){id,title,rating{max,numRaters,average,min},subtitle,author,pubdate,tags{count,name,title},origin_title,image,binding,translator,catalog,pages,images{small,large,medium},alt,publisher,isbn10,isbn13,url,alt_title,author_intro,summary,price,ebook_price,ebook_url,series{id,title}}}'))
            entireURL = `${urlHeader}?${parameterT}&${parameterPHead}${searchTitle}${searchRange}${parameterPTail}`;
        }



        const {result: responseData} = await fetchJsonp(entireURL)
            .then(res => res.json())
            .then(data => data);

        this.setState({responseData,selectedType:type});

        if (this.state.responseData) {
            this.props.history.push('/' + this.state.searchedTitle)
        }

    };



    render() {
        return (
            <div className="app">
                <SearchQuery onInput={this.handleInputValue}
                             onGetData={this.handleGetData}
                />

                <Switch>
                    <Route path="/:searchTitle/:id"
                           render={() => <ItemDetail/>}/>

                    {/* 搜索结果页展示*/}
                    <Route path="/:searchTitle" exact
                           render={() => <ItemList {...this.state}/>}/>

                    {/*初始页面展示*/}
                    <Route path="/" exact
                           render={() => <ItemList {...this.state}/>}/>

                    {/*<Redirect path="/"/>*/}
                </Switch>

                <FooterNav selectedType={this.state.selectedType}
                           onTypeChange={this.handleTypeChange}
                />
            </div>
        );
    }
}


export default withRouter(App);


