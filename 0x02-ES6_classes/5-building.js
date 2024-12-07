import Building from '5-building.js'

class Building() {
  constructor(sqft) {
    if (this.constructor === Building){
      throw new Error('class is abstract and cannot be instanciated')
    this._sqft = sqft
  }

  get sqft() {
    return this_sqft;
  }

  set sqft(value) {
    if (typeof sqft !== number) {
      throw new Error('value must be a number')
    } else {
      this._sqft = value;
    }
  }

  evacuationWarningMessage() {
  throw new Error('Class extending Building must override evacuationWarningMessage')
  }

}
