import Exercise from '../lib/Exercise'

let exercise: Exercise;

beforeAll( async () => {
    exercise = new Exercise('./src/game-reviews.js', 'gamereviews_example')
    await exercise.parseFile()
})

test('question 4', async () => {
    const result = await exercise.runQuery(4)
    expect(result).toHaveLength(10)
    expect(result[0].name).toContain('Resident Evil')
    expect(result[4].name).toContain('Heroes')
    expect(result[9].name).toContain('Crysis')
});

test('question 13', async () => {
    const result = await exercise.runQuery(13)
    expect(result).toHaveLength(1)
    expect(Object.values(result[0])).toContain(4209)
    expect(Object.values(result[0])).toContain(11)
})

test('question 20', async () => {
    const result = await exercise.runQuery(20)
    expect(result).toHaveLength(10)
    expect(result[0].name).toBe('Jan')
    expect(Object.values(result[1])).toContain(3)
    expect(Object.values(result[8])).toContain(4)
    expect(result[9].name).toBe('Kevin')
});

test('question 22', async () => {
    const result = await exercise.runQuery(22)
    expect(result).toHaveLength(3)
    expect(result[0].name).toBe('Stijn')
    expect(Object.values(result[1])).toContain(461.97)
    expect(result[2].name).toBe('Max')
});

test('question 23', async () => {
    const result = await exercise.runQuery(23)
    expect(result).toHaveLength(3)
    expect(result[0].name).toContain('Ubisoft')
    expect(Object.values(result[1])).toContain(7.5714)
    expect(result[2].name).toContain('Pluto')
});

