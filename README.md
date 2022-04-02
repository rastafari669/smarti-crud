# smarti-crud
Create a local databse named smart_db -> utf8_general_ci.
Rename '.env.example' file to '.env'.

inside the project root and fill the database connection information.

DB_CONNECTION=mysql, 

DB_HOST=127.0.0.1, 

DB_PORT=8889, 

DB_DATABASE=smart_db, 

DB_USERNAME=root, 

DB_PASSWORD=root, 

Open the terminal and navigate to crud-front and run npm i
Open a new terminal and navigate to crud-back and follow the instructions:
Run composer install or php composer.phar install
Run php artisan key:generate
Run php artisan migrate
Run php artisan serve

The laravel server will start http://127.0.0.1:8000

\make sure that sql is active as the data will be saved in a sql DB\
<img width="1667" alt="Screen Shot 2022-04-02 at 21 50 27" src="https://user-images.githubusercontent.com/48482551/161397206-10faba03-c58b-4df4-8a78-d3591f4b4774.png">
