//Task 1
let players = [
    {name: "Alex", height: 190, weight: 85, sport: "rugby"},
    {name: "Boris", height: 180, weight: 75, sport: "football"},
    {name: "Vladimir", height: 175, weight: 70, sport: "hockey"},
    {name: "George", height: 185, weight: 80, sport: "rugby"},
    {name: "Dmitry", height: 170, weight: 65, sport: "hockey"},
    {name: "Eugene", height: 195, weight: 90, sport: "football"},
    {name: "Zachary", height: 188, weight: 82, sport: "rugby"},
    {name: "Ivan", height: 182, weight: 77, sport: "football"},
    {name: "Kirill", height: 178, weight: 73, sport: "hockey"},
    {name: "Leonid", height: 192, weight: 87, sport: "rugby"},
    {name: "Michael", height: 176, weight: 71, sport: "hockey"},
    {name: "Nicholas", height: 198, weight: 93, sport: "football"},
    {name: "Oleg", height: 186, weight: 79, sport: "rugby"},
    {name: "Paul", height: 174, weight: 69, sport: "hockey"},
    {name: "Roman", height: 184, weight: 78, sport: "football"}
    ];
    
    function addGoals(){
        return Math.floor(Math.random()*21);
    }
    let playersWithGoals = players.map(player => ({
        ...player,
        goals: addGoals()} ));

    console.log(playersWithGoals);

    //Task 2
    const mediumSize = players.filter(player => player.height >= 180 && player.weight < 80);
    console.log(mediumSize);

    //Task3
    playersWithGoals.sort ((a, b) => a.goals - b.goals);
    console.log(playersWithGoals);