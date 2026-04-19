import React from "react";

function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>

                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" alt="smallcase" style={{width: "50%"}}/>
                    <p className="text-small text-muted mt-3">Thematic inverstment platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" alt="streak" style={{width: "50%"}}/>
                    <p className="text-small text-muted mt-2">Algo & strategy platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" alt="sensibull" style={{width: "50%"}}/>
                    <p className="text-small text-muted mt-4">Options trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodha fundhouse" style={{width: "50%"}}/>
                    <p className="text-small text-muted mt-3">Asset management</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/goldenpiLogo.png" alt="goldenpi" style={{width: "50%"}}/>
                    <p className="text-small text-muted mt-3">Bonds trading platform</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" alt="ditto" style={{width: "40%"}}/>
                    <p className="text-small text-muted mt-3">Insurance</p>
                </div>

                <button 
                    type="button"
                    className='p-2 btn btn-primary fs-5 mb-5' 
                    style={{width:"20%", margin: "0 auto"}}
                >
                    Signup Now
                </button>

            </div>
        </div>
     );
}

export default Universe;