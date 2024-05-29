
export type PaginatedResource<T> = {
    totalItems: number;
    data: T[];
    page: number;
    limit: number;
};