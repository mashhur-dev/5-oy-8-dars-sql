import express from 'express'
import cors from 'cors'
import { getTeams, deleteTeam, postTeam } from './controllers/teams'
import { getMembers, deleteMember, postMember, updateMemberTeam } from './controllers/members'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/teams', getTeams)
app.post('/teams', postTeam)
app.delete('/teams/:id', deleteTeam)

app.get('/members', getMembers)
app.post('/members', postMember)
app.delete('/members/:id', deleteMember)
app.put('/members/:id/team', updateMemberTeam)

app.listen(8080, () => {
    console.log('Server is running on 8080')
})