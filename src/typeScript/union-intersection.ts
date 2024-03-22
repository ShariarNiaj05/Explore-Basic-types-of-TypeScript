//  => |  Union Type
// => & Intersection type

type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  expertise: string[];
  experience: number;
};

// enum is not recommended to use 
enum Level {
    Junior = "Junior",
    Mid = "Mid",
    Senior = "Senior"
}

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: Level
};


const newDeveloper: JuniorDeveloper | NoobDeveloper = {
  name: "Shariar",
  expertise: ["React", "React Router", "Tailwind CSS"],
  experience: 0.3,
};

const developer: NextLevelDeveloper = {
  name: "Niaj",
  expertise: ["React", "React Router", "Tailwind CSS", "TypeScript", "Next JS"],
  experience: 1,
    leaderShipExperience: 0.6,
  level: Level.Mid
};
