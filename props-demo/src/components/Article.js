import React from 'react'
import '../css/Article.css'



class Article extends React.Component{
    
    render(){
        return <div className={this.props.class}>
                 <div className="frontcard"> 
                   <div className='titleline'>
                     <h4>{this.props.titre}</h4>
                     <p>...</p>
                   </div>
                   <div className='timedata'>
                     <h2>{this.props.datatime}</h2><h2>hrs</h2>
                   </div>
                   <div className='previousdata'><p>{this.props.previous}</p></div>
                 </div>
                </div>
    }
}
export default Article