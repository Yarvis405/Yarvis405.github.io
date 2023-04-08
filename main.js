const getData = async () => {
    data = await fetch('./data.json');
    alert(data)

}