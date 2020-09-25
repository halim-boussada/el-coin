import React from 'react' 
import ReactDOM from 'react-dom'
import Home from './component/Home.jsx'
class App extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <Home/>
    }
}

ReactDOM.render(<App/> , document.getElementById('app'))

