import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      amountChange: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }


  handleClick(e) {
    console.log("handleClick() happened")


    let amountDue = parseFloat(this.state.amountDue)
    console.log(amountDue + "  Amount Due")


    let received = parseFloat(this.state.amountReceived)
    console.log(received + "  Amount Received")

    //calculate total amount of change
    let amountChange = (received - amountDue).toFixed(2)
    console.log(amountChange + "  Amount Change")
    this.setState({
      amountChange: amountChange
    })

    //calculate total dollar value
    let dollars = Math.floor(amountChange)
    console.log(dollars + "  Dollars")

    //calculate twenties
    let twenties = Math.floor(dollars / 20)
    console.log(twenties + "  twenties")
    this.setState({
      twenties: twenties
    })
    let amountTwenties = twenties * 20
    console.log(amountTwenties + "  value of twenties")

    //calculate tens
    let tens = Math.floor((amountChange - amountTwenties) / 10)
    console.log(tens + "  tens")
    this.setState({
      tens: tens
    })
    let amountTenTwen = (tens * 10) + amountTwenties
    console.log(amountTenTwen + "  amount of change already shown")

    //calculate fives
    let fives = Math.floor((amountChange - amountTenTwen) / 5)
    console.log(fives + "  fives")
    this.setState({
      fives: fives
    }) 
    let amountFiveTenTwen = (fives * 5) + amountTenTwen
    console.log(amountFiveTenTwen + " amount of change now shown")
    
    //calculate ones
    let ones = Math.floor(amountChange - amountFiveTenTwen)
    console.log(ones + " ones")
    this.setState({
      ones: ones
    })
    let amountTotalDollars = amountFiveTenTwen + ones
    console.log(amountTotalDollars + "  paper total")

    //calculate coin change
    let amountCoin = (amountChange - amountTotalDollars).toFixed(2)
    console.log(amountCoin + " coin change")

    //calculate quarters
    let quarters = Math.floor(amountCoin / 0.25)
    console.log(quarters + " # of quarters")
    this.setState({
      quarters: quarters
    })
    let amountQuarters = quarters * 0.25
    console.log(amountQuarters + " quarters")

    //calculate dimes
    let dimes = Math.floor((amountCoin - amountQuarters) / 0.10)
    console.log(dimes + "  # of dimes")
    this.setState({
      dimes: dimes
    })
    let amountDimQuart = (dimes * 0.10) + amountQuarters
    console.log(amountDimQuart + " coin shown so far")

    //calculate nickels
    let nickels = Math.floor((amountCoin - amountDimQuart) / 0.05)
    console.log(nickels + " # of nickels")
    this.setState({
      nickels: nickels
    })
    let amountNicDimQuart = ((nickels * 0.05) + amountDimQuart).toFixed(2)
    console.log(amountNicDimQuart + " coin shown now")

    //calculate pennies
    let pennies = Math.floor(((amountCoin - amountNicDimQuart) / 0.01).toFixed(2))
    console.log(pennies + " # of pennies")
    this.setState({
      pennies: pennies
    })

  }


  render() {
    return (
      
      <div className="container-fluid">
        <div className="page-header">
          <font color="white"><h1>Change Calculator</h1></font>

        </div>
        <hr/>
        <p>tag</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
            <div className="card-header">Enter Information</div>
              <div className="card-body">
                <label className="font-weight-bold">how much is due?</label>
                <p/>
                <input name="amountDue"
                       onChange={this.handleChange}
                       placeholder="enter amount due"
                       value={this.state.amountDue}
                       type="number"
                       className="form-control"/>
                <p></p>       
                <label className="font-weight-bold">how much was received?</label>
                <p></p>
                <input name="amountReceived"
                       onChange={this.handleChange}
                       placeholder="enter amount received"
                       value={this.state.amountReceived}
                       type="number"
                       className="form-control"/>
                <p></p>
                <button className="btn btn-primary form-control"
                        onClick={this.handleClick}>
                        Click to Calculate
                </button>
              </div>
            </div>
          </div>


          <div className="col-md-8">
            <div className="card">
              <div id="amountChange"
                   className="card-header alert alert-success"
                   onChange={this.handleChange}>
                   The total change due is ${this.state.amountChange}</div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Twenties</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.twenties}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Tens</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.tens}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Fives</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.fives}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                  <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Ones</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.ones}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card">
                  <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Quarters</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.quarters}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                  <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Dimes</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.dimes}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                  <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Nickels</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.nickels}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card">
                  <div className="card-title"></div>
                    <div className="card-body text-center form-control">
                      <label className="font-weight-bold">Pennies</label>
                      <p className="lead" onChange={this.handleChange}>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
          
        </div>
      </div>
    );
  }
}

export default App;
