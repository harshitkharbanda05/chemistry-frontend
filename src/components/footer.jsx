import './css/footer.css'
import {Link} from 'react-router-dom'
import { Component } from 'react'




export default class Footer extends Component 
{
   render()
   {
    return(
        <div className="foot">
  
           <footer>
    <div className="footer" id="footer">
        <div className="container-a">
            <div class="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <h4> Learn Chemistry </h4>
                    <p><b className="b">Hello visitors !!! </b>
This Website is about preparing students for 11<sup>th</sup> class and board exam of class 12<sup>th</sup> .
Here we will cover all the topics , important  questions and numericals which are frequently asked in exams. 
Hope our teaching will be helpful to you all to secure good marks. <div className="ab" >                                                    
ALL THE BEST..!!!</div></p>
                </div>
                <div class="col-lg-3 col-sm-2 col-xs-3">
                    <h3> Contact </h3>
                    <ul>
                        
                        <br/>
                        <li> <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbkWNZSSXpZsZNcXbMZVFXmhMvtfnGSQQBPxCFvqngdlqgTVpwGksVWsvBlgqvBCWFmJK">harshit14k@gmail.com</a> </p> </li>
                        <li> <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlFXzkDzTmRhXgRPGKcrvzPxptWGknzlNRlTKLrXjfCnMxsxgcClzBFphdXGpwWTSTWXq">anshika18.jain@gmail.com</a>  </p> </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-2 col-xs-3">
                    <ul>
                        <li> <h5> <Link to="/contact" style={{marginTop:"2em"}}> CONTACT US</Link> </h5></li>
                        <li> <h5> <a href="/periodic-table">PERIODIC TABLE</a> </h5></li>
                        <li> <h5><Link to="/class11"> CLASS 11 </Link> </h5></li>
                        <li> <h5><Link to="/class12"> CLASS 12 </Link> </h5></li>
                    </ul>
                </div>
            
        </div>
    </div>

                          
    <div className="footer-bottom">
        <div className="container-a">
            <p className="pull-left copyright"> Copyright © Anshika Jain & Harshit Kharbanda  </p>
       <p className="pull-left copyright"> National Institute of Technology , Kurukshetra</p>
        </div>
    </div>
    </div>
</footer>
        </div>
    )
}
}