import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { readFile } from "fs";
import { map } from "rxjs";
import { REACT_DEV_SERVER_URL } from "./config";

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getDevIndex() {
    return this.httpService
      .get(`${REACT_DEV_SERVER_URL}`, {
        headers: {
          "Content-Type": "text/html",
        },
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  getDevApp() {
    return this.httpService
      .get(`${REACT_DEV_SERVER_URL}/app.js`, {
        headers: {
          "Content-Type": "application/javascript",
        },
      })
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  getIndex() {
    return new Promise<string>((resolve, reject) => {
      readFile(`${__dirname}/index.html`, "utf8", (err, data) => {
        if (err) {
          reject(JSON.stringify(err));
          return;
        }
        resolve(data);
      });
    });
  }

  getApp() {
    return new Promise<string>((resolve, reject) => {
      readFile(`${__dirname}/app.js`, "utf8", (err, data) => {
        if (err) {
          reject(JSON.stringify(err));
          return;
        }
        resolve(data);
      });
    });
  }
}
