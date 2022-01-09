import React, { Component } from 'react'
import t from '../libs/t'

export default class Header extends Component {
  render(): React.ReactNode {
    const link = 'https://github.com/a-dev/t-getter'
    return (
      <header className="header">
        <h1 className="header__title">{t('header.title')}</h1>
        <div className="header__description">
          <p>{t('header.description')}</p>
          <p
            dangerouslySetInnerHTML={{ __html: t('header.more_details', link) }}
          ></p>
        </div>
      </header>
    )
  }
}
