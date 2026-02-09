import { apiGet } from "../services/axiosInstance";
import type { Article } from "../types/articles";

export const fetchArticles = () => apiGet<Article[]>("articles");
export const fetchArticle = (articleId: string) =>
	apiGet<Article>(`articles/${articleId}`);
