import {Controller, Post} from '@overnightjs/core';
import {Request, Response} from 'express';
import {RepositorySearch,iRepositorySearch,iRepositoryData} from '@src/models/repositorySearch';
import mongoose from 'mongoose';

@Controller('search_repository')
export class RepositorySearchController {

    @Post('new')
    public async create(req: Request, res: Response): Promise<void> {
        try {
            const repositorySearch = new RepositorySearch(req.body);
            const result = await repositorySearch.save();
            
            res.status(201).send(result);
            
        } catch (error) {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(422).send({error:error.message});
            } else {
                res.status(500).send({error:'Internal Server Error'});
            }
        }
    }
}