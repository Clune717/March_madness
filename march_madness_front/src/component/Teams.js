const Teams = (props) => {
    return(
     <>
       <h3>Name: {props.teams.name}</h3>
       <p>Conference: {props.teams.conference}</p>
       <p>Logo: {props.teams.logo}</p>
       <p>Rank: {props.teams.rank}</p>
     </>
    )
 }
 
 export default Person