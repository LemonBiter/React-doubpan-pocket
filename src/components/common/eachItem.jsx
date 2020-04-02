import React, {Component} from 'react';
import Tag from './tag'
import {Link,withRouter} from "react-router-dom";

class EachItem extends Component {
    state={
        currentItem:''
    };
    render() {

        const {item, data, selectedType, searchedTitle} = this.props;
        const detailPath = {
            pathname: '/' + searchedTitle + '/' + item['id'],
            state: item
        };
        const initDetailPath = {
            pathname: '/' + item['title'] + '/' + item['id'],
            state: item
        };

        if (selectedType === 'movie') {
            // console.log('yes,I am in movie');
            return (
                <Link to={searchedTitle === '' ? initDetailPath : detailPath}>
                    <div className="eachItem">
                        <div className="eachItem_image">

                            <img src={item['images']['small']} alt="image"
                                 style={{height: "100%", maxWidth: "100%"}}
                            />
                        </div>
                        <div className="eachItem_details" style={{paddingBottom: '10px'}}>
                            <div>
                                <h6 style={{marginBottom: '0'}}>
                                    {`${item['title']} - ${item['year']}`}</h6>
                            </div>

                            {/*<Tag type={selectedType} genres={item['genres']}/>*/}

                            {/*<div>*/}
                            {/*    {item['casts'].map((cast, index) => {*/}
                            {/*        return <span key={index}*/}
                            {/*                     style={{color: 'gray', fontSize: '0.8rem'}}*/}
                            {/*        ><small>{cast['name']}</small></span>*/}
                            {/*    })}*/}
                            {/*</div>*/}

                            <div>
                                {`评分:${item['rating']['average']}`}
                            </div>
                        </div>
                    </div>
                </Link>

            );
        } else {
            // console.log('yes,I am in book')


            return (
                <Link to={searchedTitle === '' ? initDetailPath : detailPath}>
                    <div className="eachItem">
                        <div className="eachItem_image">

                            <img src={item['image']} alt="image"
                                 style={{height: "100%", maxWidth: "100%"}}
                            />

                        </div>
                        <div className="eachItem_details">
                            <div>
                                {`名称:${item['title']}`}
                            </div>

                            {/*<Tag tags={item['tags']} item={item}/>*/}

                            <div>
                                {`作者:${item['author']}`}
                            </div>
                            <div>
                                {`评分:${item['rating']['average']}`}
                            </div>
                            <div>
                                {`时间:${item['pubdate']}`}
                            </div>
                        </div>
                    </div>
                </Link>
            );
        }
    }
}

export default withRouter(EachItem);
