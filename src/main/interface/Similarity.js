module.exports = class Similarity {
    constructor() {}
    /**
     * 
     * @param {String} thanos 灭霸，主字符串
     * @param {String} rival  敌人，需要比较的字符串
     * @description 比较两个字符串
     */
    compareTwoStrings(thanos, rival) {
        console.info(111)
    }

    /**
     * 
     * @param {String} thanos  
     * @param {[...String]} avengers  复仇者，字符串数组
     * @description 寻找最佳匹配结果
     */
    findBestMatch(thanos, avengers) {}

    /**
     * 
     * @param {String} thanos 
     * @param {[...String]} avengers 
     * @description 寻找最差匹配结果
     */
    findWorstMatch(thanos, avengers) {}

    checkParamType(thanos, avengers) {
        if (typeof thanos !== 'string') throw new Error('first argument should be a string')
        if (!Array.isArray(avengers)) throw new Error('second argument should be an array of strings')
        if (avengers.find(s => typeof s !== 'string')) throw new Error('second argument should be an array of strings')
    }

    initParams(thanos, rival) {
        return [thanos.replace(/\s+/g, '').toLowerCase(), rival.replace(/\s+/g, '').toLowerCase()]
    }
}