type HttpResponse = {
    code: number,
    text: string,
    printChars?: number
}

function printHttpInformation(httpResponse: HttpResponse): void {
    if (httpResponse.printChars) {
        console.log(httpResponse.text.substring(0, httpResponse.printChars));
    } else {
        console.log(httpResponse.text);
    }
}

printHttpInformation({code: 200, text: 'OK'});
printHttpInformation({code: 201, text: 'Created'});
printHttpInformation({code: 400, text: 'Bad Request', printChars: 4});
printHttpInformation({code: 404, text: 'Not Found'});
printHttpInformation({code: 404, text: 'Not Found', printChars: 3});
printHttpInformation({code: 500, text: 'Internal Server Error', printChars: 1});