import { Controller, Get } from "@nestjs/common";

/*
Decorator:
@Controller()
create a class to serve as a controller in our app 
*/
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }
}
