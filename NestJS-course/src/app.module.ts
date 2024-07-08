import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

/*
Module:
wrap up our controllers, one app must have one module.
@Module()
*/
@Module({
  controllers: [AppController],
})
export class AppModule {}
