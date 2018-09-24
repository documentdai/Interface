export function difference(t) {
    const now = Date.now()
    const tNow = new Date(t).getTime()

    const diff = (now - tNow) / 1000;

    if (diff < 60 - 1) {
        return `${Math.ceil(diff)} 秒前`
    }
    if (diff < 60 * 60 - 1) {
        return `${Math.ceil(diff / 60)} 分钟前`
    }
    if (diff < 60 * 60 * 60 - 1) {
        return `${Math.ceil(diff/ 60 / 60)} 小时前`
    }
    if (diff < 60 * 60 * 60 * 24 - 1) {
        return `${Math.ceil(diff/ 60 / 60 / 24)} 天前`
    }
    return `${Math.ceil(diff/ 60 / 60 / 24 / 31)} 月前`
}