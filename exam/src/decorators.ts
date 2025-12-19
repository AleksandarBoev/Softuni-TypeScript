export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalGet = descriptor.get;

    if (!originalGet) {
        throw new Error('ConvertToEuro can only be applied to getters');
    }

    descriptor.get = function (): number | undefined {
        const priceInBgn: number | undefined = originalGet.call(this);
        if (typeof priceInBgn === 'undefined') {
            return undefined;
        } else {
            const priceInEuro = priceInBgn / 1.95583;
            return Number.parseFloat(priceInEuro.toFixed(2));
        }
    }

    return descriptor;
}