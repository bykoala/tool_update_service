import React from 'react'
import logo from '../../assert/img/logo.png'

export function HeaderLeft() {
    return (
        <>
             <img src={logo} alt="logo"></img>
          <span style={{
            margin: "20px",
            "fontSize": "20px",
            "fontWeight": "600"
          }}>魔百和自动化后管平台</span>
        </>
    )
}

