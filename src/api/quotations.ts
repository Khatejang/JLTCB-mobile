import { apiGet } from "../services/axiosInstance";
import type {
	ASRequestedQuotation,
	QuotationFilter,
} from "../types/quotations";

export const fetchQuotations = ({ filter, search }: QuotationFilter) =>
	apiGet<ASRequestedQuotation[]>("quotations", {
		params: { "filter[status]": filter, search },
	});
