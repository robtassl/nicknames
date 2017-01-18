import Baby from 'babyparse'

class nicknames {

  // Returns the array from line from names.csv where first value == name.
  static retreiveRow(rows, name) {
    let result = null
    name = name.toLowerCase()

    let matched_row = rows.find(row => row[0] === name)

    if (matched_row)
      result = matched_row

    return result
  }

  // returns array from lines from names.csv where any value == name.
  static retreiveRows(rows, name) {
    let result = null
    name = name.toLowerCase()

    let matched_rows = [].concat(...rows.filter(row => {
      return !!row.find(item => item === name)
    }))

    if (matched_rows)
      result = matched_rows

    return result
  }

  // get() will return all related nicksnames.
  static get(name) {
    let result = null

    if (name) {
      name = name.toLowerCase()
      let rows = Baby.parseFiles('./names.csv').data

      result = nicknames.retreiveRows(rows, name)
    }

    return result
  }

  // Will be passed two strings,
  // and determine if they match via
  // related nicknames.
  // returns true or false.
  static match(name1, name2) {
    let result = null

    if (name1 && name2) {
      name1 = name1.toLowerCase()
      name2 = name2.toLowerCase()

      if (name1 === name2)
        return true

      // Cross reference, get all of name1s related names, see if name2 is included,
      // then get all of name2s related names, see if name1 is included.
      let result1 = !!nicknames.get(name1).find(name => name === name2)
      let result2 = !!nicknames.get(name2).find(name => name === name1)
      result = (result1 || result2)
    }

    return result
  }

}

module.exports = nicknames