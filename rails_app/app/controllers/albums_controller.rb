class AlbumsController < ApplicationController
    def index
        @albums = Album.order(:created_at).last(6)    
    end
    def new
        @albums = Album.new
    end
    def edit
        @albums = Album.find(params[:id])
    end
    def update 
        @albums = Album.find(params[:id])
        if @albums.update(album_params)
            flash[:success] = 'The album has just updated'
            redirect_to '/newest'     
        else
            render 'edit'
        end
    end
    
    def show
        @albums = Album.find(params[:id])
        #@a = @albums.account_id
        @photo = Photo.where(album_id: @albums)
        @b = Account.where(id: @albums.account_id)

        # @test = Account.joins(:photos).where(id: @albums)
 
    end


    private
    def album_params
        params.require(:album).permit :title_album
    end

end
