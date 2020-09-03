import React, {Component} from 'react';
import axios from 'axios'
class Ajax extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }


    componentDidMount(){
        axios.get("http://localhost:3001/").then(response=>{
          
          this.setState({posts:response.data}) 
        });
    }
     render(){
         return(
            <div>
             <table responsive="sm" >
                    <thead>
                        <tr>
                        {/* <th>id</th>&nbsp;&nbsp;
                        <th>jurisdiction_name</th>&nbsp;&nbsp; */}
                         <th>plan_id</th>&nbsp;&nbsp;
                         <th>plan_name</th>&nbsp;&nbsp;
                         <th>plan_status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.posts.map((itm,k)=>{
                           return(
                               <tr>
                                    {/* <td>{itm.id}</td>&nbsp;&nbsp;
                                    <td>{itm.jurisdiction_name}</td>&nbsp;&nbsp; */}
                                    <td>{itm.plan_id}</td>&nbsp;&nbsp;
                                    <td>{itm.plan_name}</td>&nbsp;&nbsp;
                                    <td>{itm.plan_status}</td>
                                    
                               </tr>
                           )
                       })}
                        
                         
                     
                    
                 </tbody>
             </table>
             </div>
           
        )
     }
}
export default Ajax;
