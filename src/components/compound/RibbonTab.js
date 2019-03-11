import React from 'react';
import PropTypes from 'prop-types';

const RibbonTab = props => {
    const { title, children, renderType, onClick } = props;
    switch(renderType){
        case "tab":
            return <div className={`tab`} onClick={onClick} >{title}</div>;
        case "content":
            return {children}; 
    }
};

RibbonTab.propTypes = {
    title: PropTypes.any.isRequired,
    children: PropTypes.any,
    renderType: PropTypes.string
};
RibbonTab.defaultProps = {
    title: 'tab'
};

RibbonTab.displayName ="Ribbon Tab";

export default RibbonTab;