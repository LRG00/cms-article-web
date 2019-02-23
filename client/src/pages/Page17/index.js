import React, { Component } from 'react';
import DocumentList from './components/DocumentList';

export default class Page17 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page17-page">
        <DocumentList />
      </div>
    );
  }
}
