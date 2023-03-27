const Team = (props) => {
    return(
     <>
       <h3 class="name">{props.teams.name}</h3>
       <p class="conference">{props.teams.conference} Conference</p>
       <img class="image" src={props.teams.logo}></img>
       <p class="rank">Rank: {props.teams.rank}</p>
     </>
    )
 }
 
 export default Team