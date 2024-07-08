import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

/*
Decorator:
@Controller()
create a class to serve as a controller in our app 
*/
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }
}

/*
Module:
wrap up our controllers, one app must have one module.
@Module()
*/
@Module({
  controllers: [AppController],
})
class AppModule {}

async function boostrap() {
  // init an instance of app
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
boostrap();
