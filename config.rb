# Require any additional compass plugins here.
require "sass-globbing"
require "bootstrap-sass"



# Set this to the root of your project when deployed:
http_path = "/"
css_dir = File.join('app','themes','default')
sass_dir = File.join('app','themes','default_sass')
images_dir = File.join('app','themes','default','images')
javascripts_dir = "js"
fonts_dir = File.join('app','themes','default','fonts')

debug_info = true
environment = 'development'
output_style =  (environment == 'development') ? :expanded : :compressed


# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
line_comments = (environment == 'development')
color_output = false
sourcemap = (environment == :development)

additional_import_paths = [File.join('node_modules','iui-general','lib','src'), File.join('node_modules','iui-table','lib','src'), File.join('node_modules','longitudinal-view','lib','src')]



# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass