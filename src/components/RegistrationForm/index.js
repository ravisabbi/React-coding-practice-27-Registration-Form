import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErr: false,
    showLastNameErr: false,
    isFormSubmitted: false,
  }

  submitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true, firstName: '', lastName: ''})
    } else {
      this.onBlurFirstName()
      this.onBlurLastName()
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameErr: true})
    } else {
      this.setState({showFirstNameErr: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLastNameErr: true})
    } else {
      this.setState({showLastNameErr: false})
    }
  }

  onAnotherResponse = () => {
    this.setState({isFormSubmitted: false})
  }

  showSumbmission = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-text">Submitted Successfully</p>
      <button
        type="button"
        className="another-response-btn"
        onClick={this.onAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderingRegistrationForm = () => {
    const {firstName, lastName, showFirstNameErr, showLastNameErr} = this.state

    const ErrorFirstNameEl = showFirstNameErr ? 'error-element' : ''
    const ErrorLastNameEl = showLastNameErr ? 'error-element' : ''

    return (
      <form onSubmit={this.submitForm}>
        <div className="field-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
            placeholder="First name"
            className={ErrorFirstNameEl}
          />
          {showFirstNameErr && <p className="error-msg">Required</p>}
        </div>

        <div className="field-container">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
            placeholder="Last name"
            className={ErrorLastNameEl}
          />
          {showLastNameErr && <p className="error-msg">Required</p>}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="Registration-container">
        <h1>Registration</h1>
        <div className="responsive-container">
          {isFormSubmitted
            ? this.showSumbmission()
            : this.renderingRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
