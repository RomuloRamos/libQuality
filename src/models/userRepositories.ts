import mongoose, { Document, Model } from "mongoose";

export interface iRepositoryData{
    [index: string]: string|boolean|number;
    id: number;
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

export interface iUserRepositories  {
    _id?: string;
    user_id: number;
    repo_id: number;
    repositoryData: iRepositoryData;
}

const schema  = new mongoose.Schema(
    {
        user_id:{type:Number, required: true},
        repo_id:{type:Number, required: true},
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

interface UserRepositoriesModel extends Omit<iUserRepositories,'_id'>, Document{}
export const UserRepositories: Model<UserRepositoriesModel> = mongoose.model('UserRepositories', schema);

 