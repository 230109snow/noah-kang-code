export function fetchCatsFn() {
    const inputVal = document.getElementById('status-code').value;

    document.getElementById('status-code-img').src = `https://http.cat/${inputVal}.jpg`
}

//default export
export function anotherFn(){
    
}