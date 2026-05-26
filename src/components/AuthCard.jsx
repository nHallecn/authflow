import React from 'react'

const AuthCard = ({title,subtitle, children}) => {

  return(
    <div>
      <div>
        <div>
          <div>🔐🔑</div>

          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthCard