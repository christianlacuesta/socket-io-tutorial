import { Request } from "express";
import { UserDocument } from "./user.interface";

export interface ExpressRequestInterface extends Request {
  user?: UserDocument;
}
