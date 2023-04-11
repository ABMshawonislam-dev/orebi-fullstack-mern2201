import axios from "axios"
import React, { useReducer } from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Container from '../components/layout/Container'
import Flex from '../components/layout/Flex'
import InputBox from '../components/layout/InputBox'

function reducer(state, action) {
    if(action.type == "one"){
        console.log(action.payload)
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    } 
}


const Registration = () => {

    const [state, dispatch] = useReducer(reducer, {
        firstName: "",
        lastName:"",
        email:"",
        telephone:"",
        password:""
    });

    console.log(state)

   

    let handleChange  = (e)=>{
            
            dispatch({type:"one",payload:{
                name: e.target.name,
                value: e.target.value
            }})


    }

    let handleSubmit = async ()=>{
        let data = await axios.post("http://localhost:8000/api/v1/auth/registration",{
            ...state
        })

        console.log("gese")
    }
    

  return (
    <Container>
        <Breadcrumb/>

        <h1>Registration</h1>
        <Flex className="flex flex-wrap gap-x-5">
            <div className='w-[49%]'>

                  <InputBox onChange={handleChange} name="firstName" title="First Name" placeholder="First Name" as="input" />
            </div>
            <div className='w-[49%]'>

                  <InputBox onChange={handleChange} name="lastName" title="Last Name" placeholder="Last Name" as="input" />
            </div>
              <div  className='w-[49%]'>

                  <InputBox onChange={handleChange} name="email" title="Email" placeholder="Email" as="input" />
            </div>
              <div className='w-[49%]'>

                  <InputBox onChange={handleChange} name="telephone" title="Telephone" placeholder="Telephone" as="input" />
            </div>
            <div className='w-1/2'>

                  <InputBox onChange={handleChange} name="password" title="Password"  placeholder="Password" as="input" />
            </div>

              <button onClick={handleSubmit}>click</button>
              
        </Flex>
    </Container>
  )
}

export default Registration