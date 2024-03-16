// Interfaces for registering

export interface IPatientProps {
    first_name: string,
    last_name: string,
    age?: number,
}

export interface IDiseaseProps {
    titles: string,
    description?: string,
}

export interface IOperationCodeProps {
    chapter: string,
    category: number,
    subcategory: number,
    depth_code_national?: string,
    depth_code_who?: number,
}

export interface IDiagnosticProps {
    patient: IPatientProps,
    diaseases: IDiseaseProps[],
    diagnostic_date: Date  | undefined,
    diagnostic_background: string,
}

export interface ITreatmentProps {
    title: string,
    operation_codes?: IOperationCodeProps[],
}

export interface IJournalProps {
    patient_health: string;
    diagnostic: IDiagnosticProps,
    treatments: ITreatmentProps[],
}

