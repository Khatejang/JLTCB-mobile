import { queryOptions } from "@tanstack/react-query";
import { fetchArticles } from "@/src/api/articles";
import { articleKeys } from "@/src/query-key-factories/articles";

export const articlesQueryOptions = queryOptions({
	queryKey: articleKeys.getArticles(),
	queryFn: fetchArticles,
});
