import { select } from "../modules/domSelect.js"

export default function submitCharacter(e) {
  e.preventDefault()

  const dataForm = new FormData(e.target)
  const keyDatas = Array.from(dataForm.keys())
  const essentialKeys = ['eyes', 'mouth', 'cheeks']

  for(let key of essentialKeys) {
    if(!keyDatas.includes(key)) {
      alert(key + '를 선택해 주세요!')
      return
    }
  }

  const $accessories = [ ...document.querySelectorAll('.combine-accessories') ]
  const selectedAccessories = $accessories.map( dom => dom.classList[1])
  const getAccessories = dataForm.getAll('accessories')
  
  if(selectedAccessories.length !== getAccessories.length) {
    selectedAccessories.forEach( acc => {
      acc = acc.replace('combine-', '')
      if(!getAccessories.includes(acc)) {
        dataForm.append('accessories', acc)
      }
    })
  }
    
  select('.makeCharacter-makename').style.display = 'flex'
}