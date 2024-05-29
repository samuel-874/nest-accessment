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
    const filter = req.query.filter as string;
    if (!filter ) return null;

    if (typeof data != 'object') throw new BadRequestException('Invalid filter parameter');


    if (!filter.match(/^[a-zA-Z0-9_]+:(equals|not|gt|gte|lt|lte|like|in|notIn|isNull|isNotNull):[a-zA-Z0-9_,]+$/) && !filter.match(/^[a-zA-Z0-9_]+:(isnull|isnotnull)$/)) {
        throw new BadRequestException('Invalid filter parameter');
    }


    const [field, operator, value] = filter.split(':');
    if (!data.includes(field)) throw new BadRequestException(`Invalid filter field: ${field}`);
    if (!Object.values(FilterOperator).includes(operator as FilterOperator)) throw new BadRequestException(`Invalid filter operator: ${operator}`);

    return { field,  value, operator };
});