import contants from "../constants.js";
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case contants.VALIDATION_ERROR:
            res.json({
                title: "validation error",
                stackTrace: err.stack,
                message: err.message

            })
            break;
        case contants.UNAUTHORIZED_ERROR:
            res.json({
                title: "unAuthorized error",
                stackTrace: err.stack,
                message: err.message
            })
            break;
        case contants.FORBIDDEN:
            res.json({
                title: "forbidden error",
                stackTrace: err.stack,
                message: err.message
            })
            break;
        case contants.NOT_FOUND:
            res.json({
                title: "unAuthorized error",
                stackTrace: err.stack,
                message: err.message
            })
            break;
        case contants.SERVER_ERROR:
            res.json({
                title: "unAuthorized error",
                stackTrace: err.stack,
                message: err.message
            })
            break;
        default:
            console.log("No error all good");
            break;
    }
    res.json({
        message: err.message,
        stackTrace: err.stack
    })
}