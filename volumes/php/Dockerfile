ARG PHP_TAG
FROM php:${PHP_TAG}

# Install system dependencies
RUN apk update && apk add --no-cache pcre-dev \
    $PHPIZE_DEPS \
    tar \
    curl \
    unzip

# Install php Composer:
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install php extensions:
# Laravel 10 requirements: https://laravel.com/docs/10.x/deployment#server-requirements
RUN docker-php-ext-install \
    mysqli pdo pdo_mysql \
    bcmath

# Install Redis PHP extension for interfacing with Redis
# (redis-5.3.7(stable), release date: 2022-02-15)
#RUN pecl install redis-5.3.7 && docker-php-ext-enable redis


# Set working directory
WORKDIR /var/www/html

COPY ./php.ini /usr/local/etc/php/conf.d/
