function errorHandler(err,req,res) {
    
    if (res.headersSent) {
      return next(err);
    }

    let message = err.message || 'Internal Server Error';

    if (err.isJoi)  {
        message = err.details.map((d) => d.message);
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({status: "failure", error: message });

  }
  
  module.exports = errorHandler;
