import {useEffect, useState} from 'react'
import axios from 'axios'
import Team from './components/Teams'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  const [teams, setTeams] = useState([])

  const getTeams = () => {
    axios.get('http://localhost:3000/madness')
    .then((response) => setTeams(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/madness', data)
    .then((response) => {
       console.log(response)
       let newTeams = [...teams, response.data]
       setTeams(newTeams)
    })
 }


 const handleDelete = (deletedTeam) => {
  axios.delete('http://localhost:3000/madness/' + deletedTeam._id)
  .then((response) => {
   let newTeam = teams.filter((team) => {
      return team._id !== deletedTeam._id
   })
     
   setTeams(newTeam)
  })
}



 
  const handleEdit = (data) => {
    axios.put('http://localhost:3000/madness/' + data._id, data)
    .then((response) => {
      let newTeams = teams.map((team) => {
        return team._id !== data._id ? team : data
      })
      setTeams(newTeams)
    })
  }

  useEffect(() => {
    getTeams()
  }, [])
  



  return (
  <>
    <h1>March Madness Teams</h1>

    <Add handleCreate={handleCreate}/>

    {teams.map((team) => {
      return (
        <div>
          <Team team={team}/>
          <Edit team={team} handleEdit={handleEdit} />
          <button onClick={()=>{handleDelete(team)}}>X</button>
        </div>
      )
    })}
  </>
  )
}


export default App