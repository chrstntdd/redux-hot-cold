import React from 'react';
import { connect } from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header(props) {
  let infoModal;
  if (props.showModal) {
    infoModal = <InfoModal />;
  }

  return (
    <header>
      <TopNav />
      {infoModal}
      <h1>HOT or COLD</h1>
    </header>
  );
}

const mapStateToProps = state => ({
  showModal: state.showModal
});

export default connect(mapStateToProps)(Header);
