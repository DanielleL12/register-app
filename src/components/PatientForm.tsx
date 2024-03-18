import { useRef, useState } from "react"
import {IPatientProps} from "../models/Patient"

const PatientForm = (props: { patient: IPatientProps }) => {

    const patient: IPatientProps = useRef(props.patient).current

    const [firstName, setFirstName] = useState(patient.first_name)
    const [lastName, setLastName] = useState(patient.last_name)
    const [age, setAge] = useState(patient.age ?? '0')

    return (
        <>
            <fieldset className="border border-1 p-4 flex flex-col items-start gap-4" name="patient">
                <legend>Patient</legend>
                <div className="flex gap-4">
                    <label htmlFor="patient.first_name">Förnamn</label>
                    <input 
                        type="text" 
                        id="patient.first_name"
                        name="first_name" 
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="border border-black px-2"
                        required 
                    />  
                </div>
                <div className="flex gap-4">
                    <label htmlFor="patient.last_name">Efternamn</label>
                    <input 
                        type="text" 
                        id="patient.last_name"
                        name="last_name" 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="border border-black px-2"
                        required 
                    /> 
                </div>
                <div className="flex gap-4">
                    <label htmlFor="patient.age">År</label>
                    <input 
                        type="number" 
                        id="patient.age"
                        name="age"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="border border-black px-2"
                    />  
                </div>
            </fieldset>
            {firstName !== '' && <p>{JSON.stringify(firstName)}</p>}
        </>
    )
}

export default PatientForm;