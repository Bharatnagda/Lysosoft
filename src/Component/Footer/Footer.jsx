import './Footer.scss'
function Footer() {
    return (
      <>
        <footer className="footer-section">
           <div className="footer-nav-card">
                <div className="single-card">
                        <span className="card-span">Menu</span>
                    <ul className="card-ul">
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Home</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Projects</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Services</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">About</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Contact</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="single-card">
                        <span className="card-span">social</span>
                    <ul className="card-ul">
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Instagram</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Linkedin</a>
                        </li>
                        <li className="card-li">
                            <a href="javascript:;" className="li-link">Whatsapp</a>
                        </li>
                    </ul>
                </div>
                <div className="single-card">
                        <span className="card-span">contact</span>
                    <ul className="card-ul">
                        <li className="card-li">
                            <a href = "mailto: lysosoft@gmail.com" className="li-link">lysosoft@gmail.com</a>
                        </li>
                        {/* address link will be remote */}
                    </ul>
                </div>
                <div className="single-card legal">
                    <a href="javascript:;" className="legal-page">Legal</a>
                    <a href="javascript:;" className="copy-right">&copy; 2020</a>
                </div>

           </div>
        </footer>
      </>
    )
  }
  export default Footer