let superTeam = { 
    title:  prompt("Please, write the name of the team!"),
    leader: prompt("Please, write the name of the team's leader!"),
    members: prompt("Please, write the names of the members of the team by a COMMA!"),
    agenda: prompt("What are the goals and ideas of the team?"),
    isEvil: confirm("The team is evil or not?"),
};

alert("Here's the team:" + "\n"+ 
    "name - " + superTeam.title + "\n" + 
    "leader - " + superTeam.leader + "\n" +
     "members - " + superTeam.members + "\n" +
     "memberCount - " + superTeam.members.split(",").length++  + "\n" +
    "agenda - " + superTeam.agenda + "\n" +
    "isEvil - " + superTeam.isEvil
) 
               