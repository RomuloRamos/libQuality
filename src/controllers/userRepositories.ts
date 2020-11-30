import {Controller, Post, Get, Put, Delete} from '@overnightjs/core';
import {Request, Response} from 'express';
import {UserRepositories,iUserRepositories,iRepositoryData} from '@src/models/userRepositories';
import mongoose from 'mongoose';

/**This is Class is responsible for provibe the interface to Databse */

@Controller('user_repositories')
export class UserRepositoriesController {

    //This service is responsible for register a repository as interedted to the user. 
    
    @Post('new')
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const userRepositories = new UserRepositories(req.body);//Model
            const result = await userRepositories.save();
            res.status(201).send(result);
            
        } catch (error) {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(422).send({error:error.message});
            } else {
                res.status(500).send({error:'Internal Server Error'});
            }
        }
    }

    //This service return interest repositories to a user
    @Get('request')
    public async request(req: Request, res: Response): Promise<void> {
        try {

            const toSearch = req.body;
            const result = await UserRepositories.find(toSearch,{_id:0}, (err, result)=>{
                if(err){
                    console.log("user_repositories error:",err);
                    return err;
                }else {
                    return result;                    
                }
                
            });//expect receive user here!

            res.status(201).send(result);
            
        } catch (error) {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(404).send({error:error.message});
            } else {
                res.status(500).send({error:'Internal Server Error'});
            }
        }
    }

    // This service update the data registered about repository
    @Put('update')
    public async update(req: Request, res: Response): Promise<void> {
        
        const toSearch = {
            "user_id": req.body.user_id,
            "repo_id": req.body.repo_id
        }
        const result = UserRepositories.findOne(toSearch, async (err, foundObject) =>{
            
            if(foundObject){
                    foundObject.repositoryData = { ...req.body.repositoryData};
                    foundObject.markModified('repositoryData');
                    const objReturn = await foundObject.save()
                    res.status(201).send(objReturn);
            
            }else if(err){
                res.status(404).send({error:'Object not foud'});
            
            }
            else{

                res.status(404).send({error:'Object not foud'});
            }
        })
        .catch(error=>{
            if(error instanceof mongoose.Error.ValidationError){
                res.status(422).send({error:error.message});
            } else {
                res.status(500).send({error:'Internal Server Error'});
            }
        });
    }
    // This service delete a respository data from a interest list of a user.
    @Delete('delete')
    public async delete(req: Request, res: Response): Promise<void>{
        
        const toSearch = {
            "user_id": req.body.user_id,
            "repo_id": req.body.repo_id
        }
        const deleteResult = await UserRepositories.deleteMany(toSearch, function (err) {
            if (err){
                res.status(422).send({ error: err.message });
            }
        }).then( result =>{
            res.status(201).send(result);            
        });
    }

}