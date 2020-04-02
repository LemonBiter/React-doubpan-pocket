import React, {Component} from 'react';
import EachItem from './common/eachItem'

class ItemList extends Component {
    componentDidUpdate(){
    }

    render() {


        const {selectedType, searchedTitle, responseData} = this.props;

        return (

            <div className="itemList" style={{overflow: 'scroll'}}>
                {responseData.map(item => {
                    return <EachItem item={item} key={item.id}
                                     data={responseData}
                                     selectedType={selectedType}
                                     searchedTitle={searchedTitle}/>


                })}


            </div>
        );


    }

};

export default ItemList;
