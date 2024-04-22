// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByCoverage from '../VaccinationCoverage'

const h = {
  isInitial: 'INITIAL',
  isSuccess: 'SUCCESS',
  isFailure: 'FAILURE',
  isLoading: 'LOADING',
}
class CowinDashboard extends Component {
  state = {
    allDetails: [],
    status: h.isInitial,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({status: h.isLoading})
    const v = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      method: 'GET',
    }
    const b = await fetch(v, options)

    if (b.ok === true) {
      const c = await b.json()
      const updatedData = {
        vaccinationByCoverage: c.last_7_days_vaccination.map(eachItem => ({
          vaccinationDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        })),
        vaccinationByGender: c.vaccination_by_gender.map(eachItem => ({
          count: eachItem.count,
          gender: eachItem.gender,
        })),
        vaccinationByAge: c.vaccination_by_age.map(eachItem => ({
          age: eachItem.age,
          count: eachItem.count,
        })),
      }
      this.setState({allDetails: updatedData, status: h.isSuccess})
    } else {
      this.setState({status: h.isFailure})
    }
  }

  onRenderCoverage = () => {
    const {updatedData} = this.state
    const {vaccinationByAge, vaccinationByGender, vaccinationByCoverage} =
      updatedData
    return (
      <div>
        <VaccinationByCoverage balu={vaccinationByCoverage} />
        <VaccinationByGender roy={vaccinationByGender} />
        <VaccinationByAge hukum={vaccinationByAge} />
      </div>
    )
  }

  onLoader = () => (
    <div>
      <Loader type="ThreeDots" height="100%" width={50} color="#5a8dee" />
    </div>
  )

  onFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="bol"
      />
    </div>
  )

  bob = () => {
    const {status} = this.state
    switch (status) {
      case h.isSuccess:
        return this.onRenderCoverage()
      case h.isFailure:
        return this.onFailureView()
      case h.isLoading:
        return this.onLoader()
      default:
        return null
    }
  }

  render() {
    return <div className="kol">{this.bob()}</div>
  }
}
export default CowinDashboard
