import { Button, Form, ListGroup } from "react-bootstrap";
import { IPatientProps } from "../models/Patient"
import { useRef } from "react";

const patientList: IPatientProps[] = [
    {
        first_name: "john",
        last_name: "Holsund",
        age: 56,
    },
    {
        first_name: "My",
        last_name: "Sundholm",
        age: 36,
    }
]

export async function loader({ params }) {
    const patient = patientList[params.patientId];
    function updatePatient(newPatient: IPatientProps) {
        patientList[params.patientId] = newPatient;
    }
    return { patient, updatePatient };
  }

export default function Patient() {

    return(
        <>
            <ListGroup>
                {
                    patientList.map((patient, index) => (
                        <ListGroup.Item className="d-flex justify-content-between align-items-center" key={index}>
                            <h5>{patient.first_name} {patient.last_name} - {patient.age}</h5>
                            <Form action={`patient/${index}/edit`}>
                                <Button variant="primary" type="submit">Edit</Button>
                            </Form>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>
    )
}