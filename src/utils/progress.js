const STORAGE_KEY = 'joblix_progress'

function getDefaultProgress() {
    return {
        smm: {
            level1: {
                task1: { isComplete: false, stars: 0 },
                task2: { isComplete: false, stars: 0 }
            },
            level2: {
                task1: { isComplete: false, stars: 0 },
                task2: { isComplete: false, stars: 0 }
            }
        },
        frontend: {
            level1: {
                task1: { isComplete: false, stars: 0 },
                task2: { isComplete: false, stars: 0 },
                task3: { isComplete: false, stars: 0 }
            }
        }
    }
}

export function getProgress() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return getDefaultProgress()
        return JSON.parse(stored)
    } catch {
        return getDefaultProgress()
    }
}

export function saveTaskResult(professionId, levelId, taskId, stars) {
    const progress = getProgress()
    if (!progress[professionId]) progress[professionId] = {}
    if (!progress[professionId][levelId]) progress[professionId][levelId] = {}

    const prevStars = progress[professionId][levelId][taskId]?.stars || 0
    progress[professionId][levelId][taskId] = {
        isComplete: stars > 0,
        stars: Math.max(stars, prevStars)
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getTaskProgress(professionId, levelId, taskId) {
    const progress = getProgress()
    return progress[professionId]?.[levelId]?.[taskId] || { isComplete: false, stars: 0 }
}

export function isTaskUnlocked(professionId, levelId, taskId, levelData) {
    if (!levelData?.tasks) return false
    const tasks = levelData.tasks
    const taskIndex = tasks.findIndex(t => t.taskId === taskId)
    if (taskIndex <= 0) return true

    const prevTask = tasks[taskIndex - 1]
    const prevProgress = getTaskProgress(professionId, levelId, prevTask.taskId)
    return prevProgress.isComplete
}

export function isLevelUnlocked(professionId, levelIndex, levelsConfig = []) {
    if (levelIndex === 0) return true
    const prevLevelKey = `level${levelIndex}`
    const progress = getProgress()
    const prevLevelProgress = progress[professionId]?.[prevLevelKey] || {}
    const totalStars = Object.values(prevLevelProgress).reduce((sum, t) => sum + (t.stars || 0), 0)
    const minStars = levelsConfig[levelIndex]?.minStarsToUnlock ?? 1
    return totalStars >= minStars
}

export function getTotalStats() {
    const progress = getProgress()
    let totalTasks = 0
    let totalStars = 0
    Object.values(progress).forEach(levels => {
        Object.values(levels).forEach(tasks => {
            Object.values(tasks).forEach(task => {
                if (task.isComplete) totalTasks++
                totalStars += task.stars || 0
            })
        })
    })
    return { totalTasks, totalStars }
}
