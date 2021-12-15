import { Component } from "react";
import check from './check.png'

export class GroceryList extends Component{
    state = {
        user_input:'',
        groceryList: []
    }

    onChangeEvent(e){
        this.setState({user_input: e});
     
    }

    addItem(input){
        if(input === '')
        {
            alert('Введитие значение')
        }else {
        let list_array = this.state.groceryList;
        list_array.push(input);
        this.setState({groceryList: list_array, user_input:''})
       
    }
    }

    onFormSubmit(e){
       e.preventDefault(); 
    }

    deleteItem(){
        let list_array = this.state.groceryList;
        list_array = [];
        this.setState({groceryList: list_array})

    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
               <input type='text' placeholder="что вы хотите купить"
               onChange={(e)=>this.onChangeEvent(e.target.value)}
               value={this.state.user_input}/>
            </div>
            <div className="container">
            <button onClick={()=> this.addItem(this.state.user_input)} className="add btn">Add</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index) =>(
                 <li onClick={this.crossedWord} key={index}>
                 <img src={check} alt='check' width='20'/>
                 {item}</li>   
                 ))}
            </ul>
            <div className="container"><button onClick={()=> this.deleteItem()} className="delete btn">Очистить список</button> 
            </div>
            </form>  
            </div>
        )
    }
}
