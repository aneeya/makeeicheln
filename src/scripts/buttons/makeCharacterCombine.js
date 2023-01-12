import { select, selects } from "../modules/domSelect.js"

class MakeCharacterPreview {
  constructor($button) {
    this.$button = $button

    this.bindEvent()
  }

  prevItem() {
    const items = document.querySelector('.makeCharacter-display').children
    if(items.length === 0) return
    items[items.length - 1].remove()
  }

  resetItem() {
    const items = document.querySelector('.makeCharacter-display').children
    if(items.length === 0) return
    Array.from(items).forEach( el => {
      el.remove()
    });
  }

  makeItem() {
    const essentialItems = ['eyes', 'mouth', 'cheeks']

    for(const item of essentialItems) {
      const isItemChecked = [...selects(`input[name="${item}"]`)].find(input => input.checked === true)

      if(isItemChecked === undefined) {
        alert(item + '를 선택해 주세요!')
        return 
      }
    }

    const $accessories = [ ...selects('.combine-accessories') ]
    const selectedAccessories = $accessories.map( dom => dom.classList[1].replace('combine-', ''))
   
    selectedAccessories.forEach( acc => {
      const accessoryItem = select(`input[value="${acc}"]`)
      accessoryItem.checked = accessoryItem.checked ? true : true
    })

    select('.makeCharacter-naming').style.display = 'flex'
    select('.makeCharacter-combine').style.top = '-900rem'
  }

  bindEvent() {
    switch(this.$button.innerText) {
      case 'prev':
        this.$button.addEventListener('click', this.prevItem)
        break;
      case 'reset':
        this.$button.addEventListener('click', this.resetItem)
        break;
      case 'make':
        this.$button.addEventListener('click', this.makeItem)
    }
  }
}

export default MakeCharacterPreview