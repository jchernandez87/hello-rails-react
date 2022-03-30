import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  console.log('getThings() Action!')
  return {
    type: GET_THINGS_REQUEST
  };
};

class HelloRailsReact extends React.Component {
  render () {
    const { things } = this.props;
    console.log(things)
    const thingsList = things.map((thing) => {
      return <li>{thing.name}</li>
    })
    
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getThingsBtn" onClick={() => this.props.getThings()}>getThings</button>

        <br />
        <ul>{ thingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloRailsReact);
