export default class Utils {

    static getFullOffset(element) {
        const offset = {
            top: element.offsetTop,
            left: element.offsetLeft,
        };

        if (element.offsetParent) {
            const po = this.getFullOffset(element.offsetParent);
            offset.top += po.top;
            offset.left += po.left;
        }
        return offset;
    }
}
