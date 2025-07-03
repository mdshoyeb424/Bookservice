import "./footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="text-primary">📚 BookService</h3>
        <p>Your trusted platform for discovering, managing, and sharing books.</p>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} BookService. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer