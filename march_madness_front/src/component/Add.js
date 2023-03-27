import {useState} from 'react'


const Add = (props) => {
    const [teams, setTeams] = useState({name: '', conference: '', logo: '', rank: ''})

     
   const handleChange = (event) => {
    setTeams({...teams, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(teams)
 }



 return(
    <>
      <form onSubmit={handleSubmit}>
  <label htmlFor='name'>Name:</label>
  <input type='text' name='name' onChange={handleChange}/>
  <br/>
  <label htmlFor='conference'>Conference:</label>
  <input type='text' name='conference' onChange={handleChange}/>
  <br/>
  <label htmlFor='logo'>Logo:</label>
  <input type='text' name='logo' onChange={handleChange}/>
  <br/>
  <label htmlFor='Rank'>Rank:</label>
  <input type='text' name='rank' onChange={handleChange}/>
  <input type="submit"/>
</form>

    </>
   )
}

export default Add