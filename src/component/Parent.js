import React from 'react'
import Acomp from './Acomp'
import { Idprovider, UserProvider } from './Context'

const Parent = () => {
  return (
    <div>
        <UserProvider value="Shivay Roy kumar">
        <Idprovider value="Shivay@gamil.com">
        <Acomp/>
        </Idprovider>
        </UserProvider>
        
    </div>
  )
}

export default Parent