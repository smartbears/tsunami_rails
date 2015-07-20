# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

ClinicalResearch::Application.configure do
  config.less.paths << File.join(Rails.root, 'app', 'assets', 'stylesheets')
end