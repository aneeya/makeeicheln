import Combine from "./modules/combine.js";
import HoverColor from "./modules/hover.js";

const select = (target) => document.querySelector(target);
const selects = (target) => document.querySelectorAll(target);

[ ...selects('input') ].forEach($input => {
  let overColor = '#fda56f'
  if($input.value === 'peach') overColor = '#dd8781'
  if($input.value === 'pink') overColor = '#cc6688'
  if($input.value === 'purple') overColor = '#e6b0ea'

  new HoverColor($input, overColor, '#ffff')
  new Combine($input)
})