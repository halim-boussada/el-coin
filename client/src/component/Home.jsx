import React from 'react' 
import axios from 'axios'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user : "" , 
            password : "" , 
            boli : false , 
            balance : 0 ,
            bolo : false 
        }
        this.sign = this.sign.bind(this)
        this.check = this.check.bind(this)
        this.handlechange = this.handlechange.bind(this)
    }
    handlechange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state.password)
    }
    check(){
       axios.post('/check' , this.state).then((response) => {
        if(response.data.length === 0){
            alert('there is no such user')
        }
        else if(this.state.password === response.data[0].password){
            var bol = !this.state.boli 
            var balan = response.data[0].balance
            this.setState({balance : balan})
            this.setState({boli : bol })
        }
        else if(this.state.password !== response.data[0].password){
            alert('wrong password')
        }
      }, (error) => {
        console.log(error);
      });
    }

    sign(){
        var  bol = !this.state.bolo 
        this.setState({bolo:bol})
    }
    render(){
        return <div>
             {!this.state.bolo?
            <div>
            {!this.state.boli ?
            <div>

            <label>user</label>
            <input name="user" onChange={this.handlechange}></input>
            <label>password</label>
            <input name="password"  type="password" onChange={this.handlechange}></input>
            <button type="submit" onClick={this.check}>connect</button>
            <button onClick={this.sign}>sign up</button>
            </div> : <div><Acount data={this.state} /></div>
            } </div> :  <New/> }
        </div>
    }
}

class Acount extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user : this.props.data.user , 
            to : "" , 
            balance : this.props.data.balance, 
            send : 0 , 
            forme : 0 , 
            him : 0 
        }
        this.handlechange = this.handlechange.bind(this)
        this.trans = this.trans.bind(this)
    }

    trans(){
        axios.post('/transfer' , this.state)
    }
    handlechange(e){
        this.setState({ [e.target.name] : e.target.value})
        var amount = this.state.send
        var balance = this.state.balance
        var me = parseFloat(balance) - parseFloat(amount)
        var h =  parseFloat(balance) +  parseFloat(amount)
        console.log("me befor ===> " , this.state.forme)
        this.setState({forme : me})
        console.log("me after ===> " , this.state.forme)
        this.setState({him : h})
    }
    render(){
        return <div>
           
            <div>
            <h1>hello {this.props.data.user}</h1>
            <h1>{this.props.data.balance}</h1>
            <label>transfer to :</label>
            <input name="to" onChange={this.handlechange}></input>
            <label>amount</label>
            <input name="send" type="Number" onChange={this.handlechange}></input>
            <button onClick={this.trans}>confirm</button>
            </div>
        </div>
    }
}


class New extends React.Component{
    constructor(props){
          super(props)
          this.state = {
              boli : false , 
              name : "" , 
              password : "" 
          }
          this.colect = this.colect.bind(this)
          this.sign = this.sign.bind(this)
    }
    colect(e){
        this.setState({[e.target.name] : e.target.value})
    }
    sign(){
        axios.post("/new" , this.state)
         var bol = !this.state.boli 
        this.setState({boli:bol})
    }
    render(){
        return <div>
            {!this.state.boli ?
            <div>
            <label>your name</label>
            <input name="name" onChange={this.colect}></input>
            <label>password</label>
            <input name="password" type="password" onChange={this.colect}></input>
            <button type="submit" onClick={this.sign}>sign in</button>
            </div> : <Home/> }
        </div>
    }
}

export default Home



