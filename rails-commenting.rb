# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This controller is generated with $ rails generate controller BlogPost in order for us to create the methods that will be used. The method of index is created her. Iknow this because there is a def in front of the method name
class BlogPostsController < ApplicationController
  def index
     
# ---2) When the method is called This instance variable @posts will show all the contents in the array that will be all the instances of the class BlogPost returned in an array, unless otherwise specified.
    @posts = BlogPost.all
  end
    
# ---3) This method is named show and when called upon the instance variable @post will look for a specific parameter that we have told is the :id. that allows us to put a param of an id into the url to show that instance of BlogPost. 
  def show
    @post = BlogPost.find(params[:id])
  end
  
# ---4) This method is named new and when called upon the instance variable @post will create a new instance of the class BlogPost. this will be stored and can be seen when invoking the method of index. Not sure if it's a typo, but line 27 shows the name of a method called create.
  def new
    @post = BlogPost.new
  end

  def create
# ---5) This instance variable @post uses .create on the class BlogPost with the argument of blog_post_params. this creates an instance of BlogPost inside the path blog_post_params. if this instance variable is valid, then the method will redirect us to blog_post_path which is this instance variable as the argument.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

# ---6) I went ahead and moved the name of this method under here to just talk about the whole thing together.. OCD got the better of me.. this method is named edit, which when invoked will create an instance variable that will find a specific id: that we established as the parameters. not sure if the spot of the question is important, so i left line 41 and 42 here. it is the name of the method called update and it creates the instance variable @post that finds the parameter of id: under the class of BlogPost. The rest continues on the next question.
 def edit
    @post = BlogPost.find(params[:id])
  end


  def update
    @post = BlogPost.find(params[:id])
# ---7) The instance variable defined in the scope of this method will update if the @post is valid will save the update and redirect_to blog_post_path. line 50 is a method called destroy with an instance variable @post that will be what is found with the id: as the param in the instances of the class BlogPost. the if statement is a conditional used to see if the condition is met.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
# ---8) if this condition is met the method redirect_to will redirect the user to the blog_posts_path which can be set up in the routes.rb file
      redirect_to blog_posts_path
    end
  end

# ---9) This area is as titled.. private. my understanding is this area can't be viewed or modified by anyone but the athorized author(or person who has the app file to update and push the updated file to the server) in here we have a method with the naming convention of blog_post_params.
  private
  def blog_post_params
# ---10) I wish there was an easier way to explain this in my own words but, until i figure that out, here goes. this is saying that when the method blog_post_params is invoked, it requires the parameter as the symbol :blog_post and it only allows/permits with (.permit) the parameters assosiated with the symbols :title and :content to be created or altered. if these parameters are not met an error message is thrown.
    params.require(:blog_post).permit(:title, :content)
  end
end
