function csvTo2d(data, delimeter=',')  {
    const titles = data.slice(0, data.indexOf('\n')).split(delimeter)
    const titleValues = data.slice(data.indexOf('\n') + 1).split('\n')
    const resultArr = titleValues.map(function(v) {
      const values = v.split(delimeter)
      const storeKeyValue = titles.reduce(function(obj, title, index) {
        obj[title] = values[index]
        return obj
      },
      
                                          {})
     
      return storeKeyValue;
    
  })
   
    return resultArr;
    }
   
   
  console.log(csvTo2d('Name,Roll Number\nRohan,01\nAryan,02'))