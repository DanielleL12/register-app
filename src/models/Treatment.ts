import { IOperationCodeProps } from "./OperationCode";

export interface ITreatmentProps {
    treatment_title: string,
    operation_codes?: IOperationCodeProps[],
}