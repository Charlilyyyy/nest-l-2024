import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() :string{
        return "All Properties";
    }

    @Get(":id") // param name
    findById(@Param("id") id:number) :string{
        return `property found with id :${id}`;
    }

    // this return object
    // @Get(":id") // param name
    // findById(@Param() id){
    //     return id;
    // }

    @Post()
    @HttpCode(202) // custom hhtp code response
    create(@Body() body) {
        return body;
    }

    // // access specific body req
    // @Post()
    // create(@Body("name") name) {
    //     return name;
    // }
}
