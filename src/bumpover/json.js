import { Bumpover } from './index'

export class JSONBumpover extends Bumpover {
  constructor (rules, options) {
    super(rules, options)
    this.options = {
      ...this.options,
      serializer: JSON.stringify,
      deserializer: JSON.parse
    }
  }
}
