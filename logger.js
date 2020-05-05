const fs = require('fs');
// const infoOut = fs.createWriteStream('./info.log');
// const errorOut = fs.createWriteStream('./error.log');


class Logger {
    constructors() {
    this.logDirectory = './logs';
    }

    createFileName(type) {
        let date = new Date();
        let formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return `${type}_${formatted}.log`;
    }

    info(message) {
        let date = new Date();
        let info = `${date.toUTCString()}: INFO ${message} \n`;
        let name = this.createFileName('info');
        this.appendFile(`${this.logDirectory}/${name}`, info);
        return info;
    }
    error(message) {
        let date = new Date();
        let error = `${date.toUTCString()}: ERROR ${message} \n`;
        this.appendFile(`${this.logDirectory}`, error);
        return error;
    }

    appendFile(filePath, message) {
        fs.open(filePath, 'a+', (err, fd) => {
            if (err) throw err;
            fs.writeFile(fd, message, {flag: 'a+'}, (err) => {
                fs.close(fd, (err) => {
                    if (err) throw err;
                });
                if (err) throw err;
            });
        });
    }

}

module.exports = Logger;