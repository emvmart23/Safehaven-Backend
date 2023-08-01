const ErrorHandler = (err, req, res, next) => {
    //console.log('error midleware')
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        succes: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'develoment' ? err.stack : {}
    })
}

export default ErrorHandler;

