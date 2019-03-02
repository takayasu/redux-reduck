import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Button} from '@material-ui/core';

import {findAll} from '../../modules/friends/friend';

class DataLoadContainer extends Component {

    render() {
        console.log("DataLoadContainer:", this.props);
        return (
            <Fragment>
                <Button onClick={this.props.findAll} variant={'contained'}>データロード</Button>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({findAll}, dispatch)
};

export default connect(null, mapDispatchToProps)(DataLoadContainer);



