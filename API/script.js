fetch("https://dummyjson.com/icon/abc123/150")

.then(response => {
    if(!response.ok){
       throw new Error("image not found");
    }
    return response.blob();
})

.then(blob =>{
    document.getElementById('myImage').src = URL.createObjectURL(blob);
})


.catch(err => {
    document.getElementById('errorMsg').textContent = err.message;
});