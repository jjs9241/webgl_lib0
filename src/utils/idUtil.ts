let idCount = 0

export const newId = (prefix: string) => {
    const newIdString = `${prefix}-${idCount}`
    idCount += 1
    return newIdString
}