import {Router} from 'express';
import { sample_commanders } from '../data';
import expressAsyncHandler from 'express-async-handler';
import { CommanderModel } from '../models/commander.model';

const router = Router();

router.get("/seed", expressAsyncHandler(
    async (req, res) => {
        const commandersCount = await CommanderModel.countDocuments();
        if(commandersCount > 0){
            res.send({message: "Commanders already seeded"});
            return;
        }
        await CommanderModel.create(sample_commanders);
        res.send({message: "Commanders seeded successfully"});
}));

router.get("/", expressAsyncHandler(
    async (req, res) => {
    const commanders = await CommanderModel.find();
        res.send(commanders);
}));

router.get("/search/:searchTerm", expressAsyncHandler(
    async(req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const commanders = await CommanderModel.find({
        name: {$regex: searchRegex}
    })
    res.send(commanders);
}));

router.get("/:id", expressAsyncHandler(async(req, res) => {
    const commander = await CommanderModel.findById(req.params.id);
    res.send(commander);
}));

export default router;
