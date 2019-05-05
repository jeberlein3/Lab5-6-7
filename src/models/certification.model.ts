import { Request, Response, NextFunction } from 'express';

export class Certification {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        cert_id: { type: Number, key: 'primary' },
        cert_name: { type: String, maxlength: 24 },
        cert_cost: {type: String, maxLength: 12},
        cert_validity: {type:Number},
        cert_description: {type: String, maxLength: 140},
        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store certifications model', [
        {
        route: '/getCertification',
        method: 'POST',
        callback: this.getCertsFunc,
        requireToken: true,
    },
    {
      route: '/getCertificationbyID/:cert_id',
      method: 'POST',
      callback: this.getCertsFuncbyID,
      requireToken: true,
    },
    {
      route: '/createCert',
      method: 'POST',
      callback: this.createCertFunc,
      requireToken: true,
    },
    {
      route: '/updateCert/id/:cert_id',
      method: 'PUT',
      callback: this.updateCertFunc,
      requireToken: true,
    }




]];}
updateCertFunc(model: any) {
  return async(req: Request, res: Response, next: NextFunction) => {
      console.log('req-body',req.body); 
      let certModel = model.controller;
      //console.log('model.model.controller', model.model.controller);
      //console.log('model get',certsModel.get)
      let resp = certModel.update(req, null, null);
      console.log('resp from update', PaymentRequestUpdateEvent);
      res.json({ message: 'update Certifications works...', resp });
  }
}


createCertFunc(model: any) {
  return async(req: Request, res: Response, next: NextFunction) => {
      console.log('req-body',req.body); 
      let certModel = model.controller;
      //console.log('model.model.controller', model.model.controller);
      //console.log('model get',certsModel.get)
      let resp = certModel.insert(req, null, null);
      console.log('from certifications model resp:', resp);
      res.json({ message: 'createCertifications works...', resp });
  }
}
      
    getCertsFunc(model: any) {
      return async(req: Request, res: Response, next: NextFunction) => {
          req.body= {
                  get: ["*"]
              }
          let certsModel = model.controller;
          //console.log('model.model.controller', model.model.controller);
          //console.log('model get',certsModel.get)
          let resp = certsModel.get(req, null, null);
          console.log('from test model resp:', resp);
          res.json({ message: 'getCertifications works...' });
      }
  }
  getCertsFuncbyID(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        req.body= {
                get: ["*"],
                where: {
                  cert_id:req.params.id
                }
            }
        let certsModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = certsModel.get(req, null, null);
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