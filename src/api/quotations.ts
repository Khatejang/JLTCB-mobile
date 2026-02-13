import type { DocumentPickerAsset } from "expo-document-picker";
import { apiGet, apiPost } from "../services/axiosInstance";
import type {
	ASRequestedQuotation,
	QuotationDetails,
	QuotationFilter,
} from "../types/quotations";

export const fetchQuotations = ({ filter, search }: QuotationFilter) =>
	apiGet<ASRequestedQuotation[]>("quotations", {
		params: { "filter[status]": filter, search },
	});

export const fetchQuotation = (quotationId: string) =>
	apiGet<QuotationDetails>(`quotations/${quotationId}`);

export const uploadQuotationFile = (
	quotationId: string,
	file: DocumentPickerAsset,
) => {
	const formData = new FormData();
	formData.append("file", {
		uri: file.uri,
		name: file.name,
		type: file.mimeType ?? "application/octet-stream",
	} as unknown as Blob);
	return apiPost(`/quotations/${quotationId}/upload`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};
