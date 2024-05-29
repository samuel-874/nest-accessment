import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";


export interface PaginationsData {

    page: number;

    limit: number;

    offset: number;
}

export const PaginationParam = createParamDecorator((data, ctx: ExecutionContext ): PaginationsData => {

    const req :Request = ctx.switchToHttp().getRequest();
    let page = parseInt(req.query.page as string);
    let limit = parseInt(req.query.limit as string);

    // setting default values
    if(isNaN(page) || page < 0 ){
        page = 0
    }

    if(isNaN(limit) || limit < 0){
        limit = 5;
    }

    const offset = page * limit;
    

    return { page,limit, offset }
})

export class PaginationReponse<T> {

    data: T;

    metaData: PaginationsData

}