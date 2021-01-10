function basicTeenager (age) {
  if (13 <= age <= 19) {
    return 'You are a teenager!'
  }
}
basicTeenager(14)

function teenager(age) {
  if (13 <= age <= 19) {
    console.log ('You are a teenager!')
  }
    else if (12>=age>=20) {
      console.log ('You are not a teenager.')
      }
}
teenager(25)

function ageChecker(age) {
  if (13 <= age <= 19) {
    return 'You are a teenager!'
  }
 else if (age<=12) {
      return 'You are a kid'
    }
    else if (age>=20) {
      return 'You are a grownup'
    }
  }
  ageChecker(14)
  ageChecker(11)
  ageChecker(26)
