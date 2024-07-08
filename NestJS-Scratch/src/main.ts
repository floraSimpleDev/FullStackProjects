import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function boostrap() {
  // init an instance of app
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
boostrap();
