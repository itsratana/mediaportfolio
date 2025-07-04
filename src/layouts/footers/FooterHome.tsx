 

export default function FooterHome() {
    const handleToContact = (e: React.MouseEvent<HTMLButtonElement>, link: string) => {
        if (link.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
    return (
      <>
        <footer className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-top">
                  <p> Have a project in mind?</p>
                  <h2><button onClick={(e) => handleToContact(e, '#contact')}>LETS WORK</button></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <p className="copy-left-text">Contact for Work</p>
              </div>
              <div className="col-lg-6 col-sm-6">
                <p className="copy-right-text"> © Copyright {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
  