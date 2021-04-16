fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
  .then(res => res.json())
  .then(data =>  {   
    var output='';
      for(var i=0;i<data.records.length;i++)
      {
        output+= data.records[i].arrival_date+'<br>';
       
      }
    document.querySelector('#arrival_date').innerHTML += output 
 })
 
fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
  .then(res => res.json())
  .then(data =>  {   
    var output='';
      for(var i=0;i<data.records.length;i++)
      {
        output+= data.records[i].market+'<br>';
      }
    document.querySelector('#market').innerHTML += output 
 })
 fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
 .then(res => res.json())
 .then(data =>  {   
   var output='';
     for(var i=0;i<data.records.length;i++)
     {
      output+= data.records[i].district+'<br>';
     }
   document.querySelector('#district').innerHTML += output 
})
fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
  .then(res => res.json())
  .then(data =>  {   
    var output='';
      for(var i=0;i<data.records.length;i++)
      {
        output+= data.records[i].min_price+'<br>';
      }
    document.querySelector('#min_price').innerHTML += output 
 })
 fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
 .then(res => res.json())
 .then(data =>  {   
   var output='';
     for(var i=0;i<data.records.length;i++)
     {
       if(i==7)
        output+='Black Gram' +'<br>';
       else 
      output+=data.records[i].commodity+'<br>';
     }
   document.querySelector('#commodity').innerHTML += output 
})
 fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
 .then(res => res.json())
 .then(data =>  {   
   var output='';
     for(var i=0;i<data.records.length;i++)
     {
      output+= data.records[i].max_price+'<br>';
     }
   document.querySelector('#max_price').innerHTML += output 
})
fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
  .then(res => res.json())
  .then(data =>  {   
    var output='';
      for(var i=0;i<data.records.length;i++)
      {
        output+= data.records[i].modal_price+'<br>';
      }
    document.querySelector('#modal_price').innerHTML += output 
 })
 fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
 .then(res => res.json())
 .then(data =>  {   
   var output='';
     for(var i=0;i<data.records.length;i++)
     {
      output+=data.records[i].variety+'<br>';
     }
   document.querySelector('#variety').innerHTML += output 
})
fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
  .then(res => res.json())
  .then(data =>  {   
    var output='';
      for(var i=0;i<data.records.length;i++)
      {
        output+= data.records[i].state+'<br>';
      }
    document.querySelector('#state').innerHTML += output 
 })
 fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10')
 .then(res => res.json())
 .then(data =>  {   
   var output='';
     for(var i=0;i<data.records.length;i++)
     {
      output+= data.records[i].timestamp+'<br>';
     }
   document.querySelector('#timestamp').innerHTML += output 
})
