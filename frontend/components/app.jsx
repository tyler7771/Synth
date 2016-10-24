import React from 'react';
import SynthContainer from './synth/synth_container';
import RecorderContainer from './recorder/recorder_container';

class App extends React.Component {
  render () {
    return (
      <div>
        <SynthContainer />
        <RecorderContainer />
      </div>
    );
  }
}

export default App;
