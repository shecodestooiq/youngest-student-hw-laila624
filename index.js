var student = [
    {
      name: " NUTELLA ",
    },
    {
      name: " GALAXY ",
    },
    {
      name: " MYA ",
    },
  ];
  
  function showYoungestStudent(a, b ,c) {
   for (var i=0 ; i< 1 ; i++){
      student[0].age = a
      student[1].age = b
      student[2].age = c
      student[i].age = Math.min(a,b,c);
   console.log(student[i].age)
  
   }
   
  }
  
  showYoungestStudent(21,32,43);
  
module.exports = showYoungestStudent;