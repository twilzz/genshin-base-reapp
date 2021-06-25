export default class GetData {
    constructor() {
        this._apibase = 'https://genshinlist.com/api'
    }
    getResourse = async(url) => {
        const response = await fetch(`${this._apibase}${url}`);
        if (!response.ok) {
            throw new Error (`Ошибка по URL${url} статус ${response.status}`)
        }
        return await response.json();
    }
    getAllChars = async () => {
        const response = await this.getResourse('/characters')
        return response
    }

}