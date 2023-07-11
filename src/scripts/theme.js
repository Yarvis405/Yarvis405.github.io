const query = query => {document.querySelector(query);}

[header, body, footer, article, text] = [query("header") ,query("body"), query("footer"), query(article), query("text")];

let [cfirst, csecond, cfourth, cfifth ] = ["#1d1c1a",  "#c3b1e1",  "#808080",  "#faf8f6"];

/*
    theme -> Dark/Light
    m -> main
    s -> second
*/ 

index = 0;

const theme = (theme, mcolor, scolor, mtext, stext) => {
    let theme = theme;
    console.log(`${header} y ${footer}`);
}

const dark = theme();
const light = theme();

btnTheme.onclick = () => {
    if(index <= 0){
        index = 1;
    }else {
        index = 0;
    }

    return index;
}

const themeSelector = () => {
    switch(index){
        case 0:
            dark;
            console.log("dark");
            break;
        
        case 1:
            light;
            console.log("Light");
            break;
        
        default:
            dark;
            break;
    }
}