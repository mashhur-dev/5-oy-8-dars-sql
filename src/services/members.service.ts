import client from '../database'

export async function allMembers() {
    const sql = 'SELECT * FROM members;'
    const result = await client.query(sql)

    return result.rows
}

export async function createMember(name: string, lastname: string, age: number){
    const sql = 'INSERT INTO members(name, lastname, age, team_id) VALUES($1, $2, $3, -1) RETURNING *;'
    
    const result = await client.query(sql, [name, lastname, age])
    return result.rows[0]
}

export async function removeMember(id: number){
    const sql = 'DELETE FROM members WHERE id = $1 RETURNING *;'
    const result = await client.query(sql, [id]) 
    return result.rows[0]
}

export async function changeMemberTeam(id:number, team_id:number){
    const sql = 'UPDATE members SET team_id = $2 WHERE id = $1 RETURNING *;'
    const result = await client.query(sql, [id, team_id])
    return result.rows[0]
}