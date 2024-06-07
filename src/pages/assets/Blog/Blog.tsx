import React from 'react';
import styles from '@/pages/assets/Blog/Blog.module.scss';
import Image from 'next/image';
import content from '../../../../public/content.json';

const Blog: React.FC = () => {
    const { blogs, blogTitle } = content;

    return (
        <div className={styles.blogWrapper}>
            <div className={styles.blogCards}>
                <div className={styles.blogCard}>
                    <h2 className={styles.blogCardTitle}>{blogTitle.title}</h2>
                </div>
                {blogs.map((blog, index) => (
                    <div key={index} className={styles.blogCard}>
                        <Image src={blog.image} alt={blog.title} width={50} height={50} className={styles.blogImage} />
                        <div className={styles.blogText}>
                            <h3 className={styles.blogCardTitle2}>{blog.title}</h3>
                            <p className={styles.blogAuthor}>{blog.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
