const Team = (props) => {
    return(
     <div class="teams">

       <h3 class="name">{props.teams.name}</h3>
       <p class="conference">{props.teams.conference} Conference</p>
       <img class="image" src={props.teams.logo}></img>
       <p class="rank">Seed: {props.teams.rank}</p>

     </div>
    )
 }
 
 export default Team