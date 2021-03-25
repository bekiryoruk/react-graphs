import React, { Component } from 'react'
import RechartsDemo from './RechartsDemo'
import './app.css'

class Weight extends Component {
  state = {
    weights: [120, 250, 136, 99, 300, 450, 36, 365, 256, 460, 870, 127],
    days: [
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
    ],
    isDeleted: false,
    data: [
      { x: 2011, y: 120 },
      { x: 2012, y: 250 },
      { x: 2013, y: 136 },
      { x: 2014, y: 99 },
      { x: 2015, y: 300 },
      { x: 2016, y: 36 },
      { x: 2017, y: 365 },
      { x: 2018, y: 256 },
      { x: 2019, y: 460 },
      { x: 2020, y: 870 },
      { x: 2021, y: 127 },
      { x: 2022, y: 450 },
    ],
  }
  saveInput = (e) => {
    this.setState({ input: e.target.value })
  }
  saveInput2 = (e) => {
    this.setState({ input2: e.target.value })
  }

  addNewItem = () => {
    this.setState({ weights: [...this.state.weights, this.state.input] })

    this.setState({ days: [...this.state.days, this.state.input2] })
    this.setState({
      data: [...this.state.data, { x: this.state.input2, y: this.state.input }],
    })

    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    )
    this.forceUpdate()
  }

  deleteAll = () => {
    this.setState((prevState) => {
      return { weights: [], data: [], days: [], isDeleted: true }
    })
  }
  render() {
    return (
      <div>
        <div>
          <h1 className={'bigblue'}>Welcome to Graph Simulation</h1>
        </div>
        <div className={'pstyle'}>
          <p hidden={this.state.isDeleted}>
            This is an example of how the graph works.
          </p>
          <div>
            <p>These are your values</p>
            <ul className={'ul'}>
              {this.state.data.map((item) => {
                return (
                  <li>
                    x: {item['x']}; y: {item['y']}
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <p>Do you want to remove all values and start from stracth!</p>
            <button onClick={this.deleteAll}>Yes</button>
            <br />
          </div>
          <div>
            <p>Now, please add item to the graph</p>
            <input
              name='weight'
              type='text'
              placeholder='X value'
              onChange={this.saveInput}
            />
            <input
              name='yvalue'
              type='text'
              placeholder='Y value'
              onChange={this.saveInput2}
            />
            <button onClick={this.addNewItem}>Add</button>
          </div>
        </div>
        <div>{<RechartsDemo allData={this.state.data} />}</div>
      </div>
    )
  }
}

export default Weight
