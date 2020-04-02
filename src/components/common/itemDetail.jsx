import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Tag from "./tag";

class ItemDetail extends Component {

    render() {
        const {selectedType} = (this.props.location.state);

            const {image, title, rating, author, publisher, pubdate, tags, price, catalog, summary} = this.props.location.state;
            const Catalog = catalog.replace(/<br>/g, ' ');
            const Summary = summary.replace(/<br>/g, ' ');
            return (
                <div className="itemDetail">

                    <div className="headBar">
                        <button onClick={() => this.props.history.goBack()}>
                            {'<图书'}
                        </button>
                        <span>{title}</span>
                    </div>
                    <div className="itemDetail_head">

                        <div className="itemDetail_image">

                            <img src={image} alt="image"
                                 style={{width: 'auto', height: 'auto', Height: "100%", maxWidth: "110px"}}
                            />

                        </div>


                        <div className="itemDetail_details">
                            <div>
                                {`名称:${title}`}
                            </div>
                            <div>
                                {`作者:${author}`}
                            </div>
                            <div>
                                {`出版社:${publisher}`}
                            </div>
                            <div>
                                {`时间:${pubdate}`}
                            </div>
                            <div>
                                {`评分:${rating.average}`}
                            </div>
                            <div>
                                {`价格:${price}`}
                            </div>

                            <Tag tags={tags}/>
                        </div>

                    </div>
                    <div className="itemDetail_body">
                        <div className="catalog">
                            <h5>序言</h5>
                            <p>{Catalog}</p>
                        </div>

                        <div className="summary">
                            <h5>简介</h5>
                            <p>{Summary}</p>
                        </div>
                    </div>

                </div>
            );
        }



}

export default withRouter(ItemDetail);



