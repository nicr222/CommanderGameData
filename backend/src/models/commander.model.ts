import { Schema, model } from "mongoose";

export interface Commander {
    id: string;
    name: string;
    color: string[];
    type: string[];
    description: string;
    favorite: boolean;
    imageUrl: string;
}

export const CommanderSchema = new Schema<Commander>(
    {
        name: {type: String, required: true},
        color: {type: [String], required: true},
        type: {type: [String], required: true},
        description: {type: String, required: true},
        favorite: {type: Boolean, required: true},
        imageUrl: {type: String, required: true}
    },{
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const CommanderModel = model<Commander>("Commander", CommanderSchema);