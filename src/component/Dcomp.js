import React, { useContext } from 'react'
import { Idconsumer, UserConsumer } from './Context'

const Dcomp = () => {

    const Username =useContext(UserConsumer)
    const Idemail=useContext(Idconsumer)
  return (
    <div>
        <h3>{Username} <br/> {Idemail}</h3>
        {/* <UserConsumer>
            {
                user=>{
                    return(
                        <>
                           <h3> Name : {user}</h3>
                        </>
                    )
                }
            }
        </UserConsumer> */}
    </div>
  )
}

export default Dcomp