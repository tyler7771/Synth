import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  constructor(props) {
    super(props);
    this.notes = this.generateNotes();
  }

  generateNotes() {
    return NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.includes(note)) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render () {
    this.playNotes();
    return (
      <div>
        <div>synth</div>
        {
          this.notes.map((note, idx) => <NoteKey key={idx} note={NOTE_NAMES[idx]} pressed={this.props.notes.includes(NOTE_NAMES[idx])} />)
        }
      </div>
    );
  }
}

export default Synth;
