import {Request, Response} from 'express';
import Player from '../schemas/Player';
import HLTV from 'hltv'

class PlayerController{
    public async index(req: Request ,res: Response): Promise<Response>{
        var users = await Player.findOne({ign: req.params.name});
        if(!users){
            try{
                const player = await HLTV.getPlayerByName({ name: req.params.name });
                console.log("fetch from hltv");
                player.ign = player.ign.toLocaleLowerCase();
                users = await Player.create(player);
            }catch(e){
                return res.status(404).json({"error": "Player not found"});
            }
        }
        return res.json(users);
    }
}

export default new PlayerController();