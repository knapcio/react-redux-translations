import React from 'react'
import { connect } from 'react-redux';

const Translate = props => React.createElement('span', null, props.translations[props.textId]);

const mapStateToProps = (state) => { 
    return {
        translations: state.translations.texts,
    }
};

export default connect(mapStateToProps, null)(Translate);
