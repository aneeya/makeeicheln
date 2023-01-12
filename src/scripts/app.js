
import MakeCharacterPreview from "./buttons/makeCharacterCombine.js";
import Combine from "./modules/combine.js";
import HoverColor from "./modules/hover.js";
import { select, selects } from "./modules/domSelect.js";
import submitNewCharacter from "./request/makeCharacter.js";
import makeCharacterCancel from "./buttons/makeCharacterCancel.js";

[ ...selects('.makeCharacter-combine-inputs input') ].forEach( $input => {
  let overColor = 'var(--color-orange-0)'
  if($input.value === 'peach') overColor = '#dd8781'
  if($input.value === 'pink') overColor = '#cc6688'
  if($input.value === 'purple') overColor = '#e6b0ea'

  new HoverColor($input, overColor, '#ffff')
  new Combine($input)
});

[ ...select('.makeCharacter-buttons').children ].forEach($button => {
  new MakeCharacterPreview($button)
})

select('.makeCharacter').addEventListener('submit', submitNewCharacter)

select('.makeCharacter-name-buttons').addEventListener('click', makeCharacterCancel)