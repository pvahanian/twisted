import * as champions from './files/champions.json'
import * as hexes from './files/hexes.json'
import * as items from './files/items.json'
import * as traits from './files/traits.json'

import { TFTChampionsDTO } from '../../../dto/index.js'
import { TFTHexesDto } from '../../../dto/Static/TFTHexes.dto'
import { TFTItemsDTO } from '../../../dto/Static/TFTItems.dto'
import { TFTTraitsDTO } from '../../../dto/Static/TFTTtraits.dto'

export class TFTStaticFiles {
  Champions (): TFTChampionsDTO[] {
    return champions
  }

  Hexes (): TFTHexesDto[] {
    return hexes
  }

  Items (): TFTItemsDTO[] {
    return items
  }

  Traits (): TFTTraitsDTO[] {
    return traits
  }
}