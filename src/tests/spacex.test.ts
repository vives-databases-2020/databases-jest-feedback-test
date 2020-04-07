import Exercise from '../lib/Exercise'

let exercise: Exercise;

beforeAll( async () => {
    exercise = new Exercise('./src/spacex.js', 'spacex')
    await exercise.parseFile()
})

test('question 7', async () => {
    const result = await exercise.runQuery(7)
    expect(result).toHaveLength(14)
    expect(Object.values(result[0])).toContain(2006)
    expect(Object.values(result[0])).toContain(1)
    expect(Object.values(result[6])).toContain(2013)
    expect(Object.values(result[6])).toContain(3)
    expect(Object.values(result[13])).toContain(2020)
    expect(Object.values(result[13])).toContain(1)
});

test('question 9', async () => {
    const result = await exercise.runQuery(9)
    expect(result).toHaveLength(1)
    expect(Object.values(result[0])).toContain('CRS-7')
})

test('question 14', async () => {
    const result = await exercise.runQuery(14)
    expect(result).toHaveLength(9)
    expect(Object.values(result[0])).toContain('CASSIOPE')
    expect(Object.values(result[0])).toContain(2013)
    expect(Object.values(result[6])).toContain('Iridium NEXT Mission 2')
    expect(Object.values(result[6])).toContain(2017)
    expect(Object.values(result[8])).toContain('SES-16 / GovSat-1')
    expect(Object.values(result[8])).toContain(2018)
});

test('question 19', async () => {
    const result = await exercise.runQuery(19)
    expect(result).toHaveLength(22)
    expect(Object.values(result[1])).toContain('Argentina')
    expect(Object.values(result[1])).toContain(4400)
    expect(Object.values(result[6])).toContain('Germany')
    expect(Object.values(result[6])).toContain(null)
    expect(Object.values(result[21])).toContain('United States')
    expect(Object.values(result[21])).toContain(162141)
});

test('question 23', async () => {
    const result = await exercise.runQuery(23)
    expect(result).toHaveLength(1)
    const date = Object.values(result[0]).find( (rawDate) => {
        return Date.parse(rawDate as string) == Date.parse('2014-03-05 21:25:00')
    })
    expect(date).not.toBeUndefined()
});

