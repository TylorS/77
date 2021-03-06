import * as assert from 'assert'

import { groupBy } from './groupBy'

describe('groupBy', () => {
  describe('given (a -> string) -> List a', () => {
    it('returns an object of grouped items', () => {
      type Student =
        {
          readonly name: string,
          readonly score: number,
        }

      const array: Array<Student> =
        [
          { name: 'John', score: 85 },
          { name: 'Jane', score: 93 },
          { name: 'Abby', score: 95 },
          { name: 'Jack', score: 75 },
        ]

      const byGrade = groupBy(function groubByGrade(student: Student) {
        const score = student.score

        return score < 65
          ? 'F' : score < 70
          ? 'D' : score < 80
          ? 'C' : score < 90
          ? 'B' : 'A'
      })

      const actual = byGrade(array)

      const expected =
        {
          C: [ { name: 'Jack', score: 75 } ],
          B: [ { name: 'John', score: 85 } ],
          A: [
            { name: 'Jane', score: 93 },
            { name: 'Abby', score: 95 },
          ],
        }

      assert.deepEqual(actual, expected)
    })
  })
})
