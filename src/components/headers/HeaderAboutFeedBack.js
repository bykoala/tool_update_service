// 意见反馈页面的头部

import React from 'react'
import home from '../../assert/img/home.png'
import { Link } from 'react-router-dom'

export function HeaderAboutFeedBack() {
    return (
        <>
            <span className="header" style={{
                backgroundColor: "#fff",
                "-webkit-box-shadow": "0 2px 4px 0 rgb(85 85 85 / 10%)",
                "box-shadow": "0 2px 4px 0 rgb(85 85 85 / 10%)",
                position: "-webkit-sticky",
                position: "sticky",
                top: 0,
                "z-index": 100,
            }}>
                <span className="header-main container" 
                style={{
                
                        width: "1032px",
                        margin: "0 auto"
                    
                }}
                ></span>
                <Link to="/" className="header_logo" style={{
                     textDecoration: "none"
                }}>

                    <span className="logo" >
                        <img className="avatar-img" src={home}
                        ></img>
                    </span>
                    <span className="text" style={{
                        fontSize: "20px",
                        color: "#4a4a4a",
                       
                    }}>魔百和</span>

                </Link>
            </span>
            <span className="header_nav" style={{
               marginLeft: "346px",
               marginRight: "240px",
               height: "60px",
               whiteSpace: "nowrap"
            }}>

                <span className="nav_menu">
                    <a className="active" href="/products/35228/" style={{
                            display: "inline-block",
                            fontSize: "16px",
                            color:" #9ba7b9",
                            marginRight: "60px",
                            fontWeight: 500,
                            color: "#2378ff",
                            textDecoration: "none",
                            transition: "color 0.2s ease"
                    }}>首页</a>
                    <a className="active" href="/products/35228/faqs-more/"
                    style={{
                        fontSize: "16px",
                            color:" #9ba7b9",
                            textDecoration: "none",
                    }}>常见问题</a>

                </span>
            </span>
        </>
    )
}

