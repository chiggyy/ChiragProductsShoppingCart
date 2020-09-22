const should = require("chai").should()
const mongoose = require("mongoose")

var User = require("../../models/user")

describe("User test suite", () => {
  beforeEach(done => {
    mongoose.Promise = global.Promise

    if (mongoose.connection.db) return done()
    mongoose.connect('mongodb://localhost:27017/codertask', {
    useMongoClient: true ,
    } , done);
  })

  it("should encrypt the password.", () => {
    let user = new User()
    user.password = "chirag"
    expect(user.encryptPassword(user.password)).toContain("$2a$05")
  })

  

  it("should save on the database", done => {
    const mockedUser = {
      name: "chirag 15bells",
      city: "gurgaon",
      state: "haryana",
      email: "chirag@15bells.com",
      password: "chirag"
    }
    const newUser = new User(mockedUser)

    newUser.password = newUser.encryptPassword("chirag")
    newUser.save((err, result) => {
      if (err) return done(err)
      return done(null, newUser)
    })
  })

  it("should remove from database", done => {
    User.findOneAndRemove(
      {
        email: "chirag@15bells.com"
      },
      (err, data) => {
        if (err) return done(err)
        return done()
      }
    )
  })
})
