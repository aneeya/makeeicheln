import modalBT from "../buttons/modalBT.js"
import { select } from "../modules/domSelect.js"

function modalCustom(text, callback) {
  const modalEl = 
  `<div>
    <div role="img" aria-label="캐릭터이미지"></div>
    <h2 id="modal-question">${text}</h2>
    <div id="modal-buttons">
      <button type="button">yes</button>
      <button type="button">cancel</button>
    </div>
  </div>`

  const $modalElement = document.createElement('div')
  $modalElement.id = 'modal'
  $modalElement.innerHTML = modalEl
  select('body').append($modalElement)

  select('#modal-buttons').addEventListener('click', (e) => modalBT(e, callback))

  return modalEl
}

export default modalCustom