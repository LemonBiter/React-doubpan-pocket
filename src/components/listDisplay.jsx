import React, {Component} from 'react';
import {Route, Switch,withRouter,Redirect} from 'react-router-dom'
// import fetchJsonp from "fetch-jsonp"
import SearchQuery from "./searchQuery";
import ItemList from "./itemList";
import ItemDetail from "./common/itemDetail";



class ListDisplay extends Component {
    state = {
        searchedTitle: 'a',
        responseData: [],
        selectedItem: '',
        selectedType: 'book'
    };

    componentDidMount() {
    }



    componentDidUpdate(prevProps){

    }






    render() {

        return (
            <div className="mainPage">





                <div style={{height: '160px', flexGrow: 'none'}}/>
            </div>
        );
    }

}

export default  withRouter(ListDisplay);



