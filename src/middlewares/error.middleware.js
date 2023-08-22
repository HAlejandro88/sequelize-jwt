const ErrorResponse = require('./errorResponse')


const errorHandler = (err, req,res,next) => {
    let error = {...err}

    if(err.name === 'CastError') {
        const message = `Resource not found with ${err.value}`
        error = new ErrorResponse(message, 404)
    }

    if(err.code == 11000) {
        const message = `Duplicate field value entered`
        error = new ErrorResponse(message, 400)
    }

    if(err.name === 'validationError') {
        const message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message,400)
    }

    res.status(err.statusCode || 500).json({
        success: false,
        error: error.message || 'server error'
    })


}


module.exports = errorHandler