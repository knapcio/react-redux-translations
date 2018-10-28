import React from 'react'
import { connect } from 'react-redux';

const Translate = props => {
    const text = props.translations[props.textId];
    return React.createElement('span', null, text || props.textId)
};

const mapStateToProps = (state) => { 
    return {
        translations: state.translations.texts,
    }
};

export default connect(mapStateToProps, null)(Translate);
