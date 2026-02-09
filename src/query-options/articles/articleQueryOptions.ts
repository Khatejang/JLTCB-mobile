import { queryOptions } from "@tanstack/react-query";
import { fetchArticle } from "@/src/api/articles";
import { articleKeys } from "@/src/query-key-factories/articles";

export const articleQueryOptions = (articleId: string) =>
	queryOptions({
		queryKey: articleKeys.getArticle(articleId),
		queryFn: () => fetchArticle(articleId),
	});
