module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
    
  let team =[];
  let membersArr=[];

  for(let member of members){
    if(typeof member == 'string'){
     membersArr = member.trim().split('');
      team.push(membersArr[0].toUpperCase());
    }
  }
  return team.sort().join('');
  } else {
    return false;
  }
  

};