import { connect } from 'react-redux';

const Translate = ({textId}) => this.props.translations[textId];

const mapStateToProps = (state) => { 
    return {
        translations: state.translations.texts,
    }
};

export default connect(mapStateToProps, null)(Translate);
