import Currency from '3-currency.js'

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
  this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.Currency.name} $({this.currency.code})`
}
