import './Home.scss';

function Home(){
    return (
        <>
        <div className="home-section">
            <div className="container">
                <div className="hero-card">
                    <div className="left-card">
                        <div className="text-box">
                            <h1 className="card-title">This is the turning point of your digital growth</h1>
                            <p className="card-desc">With a data-first approach, we identify growth opportunities, design optimal experiences, and build scalable solutions.</p>
                            <a href="javascript:;" className="action-btn">Are you ready? ↗</a>
                        </div>
                    </div>
                    <div className="right-card">
                        <div className="text-box">
                            <p className="card-head">
                                <span className="card-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--heroicons" width="15px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M15.98 1.804a1 1 0 0 0-1.96 0l-.24 1.192a1 1 0 0 1-.784.785l-1.192.238a1 1 0 0 0 0 1.962l1.192.238a1 1 0 0 1 .785.785l.238 1.192a1 1 0 0 0 1.962 0l.238-1.192a1 1 0 0 1 .785-.785l1.192-.238a1 1 0 0 0 0-1.962l-1.192-.238a1 1 0 0 1-.785-.785l-.238-1.192Zm-9.031 3.88a1 1 0 0 0-1.898 0l-.683 2.051a1 1 0 0 1-.633.633l-2.051.683a1 1 0 0 0 0 1.898l2.051.684a1 1 0 0 1 .633.632l.683 2.051a1 1 0 0 0 1.898 0l.683-2.051a1 1 0 0 1 .633-.633l2.051-.683a1 1 0 0 0 0-1.898l-2.051-.683a1 1 0 0 1-.633-.633L6.95 5.684Zm7 8a1 1 0 0 0-1.898 0l-.184.551a1 1 0 0 1-.632.633l-.551.183a1 1 0 0 0 0 1.898l.551.183a1 1 0 0 1 .633.633l.183.551a1 1 0 0 0 1.898 0l.184-.551a1 1 0 0 1 .632-.633l.551-.183a1 1 0 0 0 0-1.898l-.551-.184a1 1 0 0 1-.633-.632l-.183-.551Z"></path>
                                    </svg>
                                </span>
                                latest Cases</p>
                            <h2 className="card-title">Result driven</h2>
                            <p className="card-desc">Read more about the custom solutions we built for a wide range of clients.</p>
                            <a href="javascript:;" className="card-redirect">
                                <span className="redirect-svg">

                                </span>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
