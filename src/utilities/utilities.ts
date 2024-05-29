import { ILike, In, IsNull, LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Not } from "typeorm";
import { FilterOperator, Filtering } from "./filtering.dto";
import { Sorting } from "./sorting.dto";



export const getOrder = (sort: Sorting ) => sort ? { [sort.field]: sort.order } : {};

export const getWhere  = (filter: Filtering) => {
    if (!filter) return {};

    if (filter.operator == FilterOperator.IS_NULL) return { [filter.field]: IsNull() };
    if (filter.operator == FilterOperator.IS_NOT_NULL) return { [filter.field]: Not(IsNull()) };
    if (filter.operator == FilterOperator.EQUALS) return { [filter.field]: filter.value };
    if (filter.operator == FilterOperator.NOT_EQUALS) return { [filter.field]: Not(filter.value) };
    if (filter.operator == FilterOperator.GREATER_THAN) return { [filter.field]: MoreThan(filter.value) };
    if (filter.operator == FilterOperator.GREATER_THAN_OR_EQUALS) return { [filter.field]: MoreThanOrEqual(filter.value) };
    if (filter.operator == FilterOperator.LESS_THAN) return { [filter.field]: LessThan(filter.value) };
    if (filter.operator == FilterOperator.LESS_THAN_OR_EQUALS) return { [filter.field]: LessThanOrEqual(filter.value) };
    if (filter.operator == FilterOperator.LIKE) return { [filter.field]: ILike(`%${filter.value}%`) };
    if (filter.operator == FilterOperator.IN ) return { [filter.field]: In(filter.value.split(',')) };
    if (filter.operator == FilterOperator.NOT_IN) return { [filter.field]: Not(In(filter.value.split(','))) };
}