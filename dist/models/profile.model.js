"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profile {
    constructor(norm) {
        this.model = [{
                profile_id: { type: Number, key: 'primary' },
                image: { type: File },
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
            }, 'A table to store exam model', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Profile = Profile;
