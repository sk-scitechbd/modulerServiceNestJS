import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  async getHello( @Res() response){
    const result = await this.appService.getHello();
    console.log("controller result: ",result)
    response.json(result);
}
}
