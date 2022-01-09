import React, { Component } from 'react'
import t from '../libs/t'

export default class Footer extends Component {
  render(): React.ReactNode {
    return (
      <footer className="footer">
        <div className="footer__time">{t('footer.time')}</div>
      </footer>
    )
  }
}
