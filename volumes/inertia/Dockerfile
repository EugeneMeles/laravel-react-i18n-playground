ARG PHP_TAG_CLI
FROM php:${PHP_TAG_CLI}

# Install system dependencies
RUN apk update && apk add --no-cache pcre-dev \
    $PHPIZE_DEPS \
    tar\
    curl \
    unzip \
    nodejs

# Set working directory
WORKDIR /var/www/html

ENTRYPOINT ["/usr/local/bin/php", "/var/www/html/artisan", "inertia:start-ssr"]
