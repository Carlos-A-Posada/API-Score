const {
    createPlateScore,
    findScoreByQuery,
    updatePlateScore,
    deletePlateScore
} = require ('../repositories/plate-score-repository')

const createPlateScoreService = async (plateScore) => {
    const plateScoreCreated = await createPlateScore(plateScore)
    return plateScoreCreated
}

const getPlateScoreByQueryService = async (query) => {
    const plateScore = await findScoreByQuery(query)
    return plateScore
}

const updatePlateScoreService = async (plateScoreId, plateScore) => {
    const plateScoreUpdated = await updatePlateScore(plateScoreId, plateScore)
    return plateScoreUpdated
}

const deletePlateScoreService = async (plateScoreId) => {
    const plateScoreDeleted = await deletePlateScore(plateScoreId)
    return plateScoreDeleted
}

module.exports = {
    createPlateScoreService,
    getPlateScoreByQueryService,
    updatePlateScoreService,
    deletePlateScoreService
}   