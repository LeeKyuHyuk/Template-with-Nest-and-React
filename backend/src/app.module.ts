import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule {}
