function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkURL(formText)===true){
        sendUserData("http://localhost:8081/analyze", {enteredUrl: formText});
    }
    else{
        alert("Please enter a valid URL");
        document.getElementById('name').value="";
    }
}


const sendUserData= async (url, data={})=>{

    const res = await fetch(url, {
        method : "POST",
        credentials : "same-origin",
        headers : {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log(res);
      console.log("error", error);
    }
  }

export { handleSubmit }
