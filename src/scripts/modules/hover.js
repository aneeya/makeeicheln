

  // const select = (target) => document.querySelector(target)
  // const selects = (target) => document.querySelectorAll(target)

  // const $inputs = selects('input')

  // $inputs.forEach( $input => {
  //   $input.addEventListener('mouseover', (e) => {
  //     const $label = e.target.closest('label')
  //     const childrens = $label.children
     
  //     childrens[0].style.background = '#fda56f'
  //     childrens[1].style.background = '#fda56f'
  //     childrens[2].style.background = '#fda56f'
  //   })
  
  //   $input.addEventListener('mouseout', (e) => {
  //     const $label = e.target.closest('label')
  //     const childrens = $label.children
     
  //     childrens[0].style.background = '#ffff'
  //     childrens[1].style.background = '#ffff'
  //     childrens[2].style.background = '#ffff'
  //   })

  // })

 class HoverColor {
    constructor($input, overColor, outColor) {
      this.$input = $input
      this.overColor = overColor
      this.outColor = outColor
      this.cheekColor = {
        peach: 'var(--color-peach)',
        pink: 'var(--color-pink)',
        purple: 'var(--color-purple-1)'
      }

      this.bindEvent()
    }

    changeColor(domList, bkcolor, bdst) {
      [ ...domList ].forEach( dom => {
        dom.style.background = bkcolor
        dom.style.border = bdst
      })
    }

    changeOverColor(e, color) {
      if(e.target.name === 'cheeks') {
        this.$input.previousElementSibling.style.color = 'var(--color-white)'
      }
        
      const domList = e.target.closest('label').children
      this.changeColor(domList, color, 'none')
    }

    changeOutColor(e, color) {
      if(e.target.name === 'cheeks') {
        const ckColor = e.target.value
        this.$input.previousElementSibling.style.color = this.cheekColor[ckColor]
      }
        
      const domList = e.target.closest('label').children
      this.changeColor(domList, color, '2px solid var(--color-orange-0)')
    }

    bindEvent() {
      this.$input.addEventListener('mouseover', (e) => this.changeOverColor(e, this.overColor))
      this.$input.addEventListener('mouseout', (e) => this.changeOutColor(e, this.outColor))
    }
  }

  export default HoverColor