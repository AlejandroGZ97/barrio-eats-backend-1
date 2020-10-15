export class ModelFireStore {
  /**
   * Comprueba que todos los parámetros ya definidos sean diferentes de nulo
   */
  get isValid(): boolean {
    for(let k in this) if(this[k] == null) return false
    return true
  }

  /**
   * Retorna un objeto con los parámetros del modelo
   */
  get json(): object {
    let data = {}
    for(let k in this) data[`${k}`] = this[k]
    return data
  }
}
