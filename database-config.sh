#!/bin/bash

php artisan migrate:refresh
php artisan db:seed
