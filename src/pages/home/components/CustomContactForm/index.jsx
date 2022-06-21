import axios from 'axios'
import React, { useEffect } from 'react'

const CustomContactForm = () => {
  useEffect(() => {
    const getFormDetails = async () => {
      const { data } = await axios.post(
        `https://api.jotform.com/form/221702980102445/submissions?apiKey=f2e36d3fdaa89928860db517fd8c2d41`,
        [
          'submission[4]=Karim ALi',
          'submission[5]=karim@gmail.com',
          'submission[6]=Hello Shova',
        ]
      )

      console.log(data)
    }
    getFormDetails()
  }, [])
  return <div></div>
}

export default CustomContactForm
