## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
For my full stack project I want to build an app that connects parents. After thinking over a lot of ideas on where to go for the project, one of the ideas that excited me was a social networking app for parents.  The idea comes from the old saying that "It takes a village to raise a child," and my wife and I are seeing the truth behind this saying now that we have two kids ages 2yrs, and 11 months. However, I feel as though the quoted saying is very antiquated because, while it is true and relevant to today's day and age--because raising kids hasn't gotten any easier--as people, we don't live in the same dynamics we did in the past. We don't really live in 'villages' anymore, and the community dynamics are different. We have a lot of technology that parents didn't have 100, 50, or even 20 years ago. Are we leveraging the techonology, mainly the internet, to help us raise our kids as a 'village' or 'communally'?  My initial answer is: 'No.' There's a lot left to be desired when it comes to the internet connecting parents to communally help in parenting. Thus, that is the impetus for my idea.

I'd like to create an app that connects parents, and they can post and ask for help in a parenting matter, such as: "When is a good time to put my 2 yeard old to sleep?" or "What brand of diapers is best for a newborn with sensitive skin?" I know some example questions may sound 'medical' in nature, but what I envision is a community that posts and asks questions that are from any topic, be it medical, behavorial, best practice, etc. I'd want the landing page to have an infinite scroll of posts (like the infinite scrolling posts from FB or IG, reddit, etc.), and parents(users) can comment on posts, like posts, pin posts, or repost. This social aspect of enlisting other parents to help in topics that arise when raising children is really the 'stretch' goal I would say for this project.

For the time that we have allotted to complete this project, what I want to work on first is the functionality for the user (parent) to set up their kid as a 'collection' in database speak. I want to then set up functionality to have the user add various data about their child.  The different aspects of data, will be 'documents'. For example, a user with a newborn will have the ability to add data on times they feed the child, and how much was eaten, timestamps for the naps the child takes.  Also, there will be functionality to add documents for baths, activities, day/overnight trips data, and emergency contacts.
```

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
1. As a user, I want to be able to sign up.
2. As a user, I want to be able to link my child to my profile.
3. As a user, I want to be able to add daily activities that my child does with timestamps.
4. As a user, I want to be able to add daily meal data for when my child eats.
5. As a user, I want to be able to add emergency contacts for my child that I can share with selected users.
```

## Wireframes

Please create a wireframe of your planned front end.

```md
![ERD](./downloads/Project2Wireframe.png)
```

## Plan your resources

What resources will you need? What will the attributes and relationships be?

```md
I'm not too sure what "resources" means here..?
The attributes will be 'User', 'Child', 'baths', 'meals', 'naps', 'activities', 'trips', 'emergency'

User to child can be one to one or one to many.
Child to all other attributes will be one to many.
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your resources are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
![ERD](./downloads/Project2ERD.png)
```

## Routing

What routes will you need to make the proper request to your API?

```md
Get (by id),
Get (index)
Show,
Patch,
Delete,
Post
```
