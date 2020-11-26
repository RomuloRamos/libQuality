import mongoose, { Document, Model } from "mongoose";

export interface iRepositoryData{
    [index: string]: string|boolean|number;
    name: string;
    full_name: string;
    private: boolean;
    description: string;
    open_issues: number;
    pulls_url: string;
    forks_count: number;
    forks_url: string;
    stargazers_count: number;
    collaborators_url: string;
}

export interface iRepositorySearch  {
    _id?: string;
    user_id: number;
    repositoryData: iRepositoryData;
}

const schema  = new mongoose.Schema(
    {
        user_id:{type:Number, required: true},
        repositoryData: {type:mongoose.Schema.Types.Mixed, required: true},     
    },
    {
        toJSON:{
            transform: (_, ret): void =>{
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }    
);

interface RepositorySearchModel extends Omit<iRepositorySearch,'_id'>, Document{}
export const RepositorySearch: Model<RepositorySearchModel> = mongoose.model('RepositorySearch', schema);

 