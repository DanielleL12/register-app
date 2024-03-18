import { Badge, Button, Form, ListGroup } from "react-bootstrap";
import { IJournalProps } from "../models/Journal";


const journalList: IJournalProps[] = [
    {
        patient_health: '',
        diagnostic: {
            patient: {
                first_name: "john",
                last_name: "Holsund",
                age: 56,
            },
            diaseases: [
                {
                    disease_title: 'Levercancer',
                    disease_description: 'Flera cancertumörer i levern'
                }
            ],
            diagnostic_date: new Date('2022-05-30T09:00:00'),
            diagnostic_ecog: 2
        },
        treatments: [
            {
                treatment_title: "Behandling",
            },
            {
                treatment_title: "kirurgi",
                operation_codes: [
                    {
                        chapter: 'M',
                        category: 10,
                        subcategory: 5,
                        depth_code_who: 3,
                    }
                ]
            },
        ],
    },
    {
        patient_health: '',
        diagnostic: {
            patient: {
                first_name: "My",
                last_name: "Sundholm",
                age: 36,
            },
            diaseases: [],
            diagnostic_date: new Date('2022-09-30T09:00:00'),
            diagnostic_ecog: 1
        },
        treatments: [
            {
                treatment_title: "",
            }
        ],
    }
];

export async function loader({ params }) {
    const journal = journalList[params.journalId];
    return { journal };
  }

export default function Journal() {

    return(
        <>
            <ListGroup>
                {
                    journalList.map((journal, index) => (
                        <ListGroup.Item key={index} className="mb-2">
                            <div className="container-fluid mb-2">
                                <h5>Patient</h5>
                                <div className="d-flex justify-content-between ">
                                    <p><span className="fw-semibold me-2">Förnamn:</span>{journal.diagnostic.patient.first_name}</p>
                                    <p><span className="fw-semibold me-2">Efternamn:</span>{journal.diagnostic.patient.last_name}</p>
                                    <p><span className="fw-semibold me-2">Ålder:</span>{journal.diagnostic.patient.age}</p>
                                </div>
                            </div>
                            <div className="container-fluid mb-2">
                                <h5>Diagnos</h5>
                                <div className="d-flex gap-4 ">
                                    <p>Registrerad den <span>{new Date(journal.diagnostic.diagnostic_date).toLocaleDateString() }</span></p>
                                    <p><span className="fw-semibold me-2">Allmäntillstånd:</span>{journal.diagnostic.diagnostic_ecog}</p>
                                </div>
                                
                                <div className="d-flex justify-content-between mx-2 ">
                                    <ListGroup className="container-fluid">
                                        {
                                            journal.diagnostic.diaseases.length ?
                                           journal.diagnostic.diaseases.map((disease, d_index) => (
                                                <ListGroup.Item key={d_index} className="d-flex gap-3">
                                                    <p className="fw-semibold m-0">{ disease.disease_title}</p>
                                                    <p className="m-0">{disease.disease_description ?? 'no description !'}</p>
                                                </ListGroup.Item>
                                           )) :
                                           (<p className="text-secondary"> Inga diagnos registrerad </p>)
                                        }
                                    </ListGroup>
                                </div>
                            </div>
                            <div className="container-fluid mb-2">
                                <h5>Treatment</h5>
                                <div className="d-flex justify-content-between mx-2 ">
                                    <ListGroup className="container-fluid">
                                        {
                                            journal.treatments.length ?
                                            journal.treatments.map((treatment, t_index) => (
                                                <ListGroup.Item key={t_index} className="d-flex gap-3">
                                                    <p className="fw-semibold m-0">{ treatment.treatment_title}</p>
                                                    { treatment.operation_codes?.length && treatment.treatment_title.match(/kirurgi/) &&
                                                        (
                                                            treatment.operation_codes.map((operation_code, oc_index) => (
                                                                <Badge bg="dark" key={oc_index} className="">
                                                                    {operation_code.chapter}{operation_code.category} . {operation_code.subcategory}{operation_code.depth_code_national ?? operation_code.depth_code_who }
                                                                </Badge>
                                                            ))
                                                        )
                                                    }
                                                </ListGroup.Item>
                                           )) :
                                           (<p className="text-secondary"> Inga diagnos registrerad </p>)
                                        }
                                    </ListGroup>
                                </div>
                            </div>
                            <Form action={`journal/${index}/edit`} className="text-end py-2">
                                <Button variant="primary" type="submit">Edit</Button>
                            </Form>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>
    )
}