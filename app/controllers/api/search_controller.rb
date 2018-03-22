class Api::SearchController < ApplicationController
  def query
    #will need to do logic to parse what kind of search later
    if params[:type] == "athlete"
      name = params[:query].split(' ')

      if name.length > 1 #searched with two names
        fname = name[0].downcase
        lname = name[1].downcase
        @users = User.where('lower(fname) LIKE ? AND lower(lname) LIKE ?', "%#{fname}%", "%#{lname}%")
        # @users = User.where('lower(fname) = ? AND lower(lname) = ?', fname, lname)
      else
        name = name[0].downcase
        @users = User.where('lower(fname) LIKE ? OR lower(lname) LIKE ?', "%#{name}%", "%#{name}%")
        # @users = User.where('lower(fname) = ? OR lower(lname) = ?', name, name)#
      end


      render :users
    end

  end
end
