import React from 'react';
const Header = () => {
  
        return ( 
            <div className = "row">
                <div className = "col-lg-4">
                    <div className = "card" style = {{backgroundColor: "#FFB6C1"}}>
                        <div className = "card-header">Total Invested Amount</div>
                  <div className = "card-body">
                    <h4 className ="card-title">10000</h4>
                   
                  </div>
                    </div>
                </div>
                <div className = "col-lg-4">
                    <div className = "card" style = {{backgroundColor: "#FFB6C1"}}>
                        <div className = "card-header">Number Of Investments</div>
                  <div className = "card-body">
                    <h4 className ="text-center card-title">2000</h4>
                  </div>
                    </div>
                </div>
                <div className = "col-lg-4">
                    <div className = "card" style = {{backgroundColor: "#FFB6C1"}}>
                        <div className = "card-header">Rate Of return</div>
                  <div className = "card-body">
                    <h4 className ="text-center card-title">8000</h4>
                  </div>
                    </div>
                </div>

            </div>
         );
    }

 
export default Header;