let chai = require('chai')
chai.should()

import Nicknames from './index.js'

describe('Testing Nicknames class:', function() {

  describe('Testing .get():', function() {

    describe('.get("Rob")', function() {
      let relatednames = Nicknames.get('Rob')

      it('should return an array of related names for "Rob".', function () {
        relatednames.should.be.an('array')
      })

      it('should have length of 14.', function () {
        relatednames.should.have.lengthOf(14)
      })
    })

  })

  describe('Testing .match():', function() {

    describe('.match("Rob", "Robert")', function() {

      it('should return true.', function () {
        let response = Nicknames.match('Rob', 'Robert')
        response.should.be.true
      })

    })

    describe('.match("Mathew", "Robert")', function() {

      it('should return false.', function () {
        let response = Nicknames.match('Mathew', 'Robert')
        response.should.be.false
      })

    })

  })

})

// test case for rob
// retreiveRow will return nothing
// retreiveRows will return bob,rob,robert,bobby,rob,bob,robert,hob,hobkin,dob,rob,bobby,dobbin,bob
// length should be 14