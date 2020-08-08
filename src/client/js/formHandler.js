function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkURL(formText)===true){
        //getApiKey('https://npl-evaluater.herokuapp.com/getapikey')
        getApiKey('http://localhost:8081/getapikey')
        .then(function(data){
          console.log('key is: '+data.key);

          let myData={
            key: data.key,
            lang: 'en',
            url: formText
          }

          analyzeData(myData)
          .then(function(data){
            document.getElementById('agreement').innerHTML= data.agreement;
            document.getElementById('confidence').innerHTML= data.confidence;
            document.getElementById('irony').innerHTML= data.irony;
            document.getElementById('model').innerHTML= data.model;
            document.getElementById('score').innerHTML= data.score_tag;
            document.getElementById('subjectivity').innerHTML= data.subjectivity;
          });


        })
    }
    else{
        alert("Please enter a valid URL");
        document.getElementById('name').value="";
    }
}

async function getApiKey(url){

  const res = await fetch(url, {
      method : "GET",
      credentials : "same-origin",
  });
  try {
    const data = await res.json();
    console.log('API key fetched seccessfully')
    return data;
  }  catch(error) {
    console.log(res);
    console.log("error", error);
  }
}

async function analyzeData(data){

  const res = await fetch('https://api.meaningcloud.com/sentiment-2.1?key='+data.key+'&lang=en&of=json&url='+data.url)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

export { handleSubmit, getApiKey }
