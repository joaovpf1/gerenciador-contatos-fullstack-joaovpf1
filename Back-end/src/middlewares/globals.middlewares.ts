import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppErrors.error";

export const verifyBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const body = schema.parse(req.body);
    req.body = body;
    return next();
  };

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;
  if (!authorization) throw new AppError("Missing bearer token", 401);
  const token: string = authorization.split(" ")[1];
  const decoded = verify(token, process.env.SECRET_KEY!);
  res.locals = { ...res.locals, decoded };
  return next();
};