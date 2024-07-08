import { Controller, Get } from "@nestjs/common";

/*
Decorator:
@Controller()
create a class to serve as a controller in our app 
*/
@Controller("/app") // use @Controller() to creating a higher tier route
export class AppController {
  @Get("/greeting") // router include in /app
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
