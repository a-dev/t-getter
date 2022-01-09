import React, { Component } from 'react'
import t from '../libs/t'

interface FormState {
  key: string
  input: string
}

export default class Main extends Component<{}, FormState> {
  constructor(props) {
    super(props)
    this.state = { key: 'first', input: '' }
    this.handleSelectKeyChange = this.handleSelectKeyChange.bind(this)
    this.handleInputTextChange = this.handleInputTextChange.bind(this)
  }

  keys = ['first', 'second', 'third', 4, 5, 6, 'seven', 'eight', 'nine', '😇']

  handleSelectKeyChange(event) {
    this.setState({ key: event.target.value, input: '' })
  }

  handleInputTextChange(event) {
    this.setState({ input: event.target.value })
    window.GET_TEXT_DEMO.main = {
      proverbs: {
        [this.state.key]: event.target.value
      }
    }
  }

  render() {
    return (
      <main className="main">
        <div className="main__description">{t('main.description')}</div>
        <ul className="proverbs">
          {this.keys.map((key) => {
            return (
              <li key={key} className="proverb">
                <div className="proverb__key">{key}</div>
                <div className="proverb__text">{t(`main.proverbs.${key}`)}</div>
              </li>
            )
          })}
        </ul>
        <div className="form">
          <h2 className="form__title">Change here</h2>
          <select
            className="form__select"
            name="proverb-key"
            value={this.state.key}
            onChange={this.handleSelectKeyChange}
          >
            {this.keys.map((key) => {
              return (
                <option key={'opt' + key} value={key}>
                  {key}
                </option>
              )
            })}
          </select>
          <input
            className="form__input"
            type="text"
            name="proverb-value"
            onChange={this.handleInputTextChange}
            value={this.state.input}
          />
        </div>
      </main>
    )
  }
}
