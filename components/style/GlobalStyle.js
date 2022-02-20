import React from "react"

const GlobalStyle = props => {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>
          {`
            * {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
              box-sizing: border-box;
            }

            ::placeholder {
              color: black;
              font-size: 14px;
              font-weight: 400;
              opacity: 1;
            }
          `}
        </style>
      </div>
    )
  }
  
  export default GlobalStyle;