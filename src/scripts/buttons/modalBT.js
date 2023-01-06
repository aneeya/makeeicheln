import { select } from "../modules/domSelect.js"

function modalBT(e, callback) {
  if(e.target.innerText === 'yes') {
    callback()
  }
  else if((e.target.innerText === 'cancel')) {
    select('#modal').remove()
  }
  else return
}

export default modalBT