// Yarin Ben Moshe - 314939885
// Custom Exception class that fits our needs as it also has the option to write our own error/message
class CustomException {
    constructor(message, status = 500) {
        this.name = `CustomException`;
        this.message = message;
        this.status = status;
        this.stack = (new Error()).stack;
    }
}

module.exports = CustomException;