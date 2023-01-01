class Combine {
  constructor($input) {
    this.$input = $input
    this.$display = document.querySelector('.makeCharacter-display')

    this.bindEvent()
  }

  previewCombine(e) {
    if(e.target.dataset.value !== 'combine-item') return

    const items = {
      eyes: document.querySelector('.combine-eyes'),
      mouth: document.querySelector('.combine-mouth'),
      accessories: document.querySelector('.combine-accessories'),
      cheeks: document.querySelector('.combine-cheeks')
    }

    
    if(items[e.target.name] !== null) {
      const removeEl = items[e.target.name]
      this.$display.removeChild(removeEl)
    }

    let addItem;

    if(e.target.name === 'cheeks') {
      addItem = document.createElement('div')
      addItem.className = 'combine-cheeks'
      const leftCheeks = document.createElement('div')
      leftCheeks.className = `combine-cheek combine-${e.target.value}`
      const rightCheeks = document.createElement('div')
      rightCheeks.className = `combine-cheek combine-${e.target.value}`

      addItem.append(leftCheeks)
      addItem.append(rightCheeks)
    } else {
      addItem = document.createElement('img')
      addItem.src = e.target.previousElementSibling.src
      addItem.className = `combine-${e.target.name}`
      if(e.target.name === 'accessories') {
        addItem.classList.add(`combine-${e.target.value}`)
      }
    }
    
    this.$display.append(addItem)
  }

  bindEvent() {
    this.$input.addEventListener('click', (e) => this.previewCombine(e))
  }
}

export default Combine