class SubjectsController < ApplicationController
  respond_to :json

  def index
    respond_with Subject.all
  end

  def show
    respond_with Subject.find(params[:id])
  end

  def create
    respond_with Subject.create(params[:subject])
  end

  def update
    respond_with Subject.update(params[:id], params[:subject])
  end

  def destroy
    respond_with Subject.destroy(params[:id])
  end

end
