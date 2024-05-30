import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface Filtering {
    field: string;
    value: string;
    operator: string;
}

// valid filter operators
export enum FilterOperator {
    EQUALS = 'equals',
    NOT_EQUALS = 'not',
    GREATER_THAN = 'gt',
    GREATER_THAN_OR_EQUALS = 'gte',
    LESS_THAN = 'lt',
    LESS_THAN_OR_EQUALS = 'lte',
    LIKE = 'like',
    // NOT_LIKE = 'nlike',
    IN = 'in',
    NOT_IN = 'notIn',
    IS_NULL = 'isNull',
    IS_NOT_NULL = 'isNotNull',
}

export const FilteringParams = createParamDecorator((data, ctx: ExecutionContext): Filtering => {
    const req: Request = ctx.switchToHttp().getRequest();
    const filter = req.query.filters as string;
    if (!filter ) return null;

    if (typeof data != 'object') throw new BadRequestException('Invalid filter parameter');


    const page = JSON.parse(filter);
    const filters = page[0];
    const fields = filters?.field;
    const values = filters?.value;
    const operators = filters?.operator;


    if (!data.includes(fields)) throw new BadRequestException(`Invalid filter field: ${fields}`);
    if (!Object.values(FilterOperator).includes(operators as FilterOperator)) throw new BadRequestException(`Invalid filter operator: ${operators}`);


    return { field: fields,  value: values, operator: operators };
});