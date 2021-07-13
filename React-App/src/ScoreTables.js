import React from "react"

const ScoreTables = (props) => {
    /*store props in variable*/
    const ScoreData = props.results;
    /* alphabetical order of country names */
    const ScoreDataAZ = ScoreData.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
    
    /*array map to table data from props and store in variable*/
    const VisualizeScores = ScoreDataAZ.map(Data => (
      /* table columns */
      <table class="table table-striped table-dark table-bordered">
        <thead>
              <tr>
                  <th scope="col">{Data.name}</th>
                  <th scope="col">Player Score</th>
              </tr>
          </thead>
          <tbody>
            
          {/* array map again through nested array to table scores in rows */}
              {Data.scores.map(score => (
                <tr>
                <th scope="row">{score.n}</th>
                <td>{score.s}</td>
                </tr>
              ))}
  
          </tbody>
          
      </table>
    ));

    return (
      <div>
        
      {VisualizeScores}
      
      </div>
    )
      
  }


  export default ScoreTables