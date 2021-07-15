import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NEST_SERVER_PORT } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(NEST_SERVER_PORT);
}
bootstrap();
