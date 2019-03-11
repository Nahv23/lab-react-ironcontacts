import React from 'react';

export default function HeaderCol (){

    return (
      <table className="table columns is-fullwidth">
        <thead>
          <tr>
            <th><abbr title="Position">Image</abbr></th>
            <th><abbr title="Name" style= {{ marginLeft: "60px"}}>Name</abbr></th>
            <th><abbr title="Popularity" style= {{ marginLeft: "80px"}}>Popularity</abbr></th>
          </tr>
        </thead>
      </table>
    )
  }

