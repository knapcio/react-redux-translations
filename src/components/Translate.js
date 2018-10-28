import react from 'react';
import { connect } from 'react-redux';

const Translate = ({textId, translations}) => React.createElement('span', null, translations[textId]);

const mapStateToProps = (state) => { 
    return {
        translations: state.translations.texts,
    }
};

export default connect(mapStateToProps, null)(Translate);
