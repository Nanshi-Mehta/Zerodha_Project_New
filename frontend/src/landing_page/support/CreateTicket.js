import React from "react";

const linkStyle = {
    background: "none",
    border: "none",
    padding: 0,
    textDecoration: "none",
    lineHeight: "2.5",
    cursor: "pointer"
};

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                
                <h1 className='fs-2'>
                    To create a ticket, select a relevant topic
                </h1>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className='mb-4'>
                        <i className="fa fa-plus-circle"></i> Account Opening
                    </h4>

                    <button style={linkStyle}>Online Account Opening</button><br/>
                    <button style={linkStyle}>Offline Account Opening</button><br/>
                    <button style={linkStyle}>Company, Partnership and HUF Account</button><br/>
                    <button style={linkStyle}>Opening</button><br/>
                    <button style={linkStyle}>NRI Account Opening</button><br/>
                    <button style={linkStyle}>Charges at Zerodha</button><br/>
                    <button style={linkStyle}>Zerodha IDFC FIRST Bank 3-in-1 Account</button><br/>
                    <button style={linkStyle}>Getting Started</button>
                </div>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className='mb-4'>
                        <i className="fa fa-user"></i> Your Zerodha Account
                    </h4>

                    <button style={linkStyle}>Login Credentials</button><br/>
                    <button style={linkStyle}>Account Modification and Segment Addition</button><br/>
                    <button style={linkStyle}>DP ID and bank details</button><br/>
                    <button style={linkStyle}>Your Profile</button><br/>
                    <button style={linkStyle}>Transfer and conversion of shares</button>
                </div>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className='mb-4'>
                        <i className="fa fa-bar-chart"></i> Your Zerodha Account
                    </h4>

                    <button style={linkStyle}>Margin/leverage, Product and Order types</button><br/>
                    <button style={linkStyle}>Kite Web and Mobile</button><br/>
                    <button style={linkStyle}>Trading FAQs</button><br/>
                    <button style={linkStyle}>Corporate Actions</button><br/>
                    <button style={linkStyle}>Sentinel</button><br/>
                    <button style={linkStyle}>Kite API</button><br/>
                    <button style={linkStyle}>Pi and other platforms</button><br/>
                    <button style={linkStyle}>Stockreports+</button><br/>
                    <button style={linkStyle}>GTT</button>
                </div>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className='mb-4'>
                        <i className="fa fa-credit-card"></i> Account Opening
                    </h4>

                    <button style={linkStyle}>Adding Funds</button><br/>
                    <button style={linkStyle}>Fund Withdrawal</button><br/>
                    <button style={linkStyle}>eMandates</button><br/>
                    <button style={linkStyle}>Adding Bank Accounts</button>
                </div>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 className='mb-4'>
                        <i className="fa fa-circle-o-notch"></i> Console
                    </h4>

                    <button style={linkStyle}>Reports</button><br/>
                    <button style={linkStyle}>Ledger</button><br/>
                    <button style={linkStyle}>Portfolio</button><br/>
                    <button style={linkStyle}>60 Day Challenge</button><br/>
                    <button style={linkStyle}>IPO</button><br/>
                    <button style={linkStyle}>Referral Program</button>
                </div>

                <div className='col-4 p-5 mt-2 mb-2'>
                    <h5 className='mb-4'>
                        <i className="fa fa-circle-thin"></i> Coin
                    </h5>

                    <button style={linkStyle}>Understanding Mutual Funds</button><br/>
                    <button style={linkStyle}>About Coin</button><br/>
                    <button style={linkStyle}>Buying and Selling through Coin</button><br/>
                    <button style={linkStyle}>Starting an SIP</button><br/>
                    <button style={linkStyle}>Managing Your Portfolio</button><br/>
                    <button style={linkStyle}>Coin App</button><br/>
                    <button style={linkStyle}>Moving to Coin</button><br/>
                    <button style={linkStyle}>Government Securities</button>
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;