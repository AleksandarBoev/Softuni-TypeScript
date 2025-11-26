enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: ReadonlyMap<T, string[]>;

    log(logLevel: T, message: string): void;

    getFormat(): V;
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    private _cachedLogs: Map<T, string[]> = new Map();

    constructor(private format: V) {
        this.format = format;
    }

    get cachedLogs(): ReadonlyMap<T, string[]> { //readonly permits calling only certain operations. Safe enough.
        return new Map(this._cachedLogs); //just in case someone REALLY wants to do stuff they shouldn't. Copying the data hits performance tho.
    }

    getFormat(): V {
        return this.format;
    }

    log(logLevel: T, message: string): void {
        const logMessage: string = this.getLogMessage(logLevel, message);
        console.log(logMessage);

        if (this._cachedLogs.has(logLevel)) {
            this._cachedLogs.get(logLevel)!.push(logMessage);
        } else {
            this._cachedLogs.set(logLevel, [logMessage]);
        }
    }

    private getLogMessage(logLevel: T, message: string): string {
        switch (this.format) {
            case LoggingFormat.Standard:
                return `[${logLevel}][${new Date().toISOString()}] ${message}`;
            case LoggingFormat.Minimal:
                return `*${logLevel}* ${message}`;
            default:
                throw new Error('Invalid log level!');
        }
    }
}

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
//
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");
// console.log('-----------');
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
// logger.log(LoggingLevel.Info, "Just a simple message.");
// logger.log(LoggingLevel.Error, "A Problem happened.");
// console.log('-----------')
// console.log(logger.getFormat());
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))

let logger = new Logger<LoggingLevel, LoggingFormat>("%text"); //TS Error
let wronglogger = new Logger<string, LoggingLevel>(); //TS Error
logger.log("%s", "Running the debugger."); //TS Error
logger.log({format: "Test %s"}, "Running the debugger."); //TS Error