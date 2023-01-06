import modalCustom from "../elements/modalEl.js"

function makeCharacterName(e) {
  if(e.target.innerText !== 'cancel') return
  else {
    modalCustom('정말 취소 하시겠습니까?', 
      () => window.location.replace('/src/docs/index.html'))
  }

}

export default makeCharacterName

