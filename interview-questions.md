# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

---

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: This doesn't sounds like a mistake since the foreign key is on the student model. Now, if you created a student model and forgot to add the foreign key :cohort_id, you can just generate a migration in the rails console with the command ($ rails g migration add_column_foreign_key) and in the file you will find inside
(db/migrate) go ahead and create the change that should look like this.

```ruby
class AddColumnForeignKey < ActiveRecord::Migration[]
  def change
  add_column :students, :cohort_id, :integer
  end
end
```

Don't forget to ($ rails db:migrate)!
And it's also important to make sure you create the proper association for the student model inside (app/models/student.rb) should look like this.

```ruby
class Student < ApplicationRecord
  belongs_to :cohort
end
```

---

2. Which RESTful routes must always be passed params? Why?

Your answer: that is a good question. I thought all RESTful routes can be passed params, but I'm not clear as to which must have them.

Researched answer: After research, I think show, edit, create, update and destroy all require params(id) to be passed. from my understanding, these are doing a more specific job than Index and new.

---

3. Name three rails generator commands. What is created by each?

Your answer: I know of four so far, but here are three.
(1) Rspec: ($ rails g rspec:install) installs the dependencies required to test validations.
(2) Model: ($ rails g model) creates a table with columns that can take data known as a schema.
(3) Controller: ($ rails g controller) makes the controller file where we can place our methods to be used.

Researched answer: The four generate commands we have learned so far are Models, Migrations, Rspec and Controller
Migrations: creates an active record migration we can use to change our database. more specifically we have used it to make changes to the models we generated.

---

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Controller method here is "index", since this will show the index of all the instances of students.

action: "POST" location: /students
Controller method here is "create", this will make a new instance of the class student.

action: "GET" location: /students/new
Controller method here is "new", this uses a form to take information that can be used to make a new instance of student in the data base.

action: "GET" location: /students/2
The controller method here is "show", this will show the instance of the class student with the primary key of 2.

action: "GET" location: /students/2/edit
The controller method here is "edit", this will use a form to edit the instance of the class student with the primary key of 2.

action: "PATCH" location: /students/2
The controller method here is "update", this will allow the instance of the class student with the primary key of 2 to be overwritten.

action: "DELETE" location: /students/2
The controller method here is "destroy", this will delete any information associated with the instance of the class student with the primary key of 2.

---

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

-First
I drew a sketch of what i want to see on my app and what do i want it to do and look like from the users point of view.

(1)As a first time user, I open the app to be greated and asked to provide info like my name, birth date, etc
(2)Now I can choose a custom themed background, and style
(3)The backgrounds include but is not limited to, color, presets, in app purchased backgrounds and the ability to upload your own.
(4)The styles include but are not limited to a selection of either checklist style, flowchart, alarm clock style, etc
(5)As a user I can set goals for myself like weight loss, workout times/days, the amount of tasks to be completed per day/ week/ month/ year, etc.
(6)As a user, I can see my custom app and a place for me to input my to do list. this brings up a form that I can fill out.
(7)As a user, I provide the thing I want to be done and a time that it needs to be done by and any reminders/alarms I might prefer.
(8)As a user, I can mark individual things on my list that I complete and I see them crossed out or dissapear(whatever I prefer)
(9)As a user, I can see a settings button that I can use to view my preferences, user info, history, etc
(10)As a user, I can navigate my settings and see an option to donate to the amazing developer of this app that has made my life drastically more productive.
