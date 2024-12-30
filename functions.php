<?php
require get_template_directory() . '/inc/init.php';

function register_main_menu()
{
	register_nav_menus(array(
		'main-menu' => __('Main Menu', 'your-theme-textdomain'),
	));
}
add_action('after_setup_theme', 'register_main_menu');
add_theme_support( 'post-thumbnails' );