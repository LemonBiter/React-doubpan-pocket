import React, {Component} from 'react';

class Tag extends Component {

    handleTagLength = () => {
        const tagsArr = this.props.tags.filter(tag => {
            return tag.title.length < 5
        });
        const length = tagsArr.length > 3 ? 3 : tagsArr.length;
        tagsArr.splice(length, tagsArr.length - 1);
        return tagsArr;
    };

    render() {
        const {tags, genres, type} = this.props;

        if (type === 'movie') {

            return (
                <div>
                    {genres.map((item, index) => {
                        return <span className="eachTag_red" key={index}>
                    {item}
                    </span>
                    })}
                </div>
            )
        } else {
            let tagsArr = this.handleTagLength();
            return (
                <div>
                    {tagsArr.map((item, index) => {
                        return <span className="eachTag_yellow" key={index}>
                                {item.title}
                            </span>
                    })}
                </div>
            );
        }

    }
}

export default Tag;
