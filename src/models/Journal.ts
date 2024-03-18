import { IDiagnosticProps } from "./Diagnostic";
import { ITreatmentProps } from "./Treatment";

export interface IJournalProps {
    patient_health: string;
    diagnostic: IDiagnosticProps,
    treatments: ITreatmentProps[],
}