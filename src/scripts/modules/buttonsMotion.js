class ButtonMotion {
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

  bindEvent() {
    switch(this.$button.innerText) {
      case 'prev':
        this.$button.addEventListener('click', this.prevItem)
        break;
      case 'reset':
        this.$button.addEventListener('click', this.resetItem)
    }
  }
}

export default ButtonMotion