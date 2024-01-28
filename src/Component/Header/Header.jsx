import './Header.scss'
function Header() {
    const header = document.querySelector(".header-section");
    const toggleClass = "is-sticky";

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 150) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    });
    return (
      <>
        <header className="header-section">
            <a className="header-title" href='javascript:;'>
              <p className="pre-word">Ly</p>
              <p className="mid-word">soso</p>
              <p className="post-word">ft</p>
              <p className="hover-text">your Digital Growth</p>
            </a>
            <ul className="services-list">
                <li className="single-list"><a href="javascript:;">Projects</a></li>
                <li className="single-list"><a href="javascript:;">Services</a></li>
                <li className="single-list"><a href="javascript:;">About</a></li>
                <li className="single-list"><a href="javascript:;">Contact</a></li>
                <li className="single-list"><a href="javascript:;">Let's Talk</a></li>
            </ul>
        </header>
      </>
    )
  }
  export default Header