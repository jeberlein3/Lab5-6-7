import { Request, Response, NextFunction } from 'express';

export class Car {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        car_id: { type: Number, key: 'primary' },
        car_make: { type: String, maxlength: 24 },
        car_model: {type: String, maxLength: 24},
        car_mileage: {type:Number},
        car_year: {type: Number},
        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store certifications model', [
        {
        route: '/getCar',
        method: 'POST',
        callback: this.getCarFunc,
        requireToken: true,
    },
    {
      route: '/getCarbyID/:car_id',
      method: 'POST',
      callback: this.getCarFuncbyID,
      requireToken: true,
    },
    {
        route: '/createCar',
        method: 'POST',
        callback: this.createCarFunc,
        requireToken: true,
      }

  
  
  
  ]];}
  createCarFunc(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        console.log('req-body',req.body); 
        let carModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = carModel.create(req, null, null);
        console.log('from test model resp:', resp);
        res.json({ message: 'getCertifications works...', resp });
    }
}
      
    getCarFunc(model: any) {
      return async(req: Request, res: Response, next: NextFunction) => {
          req.body= {
                  get: ["*"]
              }
          let carModel = model.controller;
          //console.log('model.model.controller', model.model.controller);
          //console.log('model get',certsModel.get)
          let resp = carModel.get(req, null, null);
          console.log('from test model resp:', resp);
          res.json({ message: 'getCertifications works...' });
      }
  }
  getCarFuncbyID(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        req.body= {
                get: ["*"],
                where: {
                  cert_id:req.params.id
                }
            }
        let carModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = carModel.get(req, null, null);
        console.log('from test model resp:', resp);
        res.json({ message: 'getCertifications works...' });
    }
}
  
    set model(model: any) {
      this.model = model;
    }
  
    get model() {
      return this.model;
    }


}