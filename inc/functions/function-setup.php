<?php

/**
 * Setup Theme Styles and Scripts
 */
function theme_scripts()
{
    $uri     = get_template_directory_uri();
    $theme   = wp_get_theme(get_template());
    $version = $theme->get('Version');

    // Enqueue jQuery từ WordPress Core
    wp_enqueue_script('jquery');

    // CSS Files
    wp_enqueue_style('flatsome-css', $uri . '/assets/css/flatsome.css', array(), $version);
    wp_enqueue_style('flatsome-main-inline-css', $uri . '/assets/css/main.css', array(), $version);

    // JavaScript Files
    wp_enqueue_script('flatsome-js', $uri . '/assets/js/flatsome.js', array('jquery'), null, true);
    wp_enqueue_script('flatsome-chunk-js', $uri . '/assets/js/chunk.slider.js', array('jquery'), null, true);
    wp_enqueue_script('flatsome-popups-js', $uri . '/assets/js/chunk.popups.js', array('jquery'), null, true);
}

add_action('wp_enqueue_scripts', 'theme_scripts', 100);
