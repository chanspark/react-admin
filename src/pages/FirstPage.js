import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as userActions from "actions/user";
import { Link } from "react-router-dom";

class FirstPage extends Component {
    render() {
        return (
            <div>
                <h2>First Page</h2>
                <p>{`Email: ${this.props.user.email}`}</p>
                <Link to={"/second"}>Second</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
