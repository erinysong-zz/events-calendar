## Assignment Summary
Time spent on assignment: 6 hours 
* 1 hour design and research
* 2.5 hours basic implementation
* 2 hours on zoom feature and attempts at additional stretch features.
* 0.5 hour styling/refactoring and cleaning up code

### What I liked
In terms of implementation, I liked how I used helper functions to sanitize and format information in a way that is more practical to use when 
performing certain functions such as displaying the date on the event page or calculating where on the grid the event block should be located. Although they 
may not be as applicable in the context of this challenge, I hope that through an overall context if this was something that would be handed off to someone 
else for development that these functions and the documentation for these functions could be reused throughout other elements of this component. I'm also 
relatively happy with the documentation that I wrote throughout my code and hope that my code is readable enough to understand what each line functions as.

In addition, I'm glad that I took the time to hone in on little details that I hope improve the user experience of interacting with this component. For example,
events display their respective start and end date in their respective event blocks, but if an event lasts for only 1 day, we show only the one day during which 
it occurs. I also styled events with the same name to share the same color to add visual consistency.

I also am happy with the intention that I had behind what I was buliding for the component. Before writing any code, I brainstormed some iterations of 
what the best way the event timeline could structure its information in a way that allowed the user to most easily access the timeline's objective - 
which I interpreted to be presenting chronological information of what simultaneous and upcoming events a person had in their calendar. Although I 
didn't end up completing implementing my sketches (which can be linked [here](https://drive.google.com/file/d/1rEm-ynE6NPtkZ8klaCZ7FvPVxIBVBIEa/view?usp=sharing),
I think thinking about the big picture for this prompt definitely helped me to keep the main goal of this component in mind while building the timeline itself.

### What could be improved
So much. For one, I would've been divided this large timeline component into more granular components in order to account for both reusability and 
cleanliness. If I had more time, I definitely would've tried to refactor how I organized the timeline - initially I attempted to put everything in 
one component so that all information could be accessible from one spot, but I definitely should've taken the time to just use props to pass 
in information into different components. When I was trying to implement an additional feature that could create, edit, and delete events, I found that 
the configuration that I had was not optimal to implementing this feature as the entire timeline was implemented on one component. In contrast, if I 
implemented a singular component just for an event block, I could have easily integrated props and states that more efficiently stored the 
name, start, and end dates of events. For example, having a togglebar feature that allows the user to view events by week would definitely have been 
more space efficient as it would not require the user to scroll all the way to the date that they wish to view.

I also would have looked into more ways to make the timeline layout much more space efficient, as right now any overlapping events that don't fit in any 
of the existing columns simply go into a new column, but I wish that I thought more about what I could've done to configure grid space dynamically, especially 
since this feature would've helped when new event configurations came into the picture.

I also overall wish that I had more time to be more deliberate in what I wanted to do. There were several features that I idealistically sketched on my 
brainstorm sketches (eg: smooth scrolling to various dates when you clikced on them) that I had to abandon because they weren't as essential to the main 
objective of this assignment and also I started to wonder if those features would even really add anything beneficial to the user experience.

### Design Decisions
Like I said before, before I even started coding I researched and brainstormed ways in which the UI of this component could be displayed in a way 
that was useful and accessible to the user. I started by looking at different layouts for tools that keep track of events, such as Google Calendar, 
Facebook Events, and Dribbble (which I knew deep down was honestly more for my own aesthetic joy than any practical implementation). Looking at how these 
existing products displayed events in chronological order helped a lot in considering how humans process information and what is probably most important to 
them in timeline-like tools.

### How would I test this if I had more time
I think I mentioned this in my "what could be improved" section, but I feel like I definitely would have wanted to show my implementation to people 
I knew to see how intuitively people could understand the purpose and objective of this component. There were definitely assumptions that I made in terms of what 
would be most useful to include in the event timeline when designing initial sketches that I wish I could've learned about more through having my 
friends interact with this project's final results.

I definitely would have liked to make this component responsive as I think the thing I'm least satisfied with is the poor space efficiency. I think along with 
adding the additional stretch features, space efficiency is definitely the area I would have tested and improved upon the most if I had more time for this 
assignment.

## Final Reflections
I really enjoyed working on this assignment! Information architecture has always fascinated me, and this is the first time in a while that I have built out 
an entire component from scratch without using any external libraries, and it really puts into perspective how custom-made components are a lot more flexible 
and better-fitting into more specific functionalities that you might want them to have. While I wish I could've made more progress, I think that given my 
circumstances, which included some unfortunately terrible tech fiascos and badly timed little fires I had to put out the past few weeks, I am happy that 
I was able to put in the time to complete this assignment. If there is any feedback that I could possibly get on my process or my final product, I would 
be really happy to receive any criticism or advice. Thank you so much for the opportunity to let me complete this challenge once again and the multiple 
extensions!
