import client from '../database'

export async function allTeams() {
    const sql = 'SELECT * FROM teams;'
    const result = await client.query(sql)

    return result.rows
}

export async function createTeam(name: string){
    const sql = 'INSERT INTO teams(name) VALUES($1) RETURNING *;'
    const result = await client.query(sql, [name])
    return result.rows[0]
}


export async function removeTeam(id: number){
    const result = await client.query('DELETE FROM teams WHERE id = $1 RETURNING*;', [id]) 
    return result.rows[0]
}

export async function findTeamById(id: number){
    const sql = 'SELECT * FROM teams WHERE id = $1;'
    const result = await client.query(sql, [id])
    
    return result.rows[0]
}