import { Request, Response} from 'express'
import { allTeams, createTeam, removeTeam } from '../services/team.service'

type TeamBody = {
    name: string
}


export async function getTeams(req: Request, res: Response) {
    const teams = await allTeams()
    res.status(200).json({
            message: 'All teams: ',
            teams
        })
}


export async function postTeam(req: Request, res: Response) {
    
    const body: TeamBody = req.body
    const team = await createTeam(body.name)

    res.status(201).json({
        message: 'Added Team: ',
        team
    })
}


export async function deleteTeam(req: Request, res: Response){
    const id = +req.params.id

    const team = await removeTeam(id)

    res.status(200).json({
        message: 'Deleted team: ',
        team
    })
}