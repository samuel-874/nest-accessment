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


    // console.log("happened here");
    const page = JSON.parse(sort);
    const fields = page[0].field;
    const orders = page[0].order;

    if (!validParams.includes(fields)) throw new BadRequestException(`Invalid sort field: ${fields}`);

    return { field:fields, order: orders }

})