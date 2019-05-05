import { Request, Response, NextFunction } from 'express';
export declare class Certification {
    _model: any;
    constructor(norm: any);
    getCertsFunc(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCertsFuncbyID(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
