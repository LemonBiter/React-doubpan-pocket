import React, {Component} from 'react';

class SearchQuery extends Component {

    render() {
        const {onInput, onGetData} = this.props;
        return (
            <div className="d-flex align-items-start searchQuery">
                <div className="input-group ">
                    <input
                        type="text" onChange={(event) => onInput(event.currentTarget)}
                        style={{height: "60px", borderRadius: '0'}}
                        className="form-control input-lg"/>

                    <div className="input-group-append">
                        <button onClick={onGetData}
                                style={{borderRadius: '0',outline:'none'}}
                                className="btn btn-primary">搜索
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchQuery;
