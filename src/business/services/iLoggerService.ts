export type ILoggerService = {
    error: () => any
    success: () => any
}

export const LoggerServiceToken = Symbol.for('LoggerService')
