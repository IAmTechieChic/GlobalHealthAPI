class PagesController < ApplicationController
  def index
  end

  def about
  end
  
  def maps

  end
 
  def geo_search(sw, ne)
    self.geo_scope(bounds: [sw, ne]).where(active: true)
  end

end
