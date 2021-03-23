let intercepted = false
let goodOldFetch = window.fetch;

export const interceptToken = () => {
    if (!intercepted) {
        intercepted = true
        const constantMock = window.fetch;
        window.fetch = function () {
            validateHeaders(arguments)
            const act = localStorage.getItem("ACT")
            Object.values(arguments)[1]['headers']['Authorization'] = `Bearer ${act}`
            Object.values(arguments)[1]['headers']['Content-Type'] = `application/json`
            return constantMock.apply(this, arguments)
        }
    }
}

export const interceptContentTypes = () => {
    window.fetch = function () {
        validateHeaders(arguments)
        Object.values(arguments)[1]['headers']['Content-Type'] = `application/json`
        return goodOldFetch.apply(this, arguments)
    }
    intercepted = false
}

const validateHeaders = (args) => {
    if (!args[1]['headers']) {
        args[1]['headers'] = {...{}}
    }
}

