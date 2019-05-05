"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Certification {
    constructor(norm) {
        this.model = [{
                cert_id: { type: Number, key: 'primary' },
                cert_name: { type: String, maxlength: 24 },
                cert_cost: { type: String, maxLength: 12 },
                cert_validity: { type: Number },
                cert_description: { type: String, maxLength: 140 },
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
                }
            ]];
    }
    getCertsFunc(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let certsModel = model.controller;
            //console.log('model.model.controller', model.model.controller);
            //console.log('model get',certsModel.get)
            let resp = certsModel.get(req, null, null);
            console.log('from test model resp:', resp);
            res.json({ message: 'getCertifications works...' });
        });
    }
    getCertsFuncbyID(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    cert_id: req.params.id
                }
            };
            let certsModel = model.controller;
            //console.log('model.model.controller', model.model.controller);
            //console.log('model get',certsModel.get)
            let resp = certsModel.get(req, null, null);
            console.log('from test model resp:', resp);
            res.json({ message: 'getCertifications works...' });
        });
    }
    set model(model) {
        this.model = model;
    }
    get model() {
        return this.model;
    }
}
exports.Certification = Certification;
