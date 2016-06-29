import React from 'react';
import { Note } from '../styles/note.react.css';

export default class App extends React.Component {
  render() {
    return (
      <Note
        isLarge
        isEmphasised>
        Hi, this is a note!
      </Note>
    );
  }
}
