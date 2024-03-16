import { IOperationCodeProps } from "./OperationCode";

export interface ITreatmentProps {
    title: string,
    operation_codes?: IOperationCodeProps[],
}