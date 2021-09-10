var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["success"] = 200] = "success";
    httpStatus[httpStatus["created"] = 201] = "created";
    httpStatus[httpStatus["not_found"] = 404] = "not_found";
    httpStatus[httpStatus["error"] = 400] = "error";
})(httpStatus || (httpStatus = {}));
//# sourceMappingURL=httpStatus.js.map