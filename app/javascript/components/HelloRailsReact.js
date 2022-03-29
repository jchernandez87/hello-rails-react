import React from "react"
import PropTypes from "prop-types"
class HelloRailsReact extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloRailsReact.propTypes = {
  greeting: PropTypes.string
};
export default HelloRailsReact
