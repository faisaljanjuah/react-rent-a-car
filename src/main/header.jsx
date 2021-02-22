import React, { Component } from 'react';
import Navbar from './../components/navbar';


class Header extends Component {
    state = {
        headerClass: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const headerClass = window.scrollY > 350 ? 'scrolled' : '';
        this.setState({ headerClass });
    }

    render() {
        return (
            <header className={this.state.headerClass}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="menuWrapper">
                                <div className="logo">
                                    <a href="./"><img src={require('../assets/img/reactLogo.png')} alt="ReactJS" /> React</a>
                                </div>
                                <Navbar menuClass={'nav-horizontal'} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;