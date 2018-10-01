import React, { PureComponent } from 'react';
import Styles from './Styles.scss';
import LazyLoading from "../lazy-loading";
import images from '../lazy-loading/image.jpg';

export default class App extends PureComponent {
  render() {
    return (
      <div className={Styles.app}>
        <LazyLoading
          src={images}
          width="100%"
          height="auto"
        />
      </div>
    );
  }
}