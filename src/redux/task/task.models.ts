interface addTask {
    type: string,
    payload: object
}

interface editTask {
    type: string,
    payload: object
}

interface removeTask {
    type: string,
    payload: object
}

interface completeTask {
    type: string,
    payload: object
}

interface sortTask {
    type: string,
    payload: object
}

export type Action = 
    addTask |
    editTask |
    removeTask |
    completeTask |
    sortTask
