import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import Team from './component/Teams'
import Add from './component/Add'
import Edit from './component/Edit'

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
    <h1 class="title">March Madness Teams</h1>

    <div class="add"><Add handleCreate={handleCreate}/></div>

    {teams.map((team) => {
      return (
        <div class="container">
          <Team teams={team}/>
          <div class="edit"><Edit teams={team} handleEdit={handleEdit} /></div>
          <button class="delete" onClick={()=>{handleDelete(team)}}>DELETE</button>
        </div>
      )
    })}
  </>
  )
}


export default App