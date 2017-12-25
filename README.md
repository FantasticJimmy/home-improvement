# README

# create a .env file in root folder
# in the email

Lexop Challenge

# install server side dependencies
bundle install

# setup db
rake db:creaate
rake db:migrate

# install frontend dependencies
npm install


# run dev 
foreman start -f Procfile.dev

# run server and webpack in seprate terminal
rails s
sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpack-dev-server'


# test users from facebook

username: zyxwykiwel_1514062972@tfbnw.net
password: Abcde12345

username: ifkkmfupio_1514062968@tfbnw.net
password: Abcde12345

