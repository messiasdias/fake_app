import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'

import { 
    faVenusMars,
    faToggleOn,
    faUserCog,
    faEnvelope,
    faEdit,
} 
from '@fortawesome/free-solid-svg-icons'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    faVenusMars,
    faToggleOn,
    faUserCog,
    faEnvelope,
    faEdit
)

export default FontAwesomeIcon