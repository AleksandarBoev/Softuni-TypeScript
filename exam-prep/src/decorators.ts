export function NotifyOnSuccess(notificationType: 'Email' | 'Push') {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]): string {
            let methodCallResult: string = originalMethod.call(this, ...args);
            if (!methodCallResult.startsWith('ERROR')) {
                console.log(`[NOTIFY] Sending ${notificationType} notification for successful action "${key}".`)
            }
            return methodCallResult;
        };
        return descriptor;
    }
}