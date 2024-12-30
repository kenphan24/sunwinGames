<?php get_header(); ?>

<div id="content" class="content-area page-wrapper">
    <div class="row row-main">
        <div class="large-12 col">
            <div class="col-inner">
                <!-- Hiển thị tiêu đề bài viết -->
                <h1 style="text-align: center;">
                    <?php the_title(); ?>
                </h1>

                <!-- Hiển thị nội dung bài viết -->
                <div class="post-content">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>