import React from 'react';

const FooterTag = (props) => {
    const {onTypeChange,LinkClass,id,label,iconClass,selectedType} = props;
    const newLinkClass = LinkClass + (selectedType===id?' currentType':'');

    return (
            <a className={newLinkClass } href="#" id={id}
               onClick={()=>onTypeChange(id)}>
                <i className={iconClass}/>
                <span><small>{label}</small></span>
            </a>

    );
};

export default FooterTag;
