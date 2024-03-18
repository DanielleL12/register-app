import { Button, Form } from "react-bootstrap";
import { useLoaderData, redirect } from "react-router-dom";

export async function action({ request, params }) {
    const { updatePatient } = useLoaderData();
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    updatePatient(updates)
    return redirect(`/contacts/${params.contactId}`);
}

export default function PatientEdit() {

    const { patient } = useLoaderData();

    return(
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="patient.first_name">Förnamn</Form.Label>
                    <Form.Control
                        type="text"
                        id="patient.first_name"
                        name="first_name"
                        defaultValue={patient.first_name}
                        aria-describedby="patientFirstName"
                    />
                    <Form.Label htmlFor="patient.last_name">Efternamn</Form.Label>
                    <Form.Control
                        type="text"
                        id="patient.last_name"
                        name="last_name"
                        defaultValue={patient.last_name}
                        aria-describedby="patientLasttName"
                    />
                    <Form.Label htmlFor="patient.age">År</Form.Label>
                    <Form.Control
                        type="number"
                        id="patient.age"
                        name="age"
                        defaultValue={patient.age}
                        aria-describedby="patientAge"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Spara
                </Button>
            </Form>
        </>
    )
}