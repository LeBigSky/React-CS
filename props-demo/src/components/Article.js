import React from 'react'
import '../css/Article.css'
import elipse from '../assets/images/icon-ellipsis.svg'



class Article extends React.Component{
    
    render(){
        return <div className={this.props.class}>
                  <div className="frontcard"> 
                    <div className='titleline'>
                      <h4>{this.props.titre}</h4><img src={elipse} alt="" />
                    </div>
                    <div className='datas'>
                      <div className='timedata'>
                      <span>{this.props.datatime}</span><span>hrs</span>
                      </div>
                      <div className='previousdata'><span>{this.props.previous}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
    }
}
export default Article