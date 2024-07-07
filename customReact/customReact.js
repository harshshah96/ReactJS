function customReader(reactElement, container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // container.appendChild(domElement);
    // console.log(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        // if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
        console.log(5);
    }
    
    container.appendChild(domElement);
    console.log(7)
}


const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children: 'click me to visit google'
};

customReader(reactElement,mainContainer);



