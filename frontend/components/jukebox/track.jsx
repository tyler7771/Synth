import React from 'react';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <p>{this.props.track.name}</p>
        <button onClick={this.props.onPlay} disabled={this.props.isRecording}>Play</button>
      </div>
    );
  }
}

export default Track;
