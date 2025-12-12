class MockWeatherDataService {
    private weatherData: string[] = [
        'Sunny 8° to 20°',
        'Partially Cloudy 7° to 19°',
        'Sunny 5° to 18°'
    ];

    addWeatherData(data: string): void {
        this.weatherData.push(data);
    }

    @getFromInMemoryCache
    getWeatherData(): string[] {
        return this.weatherData;
    }
}

class CachedWeatherData {
    private static readonly CACHE_TTL_SECONDS = 5;

    private static cacheTime: Date | undefined;
    private static cachedData: string[] | undefined;

    public static getCachedData(): string[] | undefined {
        if (this.shouldUseCache()) {
            return this.cachedData!;
        } else {
            return undefined;
        }
    }

    private static shouldUseCache(): boolean {
        return this.cacheTime !== undefined && this.cachedData !== undefined && this.cacheIsNotExpired();
    }

    /**
     * Compares current time with last cache time in milliseconds, turns it into seconds
     * and compares the seconds with the defined time to live.
     */
    private static cacheIsNotExpired(): boolean {
        return ((new Date().getTime() - this.cacheTime!.getTime()) / 1000) < this.CACHE_TTL_SECONDS;
    }

    public static cacheData(data: string[]): void {
        this.cacheTime = new Date();
        this.cachedData = data;
    }
}

function getFromInMemoryCache(target: any, key: string, descriptor: PropertyDescriptor) {
    let originalFunction = descriptor.value;
    descriptor.value = function (): string[] {
        const cachedData = CachedWeatherData.getCachedData();

        if (cachedData !== undefined) {
            console.log('Returned from cache.')
            return cachedData;
        } else {
            const resultCopy: string[] = Array.from(originalFunction.call(this));
            CachedWeatherData.cacheData(resultCopy);
            return resultCopy;
        }
    }
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData());
console.log(service.getWeatherData());
service.addWeatherData('Partially Cloudy 5° to 11°');
console.log(service.getWeatherData());

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000)