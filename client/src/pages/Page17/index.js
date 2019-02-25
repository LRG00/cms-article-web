import React, { Component } from 'react';
import DocumentList from './components/DocumentList';
import axios from 'axios';

export default class Page17 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount  () {
    axios({
      url: 'http://localhost:3001/users/article-list?title=""',
      method: 'post',
      data: {title: ''}
    })
      .then((response) => {})
      .catch((err) => {});
  }
  render() {
    return (
      <div className="page17-page">
        <DocumentList />
      </div>
    );
  }
}
