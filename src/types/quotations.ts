export interface ASRequestedQuotation {
	name: string;
	request_count: number;
	quotations: Quotation[];
}

export interface Quotation {
	id: number;
	date: string;
	contact_person: string;
	commodity: string;
}

export type QuotationStatus = "REQUESTED" | "RESPONDED";

export interface QuotationFilter {
	filter: QuotationStatus;
	search?: string;
}
