

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
    constructor($container, overColor, outColor) {
      this.$container = $container
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
      domList[0].style.background = bkcolor
      domList[1].style.background = bkcolor
      domList[2].style.background = bkcolor
      
      domList[0].style.border = bdst
      domList[1].style.border = bdst
      domList[2].style.border = bdst
    }

    changeOverColor(e, color) {
      if(e.target.name === 'cheek') {
        this.$container.previousElementSibling.style.color = 'white'
      }
        
      const domList = e.target.closest('label').children
      this.changeColor(domList, color, 'none')
    }

    changeOutColor(e, color) {
      if(e.target.name === 'cheek') {
        const ckColor = e.target.value
        this.$container.previousElementSibling.style.color = this.cheekColor[ckColor]
      }
        
      const domList = e.target.closest('label').children
      this.changeColor(domList, color, '2px solid var(--color-main)')
    }

    bindEvent() {
      this.$container.addEventListener('mouseover', (e) => this.changeOverColor(e, this.overColor))
      this.$container.addEventListener('mouseout', (e) => this.changeOutColor(e, this.outColor))
    }
  }

  export default HoverColor