
function getFirstSelector(selector) {
    return document.querySelector(selector);
}

//console.log(getFirstSelector('ul'));

function nestedTarget() {
    const main = document.getElementById('nested').querySelector('.target');
    return main;
}

//nestedTarget();

function increaseRankBy(n) {
    const rankedList = document.getElementsByClassName('ranked-list');
    for (let i = 0; i < rankedList.length; i++) {
        let list = rankedList[i].children;
        for (let x = 0; x < list.length; x++) {
            let listNum = list[x].innerHTML;
            listNum = parseInt(list[x].innerHTML) + n;
        }
    }
    return rankedList;
}

//increaseRankBy(1);

function deepestChild() {
    const gNode = document.getElementById('grand-node');
    const gNodeList = gNode.children;
    //console.log(gNodeList[0].textContent);
    for (let i = 0; i < gNodeList.length; i++) {
        if (gNodeList[i].textContent) {
            //console.log(gNodeList[i]);
            return gNodeList[i];
        }
    }
}