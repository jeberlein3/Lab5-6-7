"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Certification {
    constructor(norm) {
        this.model = [{
                cert_id: { type: Number, key: 'primary' },
                cert_name: { type: String, maxlength: 24 },
                cert_cost: { type: String, maxLength: 24 },
                cert_description: { type: String, maxLength: 150 },
                cert_validity: { type: Number },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store users certifications', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Certification = Certification;
