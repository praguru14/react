import React,{ Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
// import { robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

 
class App extends Component {
    constructor(){
        super();
      this.state={
        robots : [],
        SearchField : ''
    }  
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({robots:users}));

        
    }
    onSearch= (event)=>{
        this.setState({SearchField:event.target.value})
     
        
    }

render(){
    const FilterBot =this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
        
    })
   
    return(
        <div className="tc">
        <h1>Avengers</h1>
        <SearchBox SearchChange = { this.onSearch}/>
        <Scroll>
        <CardList robots={FilterBot}/>
        </Scroll>
        </div>
    );
    }

}
   

export default App;