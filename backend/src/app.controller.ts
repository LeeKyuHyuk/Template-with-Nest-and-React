import { Controller, Get, Header } from "@nestjs/common";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header("content-type", "text/html")
  getIndex() {
    if (process.env.NODE_ENV === "development")
      return this.appService.getDevIndex();
    return this.appService.getIndex();
  }

  @Get("app.js")
  @Header("content-type", "application/javascript")
  getApp() {
    if (process.env.NODE_ENV === "development")
      return this.appService.getDevApp();
    return this.appService.getApp();
  }
}
