


import React, { useState } from 'react'

import  {Formik , Field , Form , ErrorMessage} from 'formik'

import  * as yup  from 'yup'

export default function SingupForm() {


        const [data,setData]  = useState({});



        const defaultValues = {

                name:"",
                password:"",
                email:"",
                gender:""



        }



    const validationSchema= yup.object().shape({
        name: yup.string().required('Name is mandatory'),
        email:yup.string().required('Email is mandatory').email('Insert valid email'),
        password: yup.string().required('password is mandatory').min(6),
        gender: yup.string().required('gender is mandatory')
})



      
        const handleSubmit = (values)=>{

                    console.log('values ',values)
                    

                    setData(values)

               
                    

        }


  return (
    <div>

        <h1>{data.name}  {data.password}  {data.email}  {data.g}</h1>

        <Formik   initialValues={defaultValues}    validationSchema={validationSchema}   onSubmit={handleSubmit} >
            <Form  className='container col-md-5'>

        <Field type="text"  name="name"  placeholder="Enter user name"  className="form-control mt-4" />
                 <p className="text-danger">
                    <ErrorMessage name="name"/>
                </p>

        <Field type="text"  name="password"  placeholder="Enter password"  className="form-control mt-4" />

              <p className="text-danger">
                    <ErrorMessage name="password"/>
                </p>

        <Field type="email"  name="email"  placeholder="Enter email"  className="form-control mt-4" />
                 <p className="text-danger">
                    <ErrorMessage name="email"/>
                </p>

        <Field component="select" name="gender" className="form-control mt-4">
                    <option value="disabled">please select</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </Field>

                <p className="text-danger">
                    <ErrorMessage name="gender"/>
                </p>


            <button type="submit"  className='btn btn-primary'>Signup</button>

        </Form>
        </Formik>

    </div>
  )
}


