import { BadRequestException, ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Request } from "express";


export interface Sorting {
    field: string;
    order: string; 
}


export const SortingParams = createParamDecorator((validParams, ctx: ExecutionContext): Sorting => {

    const req: Request = ctx.switchToHttp().getRequest();
    const sort = req.query.sort as string;
    
    if(sort == null) return null;

    if( typeof validParams != 'object') throw new BadRequestException("Invalid Sort Parameter");

    const sortPattern = /^([a-zA-Z0-9]+):(ASC|DESC|asc|desc)$/;


    if(!sort.match(sortPattern))  throw new BadRequestException("Invalid Sort Parameter");

    const [ field, order ] = sort.split(':');

    if (!validParams.includes(field)) throw new BadRequestException(`Invalid sort field: ${field}`);

    return { field, order }

})