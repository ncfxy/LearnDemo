(function () {
    function main(){
        var optEle = document.createElement('div');
        optEle.style.height = '20px';
        optEle.style.width = '20px';
        optEle.style.backgroundColor = 'red';
        optEle.style.position = 'fixed';
        optEle.style.top = '10px';
        optEle.style.left = '10px';
        optEle.style.zIndex = '10000';
        document.body.append(optEle);
        var contentContainer = document.createElement('div');
        contentContainer.style.height = '100%';
        contentContainer.style.width = '30%';
        contentContainer.style.backgroundColor = 'white';
        contentContainer.style.position = 'fixed';
        contentContainer.style.top = '0px';
        contentContainer.style.left = '-30%';
        contentContainer.style.zIndex = '10001';
        contentContainer.style.padding = '0px 20px';
        contentContainer.style.boxSizing = 'border-box';
        var contentHeader = document.createElement('div');
        contentHeader.textContent = '×';
        contentHeader.style.textAlign = 'right';
        contentHeader.style.fontSize = '30px';
        contentHeader.style.cursor = 'pointer';
        var contentInner = document.createElement('div');
        contentContainer.append(contentHeader);
        contentContainer.append(contentInner);
        contentInner.innerHTML = generateContentHTMLStr();
        document.body.append(contentContainer);
        optEle.addEventListener('click', function (event) {
            document.body.style.marginLeft = '30%';
            contentContainer.style.left = '0';
            event.stopPropagation();
        });
        contentHeader.addEventListener('click', function () {
            document.body.style.marginLeft = null;
            contentContainer.style.left = '-30%';
        });
        var css = '.ncfxy-content-generator-H1{margin-left: 0px;}';
        css += '.ncfxy-content-generator-H2{margin-left: 10px;}';
        css += '.ncfxy-content-generator-H3{margin-left: 20px;}';
        var style = document.createElement('style');
        document.head.append(style);
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
    }

    function generateContentHTMLStr() {
        var nodeList = getNodeList();
        var result = '';
        nodeList.forEach(function (ele) {
            result += '<div class="ncfxy-content-generator-' + ele.tagName + '"><a href="#' + ele.id + '">'
                + ele.textContent + '</a></div>';
        });
        return result;
    }
    function getNodeList() {
        var nodeList = [];
        function travelDomTree(root) {
            if (root.tagName === 'H1' || root.tagName === 'H2' || root.tagName === 'H3') {
                nodeList.push(root);
            }
            Array.from(root.children).forEach(function (child) {
                travelDomTree(child);
            });
        }
        travelDomTree(document.body);
        return nodeList;
    }
    main();
}());