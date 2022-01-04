import React, { Component } from “react”;
import PropTypes from “prop-types”;
class PropTypeExample extends Component {
 render() {
 const { username } = this.props;
 return
Welcome, { username }
 }
}
PropTypeExample.PropTypes = {
 name: PropTypes.string.isRequired
};
