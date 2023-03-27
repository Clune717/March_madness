const Team = (props) => {
    return(
     <>
       <h3>Name: {props.teams.name}</h3>
       <p>Conference: {props.teams.conference}</p>
       <img src={props.teams.logo}></img>
       <p>Rank: {props.teams.rank}</p>
     </>
    )
 }
 
 export default Team