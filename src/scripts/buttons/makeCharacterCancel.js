import modalCustom from "../elements/modalEl.js"

function makeCharacterCancel(e) {
  if(e.target.innerText !== 'cancel') return
  else {
    modalCustom('정말 취소 하시겠습니까?', 
      () => window.location.replace('/'))
  }

}

export default makeCharacterCancel

