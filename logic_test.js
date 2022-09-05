function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const result = {};
    for (let i=0;i<str1.length;i++) {
        let char = str1[i];
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }

    for (let i=0;i<str2.length;i++) {
        let char = str2[i];
        if (!result[char]) {
            return false;
        }
        else {
            result[char] = -1;
        }
    }
    return true;
}

let texts = ["cook", "save", "taste", "aves", "vase", "state", "map"];
let results = new Array();
let located = 0;

while(texts.length > located) {
    y = results.length;
    results[y] = new Array();
    for(let x in texts) {
        if(texts.hasOwnProperty(x)) {
            if(results[y].length == 0) {
                results[y][0] = texts[x];
                located++;
                delete texts[x];
            } else {
                for(let z in texts) {
                    if(texts.hasOwnProperty(z) && anagram(texts[z], results[y][0])) {
                        results[y][results[y].length] = texts[z];
                        located++;
                        delete texts[z];
                    }
                }
            }
        }
    }
}

console.log(results);