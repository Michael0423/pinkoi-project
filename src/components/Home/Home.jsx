import React, { Component } from 'react'
import Logo  from '../../asset/images/w130h50-logo.svg'
import ContentLayout from '../Layout/ContentLayout'
import BannerArea from '../Banner/BannerArea'
import ProductArea from '../Product/ProductArea'
import BlogArea from '../Blog/BlogArea'
import './Home.style.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {isLogin: false};

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login() {
        this.setState(pre => ({
            isLogin: !pre.isLogin
        }))
    }
    logout() {
        this.setState(pre => ({
            isLogin: !pre.isLogin
        }))
    }

    changePage(newPage) {
        this.setState(pre => ({
            page: newPage
        }))
    }

    render() {
        return (
            <div>
                <ContentLayout>
                    <header>
                        <div className="header-left">
                            <div className="logo"><img src={Logo} alt="Logo" /></div>
                            <div className="search-bar">
                                <input type="text" name="" id="" placeholder="keyword" />
                                <input type="button" value="Search"/>
                            </div>
                        </div>

                        <div className="header-right">
                            {
                                !this.state.isLogin &&
                                <input type="button" value="Login" onClick={this.login}/>
                            }
                            {
                                this.state.isLogin &&
                                <input type="button" value="Logout" onClick={this.logout}/>
                            }
                        </div>
                    </header>
                
                    <ul className="menus">
                        <li className="meun"><a href="#">Menu A</a></li>
                        <li className="meun"><a href="#">Menu B</a></li>
                        <li className="meun"><a href="#">Menu C</a></li>
                        <li className="meun"><a href="#">Menu D</a></li>
                        <li className="meun"><a href="#">Menu E</a></li>
                        <li className="meun"><a href="#">Menu F</a></li>
                        <li className="meun"><a href="#">Menu G</a></li>
                        <li className="meun"><a href="#">Menu H</a></li>
                    </ul>
                </ContentLayout>

                <BannerArea></BannerArea>

                <ContentLayout>
                    <ProductArea products={this.props.products}></ProductArea>
                </ContentLayout>

                <ContentLayout>
                    <BlogArea blogs={this.props.blogs}></BlogArea>
                </ContentLayout>

                <footer>
                    Footer Content
                </footer>
            </div>
        )
  }
}
