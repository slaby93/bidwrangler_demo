import React, { PureComponent } from 'react';
import FullScreenLoader from './../../components/special/FullScreenLoader';

export default class AsyncComponent extends PureComponent {
  state = {
    Component: null,
  };

  componentDidMount = async () => {
    const { moduleProvider } = this.props;
    const { Component } = this.state;
    this._mounted = true;

    if (Component) {
      return;
    }

    const providedComponent = await moduleProvider();
    if (!this._mounted) return;
    this.setState({ Component: providedComponent.default });
  }

  componentWillUnmount = () => {
    this._mounted = false;
  }

  render() {
    const { Component } = this.state;

    return (
      Component ? <Component {...this.props} /> : <FullScreenLoader />
    );
  }
}
