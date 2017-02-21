import React from 'react';
import { connect } from 'react-redux';
import TabSimulation from '../components/tab-simulation';
import log from 'loglevel';
import store from '../store';

class TabSimulationContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabSimulation
        modelDescription={this.props.modelDescription}
        modelSimulation={this.props.modelSimulation}
        plotVariables={this.props.plotVariables}
        {...this.props}
      />
    );
  }

}

const mapStateToProps = function(store) {
  return {
    modelDescription: store.modelDescription.description,
    modelSimulation: store.modelSimulation,
    plotVariables: store.plotVariables.plotVariables,
    modelParameters: store.modelParameters
  };
};

export default connect(mapStateToProps)(TabSimulationContainer);