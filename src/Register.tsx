import { FormEvent, useState } from "react";
import PatientForm from './components/PatientForm'
import { IJournalProps } from "./models/Journal";
import { IPatient } from "./models/Patient";

function Register() {

    const defaultJournal: IJournalProps = {
        diagnostic: {
            patient: {
                first_name: "john",
                last_name: "Holmsund",
                age: 56
            },
            diaseases: [],
            diagnostic_date: undefined,
            diagnostic_background: ""
        },
        treatments: [],
        patient_health: "good"
    }


    const [newJournal, setNewJournal] = useState<IJournalProps>(defaultJournal)
    const [_patient, _handlePatient] = useState<IPatient>(defaultJournal.diagnostic.patient)

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData.entries())
        const json = JSON.stringify(obj)

        // add new patient info
        const newPatient = defaultJournal.diagnostic.patient
        formData.forEach((value, key) => {
            if (newPatient[key]) {
                newPatient[key] = value
            }
        })

        const data = { ...obj, patient: JSON.parse(JSON.stringify(newPatient))}
        console.log(Object.fromEntries(formData.entries()))
        console.log(data)
        console.log(defaultJournal)

    }

    return (
        <>
            <h1 className="text-3xl font-bold">Min Journal</h1>


            <form onSubmit={onSubmit}>
                <label>
                    Patient allmäntillstånd: 
                    <input
                        value={newJournal.patient_health}
                        name="patient_health" 
                        type="text" 
                        className="border border-black"
                        onChange={(e) => newJournal.patient_health = e.target.value}
                    />
                </label>
                <PatientForm patient={_patient} handlePatient={_handlePatient} />
                
                <button type="submit">Submit</button>
            </form>

            {/* <PatientForm patient={_patient} handlePatient={_handlePatient} /> */}

            {/* {defaultJournal.diagnostic.patient && <p>{JSON.stringify(defaultJournal.diagnostic.patient)}</p>} */}
            
            {/* {
                 newJournal.map(journal => 
                    <form key={journal.patient_health}>
                        {journal.patient_health}
                    </form>
                )
            } */}
        </>
        
    );

}

export default Register;
