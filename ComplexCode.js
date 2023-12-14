/* Filename: ComplexCode.js */

// This code is a simulation of a social networking platform with advanced features

// Define a class for user profiles
class Profile {
  constructor(name, age, location, interests) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.interests = interests;
  }

  getInfo() {
    return `${this.name}, ${this.age}, ${this.location}`;
  }
}

// Define a class for posts
class Post {
  constructor(user, content, timestamp) {
    this.user = user;
    this.content = content;
    this.timestamp = timestamp;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Create an array of profiles
let profiles = [
  new Profile("Alice", 25, "New York", ["Reading", "Cooking"]),
  new Profile("Bob", 30, "London", ["Hiking", "Photography"]),
  new Profile("Charlie", 20, "Paris", ["Painting", "Dancing"])
];

// Create an array of posts
let posts = [
  new Post(profiles[0], "Hello world!", new Date()),
  new Post(profiles[1], "I just climbed Mount Everest!", new Date()),
  new Post(profiles[2], "Can't wait for the weekend!", new Date())
];

// Simulate user interactions
profiles[0].name = "Alice Smith";
profiles[1].age = 31;
profiles[2].location = "Berlin";

posts[0].addLike();
posts[1].addLike();
posts[1].addComment("Wow, that's amazing!");
posts[2].addComment("Me too!");

// Print out the updated profiles and posts
console.log("Updated Profiles:");
profiles.forEach((profile) => {
  console.log(profile.getInfo());
});

console.log("\nUpdated Posts:");
posts.forEach((post) => {
  console.log(`User: ${post.user.name}`);
  console.log(`Content: ${post.content}`);
  console.log(`Likes: ${post.likes}`);
  console.log(`Comments: ${post.comments}`);
  console.log(`Timestamp: ${post.timestamp}`);
  console.log("----------------");
});

// Perform advanced data analysis
let totalLikes = posts.reduce((total, post) => total + post.likes, 0);
let averageLikes = totalLikes / posts.length;
let oldestPost = posts.reduce(
  (oldest, post) => (post.timestamp < oldest.timestamp ? post : oldest),
  posts[0]
);

console.log("\nData Analysis:");
console.log(`Total likes: ${totalLikes}`);
console.log(`Average likes: ${averageLikes}`);
console.log(`Oldest post: User - ${oldestPost.user.name}, Content - ${oldestPost.content}`);