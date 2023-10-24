clone this repo
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
php artisan storage:link
npm run dev