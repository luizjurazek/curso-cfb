//  import getTodosCursos, {cursos} from './cursos.js'

import getTodosCursos from './cursos.js'
// import { cursos as cursosProg, getCurso as cursoEspecifico } from './cursos.js'
import * as m_cursos from './cursos.js'


// console.log(cursosProg)
console.log("Export default: " + getTodosCursos())
// console.log(cursoEspecifico(0))

console.log(m_cursos.cursos)
console.log("Import do default no * modulo: " + m_cursos.default())