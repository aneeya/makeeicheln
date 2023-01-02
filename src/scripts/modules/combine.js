class Combine {
  constructor($input) {
    this.$input = $input
    this.imgSrc = 
      $input.tagName === "INPUT" 
      ? $input.previousElementSibling.src
      : ''
    this.$display = document.querySelector('.makeCharacter-display')

    this.bindEvent()
  }

  previewCombine(e) {
    if(e.target.dataset.value !== 'combine-item') return

    const { value, name} = e.target
    
    const items = {
      eyes: document.querySelector('.combine-eyes'),
      mouth: document.querySelector('.combine-mouth'),
      accessories: document.querySelectorAll('.combine-accessories'),
      cheeks: document.querySelector('.combine-cheeks')
    }
    
    if(name !== 'accessories' && items[name] !== null) {
      const removeEl = items[name]
      this.$display.removeChild(removeEl)
    } else if(name === 'accessories') {
      if(items[name].length === 3) return
      
      const includeItem = Array.from(items[name]).find( el => el.src === this.imgSrc) 
      if(includeItem) return
    }

    let addItem = this.createEl(name, value)

    this.$display.append(addItem)
  }

  createEl(type, itemDetail) {
    let addItem;
    if(type === 'cheeks') {
      addItem = document.createElement('div')

      const leftCheeks = document.createElement('div')
      leftCheeks.className = `combine-cheek combine-${itemDetail}`
      const rightCheeks = document.createElement('div')
      rightCheeks.className = `combine-cheek combine-${itemDetail}`

      addItem.append(leftCheeks)
      addItem.append(rightCheeks)
    } else {
      addItem = document.createElement('img')
      addItem.src = this.imgSrc
    }

    addItem.className = `combine-${type}`
    if(type === 'accessories') addItem.classList.add(`combine-${itemDetail}`)

    return addItem
  }

  bindEvent() {
    this.$input.addEventListener('click', (e) => this.previewCombine(e))
  }
}

export default Combine