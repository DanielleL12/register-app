export interface IOperationCodeProps {
    chapter: string,
    category: number | null,
    subcategory: number | null,
    depth_code_national?: string,
    depth_code_who?: number | null,
}