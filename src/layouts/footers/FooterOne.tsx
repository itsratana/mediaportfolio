 

export default function FooterOne() {
  const handleToContact = () => {
    // window.history.back();
    localStorage.setItem('scrollTo', 'contact');
    window.location.href = '/';
  }
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p> Have a project in mind?</p>
                <h2><button onClick={handleToContact}>LETS WORK</button></h2>
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
