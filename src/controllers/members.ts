import { Request, Response} from 'express'
import { createMember, removeMember, allMembers, changeMemberTeam } from '../services/members.service'
import { findTeamById } from '../services/team.service'

type MemberBody = {
    name: string,
    lastname: string,
    age: number
}

type UpdateTeamBody = {
    team_id: number
}

export async function getMembers(req: Request, res: Response) {
    const members = await allMembers()
    res.status(200).json({
        message:"All Members: ",
        members
    })
}


export async function postMember(req: Request, res: Response) {

    const body: MemberBody = req.body
    const member = await createMember(body.name, body.lastname, body.age)

    res.status(201).json({
        message: 'Add Member: ',
        member
    })
}


export async function deleteMember(req: Request, res: Response){

    const id = +req.params.id
    const member = await removeMember(id)
    res.status(200).json({
        message: 'Deleted member: ',
        member
    })
}

export async function updateMemberTeam(req: Request, res: Response){
    const id: number = +req.params.id

    const body: UpdateTeamBody = req.body

    const team = await findTeamById(body.team_id)

    if(team == undefined){
        return res.status(404).json({
            message: 'Team not found'
        })
    }

    const member = changeMemberTeam(id, body.team_id)

    res.status(200).json({
        message: 'Member changed team',
        member
    })
}