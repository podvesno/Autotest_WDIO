export default class Page {
    constructor () {
        this.title = '';
    }

    open (path) {
        browser.url(path)
    }
};