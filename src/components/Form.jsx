import { useState } from 'react'
import Billing from './Billing'

const Form = () => {

    const [data, setData] = useState({
        billFirstName: "",
        billLastName: "",
        billAddress1: "",
        billAddress2: "",
        billCity: "",
        billState: "",
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === 'checkbox' ? e.target.checked : e.target.value

        setData(prevData => ({ ...prevData, [name]: value}))

    }

    const { billAddress2, ...otherProps } = data

    const canSave = [...Object.values(otherProps)].every(Boolean)

    const content = (
        <form className='form flex-col' onSubmit={handleSubmit}>
            <h2>Billing Info</h2>

            <Billing data={data} handleChange={handleChange} />

        <button className='button' disabled={!canSave}
        onClick={(e) => console.log('save button has been clicked')}
        > Submit</button>
        </form>
    )

    return content
}

export default Form