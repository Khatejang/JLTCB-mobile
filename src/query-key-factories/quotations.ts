import type { QuotationFilter } from "../types/quotations";

export const quotationKeys = {
	all: () => ["quotations"] as const,
	getQuotations: (filter: QuotationFilter) =>
		[...quotationKeys.all(), "list", { filter }] as const,
};
