import React from 'react'

const ButtonsRow = ({ addRandomContact }) => (
  <div className=" main container" style={{margin: "100px"}}>
    <div className="buttons-options">
      <tr>
        <td><button className="button is-normal is-info is-rounded"  onClick={addRandomContact}>+ Add Random Contact </button></td>
        <td>
        <div class="field has-addons">
          <p class="control">
            <a class="button is-active">
              <span class="icon is-small">
                <i class="fas fa-bold"></i>
              </span>
              <span>Short By Name</span>
            </a>
          </p>
          <p class="control">
            <a class="button">
              <span class="icon is-small">
                <i class="fas fa-italic"></i>
              </span>
              <span>Short By Popularity</span>
            </a>
          </p>
        </div>  
        </td>
      </tr>
    </div>
  </div>
)

export default ButtonsRow