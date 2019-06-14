import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: 'transparent',
            mobileMenu: false
        }
        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
        this.handleNavbarTransparency = this.handleNavbarTransparency.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleNavbarTransparency);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleNavbarTransparency);
    }

    handleNavbarTransparency() {
        var scroll = window.scrollY;
        if (scroll > 68) {
            this.setState({
                navbar: 'rgba(0,0,0,0.9)'
            });
        } else {
            this.setState({
                navbar: 'transparent'
            });
        }
    }

    openMobileMenu() {
        this.setState({
            mobileMenu: true
        })
    }

    closeMobileMenu() {
        this.setState({
            mobileMenu: false
        })
    }

    render() {
        return (
            <header className="navbar" style={{ backgroundColor: this.props.solid ? '#000' : this.state.navbar }}>
                <div className="container">
                    <nav className="navbar__nav">
                        <Link className="navbar__logo" to="/">Abhishek Baghel</Link>

                        <ul className="navbar__navlist">
                            <li><Link to="/#home">Home</Link></li>
                            <li><Link to="/#about" >About</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                            <li><Link to="/projects" activeClassName="navbar__active">Projects</Link></li>
                            <li><Link to="/blog" activeClassName="navbar__active">Blog</Link></li>
                        </ul>

                        <ul id="hamburger" className="navbar__navlist hamburger">
                            <li><a href="#"><i onClick={this.openMobileMenu} className="fas fa-hamburger"></i></a></li>
                        </ul>
                    </nav>

                    <div id="mobile-menu" style={{ transform: this.state.mobileMenu ? 'scale(1)' : 'scale(0)' }}>
                        <p id="mobile-menu-close" onClick={this.closeMobileMenu} className="close">&times;</p>
                        <ul>
                            <li><Link to="/#home">Home</Link></li>
                            <li><Link to="/#about" >About</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blog" activeClassName="navbar__active">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;