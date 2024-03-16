import { IDiseaseProps } from "./Disease";
import { IPatientProps } from "./Patient";

export interface IDiagnosticProps {
    patient: IPatientProps,
    diaseases: IDiseaseProps[],
    diagnostic_date: Date  | undefined,
    diagnostic_background: string,
}