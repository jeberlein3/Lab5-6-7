import { link } from "fs";
import { Request, Response, NextFunction } from 'express';

export class Profile {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        profile_id: { type: Number, key: 'primary' },
        image: { type: File},
        city: { type: String, maxlength: 24 },
        state: { type: String, maxlength: 24 },
        interests: { type: String, maxlength: 100 },
        about: { type: String, maxlength: 150 },
        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store exam model', [
        {
          route: '/getProfile',
          method: 'POST',
          callback: this.getProfileFunc,
          requireToken: true,
      },
      {
        route: '/getProfilebyID/:profile_id',
        method: 'POST',
        callback: this.getProfileFuncbyID,
        requireToken: true,
      },
      {
        route: '/createProfile',
        method: 'POST',
        callback: this.createProfileFunc,
        requireToken: true,
      },
      {
        route: '/updateProfile/id/:profile_id',
        method: 'PUT',
        callback: this.updateProfileFunc,
        requireToken: true,
      },
      {
        route: '/deleteProfile/id/:profile_id',
        method: 'DELETE',
        callback: this.deleteProfileFunc,
        requireToken: true,
      }

  
  
  
  ]];}
  deleteProfileFunc(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        console.log('req-body',req.body); 
        let profileModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = await profileModel.remove(req, null, null);
        console.log('resp from deletion', resp);
        res.json({ message: 'delete profile works...', resp });
    }
}
  
  
  updateProfileFunc(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        console.log('req-body',req.body); 
        let profileModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = profileModel.update(req, null, null);
        console.log('resp from update', PaymentRequestUpdateEvent);
        res.json({ message: 'update profile works...', resp });
    }
}


  createProfileFunc(model: any) {
    return async(req: Request, res: Response, next: NextFunction) => {
        console.log('req-body',req.body); 
        let profileModel = model.controller;
        //console.log('model.model.controller', model.model.controller);
        //console.log('model get',certsModel.get)
        let resp = profileModel.insert(req, null, null);
        console.log('from profile model resp:', resp);
        res.json({ message: 'createProfile works...', resp });
    }
}
      getProfileFunc(model: any) {
        return async(req: Request, res: Response, next: NextFunction) => {
            req.body= {
                    get: ["*"]
                }
            let profileModel = model.controller;
            //console.log('model.model.controller', model.model.controller);
            //console.log('model get',certsModel.get)
            let resp = profileModel.get(req, null, null);
            console.log('from test model resp:', resp);
            res.json({ message: 'getCertifications works...' });
        }
    }
    getProfileFuncbyID(model: any) {
      return async(req: Request, res: Response, next: NextFunction) => {
          req.body= {
                  get: ["*"],
                  where: {
                    cert_id:req.params.id
                  }
              }
          let profileModel = model.controller;
          //console.log('model.model.controller', model.model.controller);
          //console.log('model get',certsModel.get)
          let resp = profileModel.get(req, null, null);
          console.log('from profile model resp:', resp);
          res.json({ message: 'getProfile works...' });
      }
      ;
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }