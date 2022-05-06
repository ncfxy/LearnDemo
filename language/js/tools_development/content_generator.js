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
        contentContainer.style.textAlign = 'left';
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
        if (contentInner.clientHeight > contentContainer.clientHeight) {
            contentContainer.style.overflow = 'scroll'
        }
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
        style.appendChild(document.createTextNode(css));
        document.onscroll = function(){
           refs = document.getElementsByClassName('ncfxy-content-generator')
           for (var i = 0;i < refs.length;i++){
               refs[i].style.backgroundColor = 'transparent'
           }
           var nodeList = getNodeList();
           var i = 0;
           for (i = 0;i < nodeList.length;i++) {
               if (nodeList[i].offsetTop + 10 > window.scrollY) {
                   break;
               }
           }
           if (i >= nodeList.length)i = nodeList.length - 1;
           var refId = nodeList[i].id + '-ref'
           var view = document.getElementById(refId)
           view.style.backgroundColor = 'beige'
        }
    }

    function generateContentHTMLStr() {
        var nodeList = getNodeList();
        var result = '';
        nodeList.forEach(function (ele) {
            result += '<div class="ncfxy-content-generator ncfxy-content-generator-' + ele.tagName + '" id="' + ele.id + '-ref"><a href="#' + ele.id + '">'
                + ele.innerText + '</a></div>';
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
(function(){
    function loadMermaidIfNeeded() {
        var mermaidElements = document.getElementsByClassName('mermaid');
        if(mermaidElements.length > 0) {
            mermaidScript = document.createElement('script');
            mermaidScript.src = 'https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js';
            mermaidScript.type = 'text/javascript';
            mermaidScript.defer = true;
            document.head.append(mermaidScript);
            mermaidScript.onload = function() {
                mermaid.initialize({startOnLoad: true, theme: 'forest'});
                mermaid.init();
            }
        }
    }
    loadMermaidIfNeeded();
}())