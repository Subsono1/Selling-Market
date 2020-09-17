# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Order.destroy_all
User.destroy_all

admin = User.create!(user_name: 'admin', email: 'myadmin@email.com', password: 'admin123', address: '123 Lane Street, New York, NY 10001' )
User.create!(user_name: 'Seb', email: 'myadmin@email.com', password: 'seb123', address: '124 Lane Street, New York, NY 10001' )

puts "#{User.count} users created"

Product.create!(title: 'Vintage Radio', price: ' 200', description: '1990 old cassette radio. almost new', img_url: 'https://davepopelka.files.wordpress.com/2010/03/radio2.jpg')
Product.create!(title: 'Yaacov Agam', price: '800', description: 'Agamograph by Yaacov Agam ', img_url: 'https://image.invaluable.com/housePhotos/Hiro/24/638024/H20889-L161361913.jpg')
Product.create!(title: 'Apple ipad', price: '500', description: 'Apple iPad (10.2-inch, Wi-Fi + Cellular, 32GB', img_url: 'https://images-na.ssl-images-amazon.com/images/I/71QWfo8NgIL._AC_SL1500_.jpg')
Product.create!(title: 'Bose Noise Cancelling Wireless', price: '', description: 'Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Black', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51ntWa1Q0sL._AC_SL1200_.jpg')

puts "#{Product.count} products created"

Orders.create!()

