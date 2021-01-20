const filterData=(name,ActualData)=>{
       return ActualData.filter((data)=>
          data.word.toLowerCase().includes(name.toLowerCase())
       )
}

export default filterData;