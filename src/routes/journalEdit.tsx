import { Button, Form, Row, Col } from "react-bootstrap";
import { useLoaderData, redirect } from "react-router-dom";

export default function JournalEdit() {
    const { journal } = useLoaderData();

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData.entries())
        const json = JSON.stringify(obj)

        // add new patient info
        const newJournal = journal

        // formData.forEach((value,key) => {
        //     if(newJournal.diagnostic.patient[key])[
        //         newJournal.diagnostic.patient[key] = value
        //     ]
        //     if(newJournal.diagnostic.diaseases.length)[
        //         newJournal.diagnostic.diaseases.map(d => {
        //             d[key] = value
        //         })
        //     ]
        // })


        const newPatient = journal.diagnostic.patient
        formData.forEach((value, key) => {
            if (newPatient[key]) {
                newPatient[key] = value
            }
        })

        const newDisease = journal.diagnostic.diaseases ?? []

        newDisease.length &&
        newDisease.forEach((d, d_index) => {
            d.disease_title = formData.get(`disease_title[${d_index}]`)
            d.disease_description = formData.get(`disease_description[${d_index}]`)
        })

        const newDiagnostic = journal.diagnostic
        newDiagnostic.diagnostic_date = formData.get('diagnostic_date') && formData.get('diagnostic_date')
        newDiagnostic.diagnostic_ecog = formData.get('diagnostic_ecog') && formData.get('diagnostic_ecog')
        newDiagnostic.patient = {patient: JSON.parse(JSON.stringify(newPatient))}
        newDiagnostic.diaseases = {patient: JSON.parse(JSON.stringify(newDisease))}

        const data = { diagnostic: JSON.parse(JSON.stringify(newDiagnostic))}
        console.log(data)

    }

    return(
        <>
            <Form onSubmit={onSubmit}>
                <h4>Patient</h4>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="patient.first_name">Förnamn</Form.Label>
                        <Form.Control
                            type="text"
                            id="patient.first_name"
                            name="first_name"
                            defaultValue={journal.diagnostic.patient.first_name}
                            aria-describedby="patientFirstName"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="patient.last_name">Efternamn</Form.Label>
                        <Form.Control
                            type="text"
                            id="patient.last_name"
                            name="last_name"
                            defaultValue={journal.diagnostic.patient.last_name}
                            aria-describedby="patientLasttName"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="patient.age">År</Form.Label>
                        <Form.Control
                            type="number"
                            id="patient.age"
                            name="age"
                            defaultValue={journal.diagnostic.patient.age}
                            aria-describedby="patientAge"
                        />
                    </Form.Group>
                </Row>
                <h4>Diagnos</h4>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="diagnos.diagnostic_date">Datum</Form.Label>
                        <Form.Control
                            type="text"
                            id="diagnos.diagnostic_date"
                            name="diagnostic_date"
                            defaultValue={new Date(journal.diagnostic.diagnostic_date).toLocaleDateString()}
                            aria-describedby="diagnosDiagnosticDate"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="diagnos.diagnostic_ecog">ECOG</Form.Label>
                        <Form.Control
                            type="number"
                            id="diagnos.diagnostic_ecog"
                            name="diagnostic_ecog"
                            min="0"
                            max="5"
                            defaultValue={journal.diagnostic.diagnostic_ecog}
                            aria-describedby="diagnosDiagnosticEcog"
                        />
                    </Form.Group>
                </Row>

                <h4>Sjukdom</h4>

                {journal.diagnostic.diaseases.length && journal.diagnostic.diaseases.map((d, d_index) => (
                    <Row className="mb-3" key={d_index}>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="diaseases.disease_title">Titel</Form.Label>
                        <Form.Control
                            type="text"
                            id="diaseases.disease_title"
                            name={`disease_title[${d_index}]`}
                            defaultValue={d.disease_title}
                            aria-describedby="diseasesDiseaseTitle"
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label htmlFor="diaseases.disease_description">Beskrivning</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            id="diaseases.disease_description"
                            name={`disease_description[${d_index}]`}
                            defaultValue={d.disease_description}
                            aria-describedby="diseasesDiseaseDescription"
                        />
                    </Form.Group>
                </Row>
                ))}

                <Button variant="primary" type="submit">
                    Spara
                </Button>
            </Form>
        </>
    )
}